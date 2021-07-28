import { post } from '@/utils/Request';
import { computed, onBeforeMount, reactive, ref, watch } from 'vue';

export function log<C>(target: C, key: string) {
	let value: any;

	Object.defineProperty(target, key, {
		enumerable: true, //对象属性是否可通过for-in和 Object.keys()，flase为不可循环，默认值为true
		configurable: true, //能否使用delete、能否需改属性特性、或能否修改访问器属性、，false为不可重新定义，默认值为true
		set: function(this: any, newValue: any) {
			console.log(`[LOG] set ${key}: `, value, '-->', newValue);
			// console.log(`[LOG] whole data: `, this);
			value = newValue;
		},
		get: function() {
			return value;
		},
	});
}

/**
 * 同步改变 store类的 loading属性
 */
export function loader(
	target: any,
	propertyName: string,
	descriptor: TypedPropertyDescriptor<(...params: any) => any>
) {
	let method = descriptor.value!;

	descriptor.value = async function(this: BaseStore, ...rest) {
		try {
			this.loading = true;
			return await method.call(this, ...rest);
		} catch (e) {
			// alert(e.message);
			throw e;
		} finally {
			this.loading = false;
		}
	};
}

export type QueryType = { page_index_str: number };

export default abstract class BaseStore<T = {}, Q = {}> {
	data: T;

	dataInited: boolean;

	loading: boolean;

	param: Q;

	protected queryApi!: string;

	constructor(private dataClass: new () => T, initParam: any = {}) {
		this.dataInited = false;
		this.loading = false;
		this.data = this.initDefaultValue();
		this.param = <Q>initParam;
	}

	protected initDefaultValue(): T {
		return new this.dataClass();
	}
	// abstract initDefaultValue(): T;

	@loader
	async fetchData() {
		const result = await post<T>(this.queryApi, { ...this.param });

		Object.assign(this.data, result);

		if (!this.dataInited) {
			this.dataInited = true;
		}
	}

	// set param(arg: any) {
	// 	Object.assign(this.queryParam, arg);
	// }
	// get param(): Q {
	// 	return this.queryParam;
	// }
}

/**
 * 不要混用 hook返回的data 和 store里的data
 * @param store
 */
export function generateHook<C extends BaseStore<T, Q>, T, Q = {}>(Store: new (init?: Q) => C, iniParam?: Q) {
	let store = reactive(new Store(iniParam));
	let data = store.data;
	// console.log('DATA:', data);

	const res = {
		store,
		// @ts-ignore
		data: reactive<T>(data),
		initializedRef: ref(computed(() => store.dataInited)),
	};

	return function(initParam: Partial<Q> = {}) {
		Object.assign(store.param, initParam);

		onBeforeMount(async () => {
			// console.log('HOOK: onBeforeMount');
			if (!res.initializedRef.value) {
				console.log('[HOOK] fetch initial data');

				await store.fetchData();
				Object.assign(data, store.data);

				// // 因为fetchData里给 store.data 新赋值了，
				// // 在 Object.assign 里会先给 accountRef 每个属性赋值
				// // 必须在此引用回来，保持accountStore.data 与 accountRef 是同一个引用
				// // 不然会有更新不触发
				// store.data = data;
			}
		});

		watch(
			() => store.param,
			() => {
				// console.log('watched param change:', store.param);
				store.fetchData();
			},
			{
				deep: true,
			}
		);

		return res;
	};
}
