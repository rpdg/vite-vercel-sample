import axios, { AxiosError, AxiosResponse } from 'axios';

export interface ApiResult<T> {
	code: number;
	status: boolean;
	message: string;
	data: T;
}

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL as string;
axios.defaults.timeout = 30e3;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// default timeout is 0 (no timeout)
const service = axios.create();

// request interceptor
// service.interceptors.request.use(

// 	async (config: AxiosRequestConfig) => {

// 		return config;
// 	},
// 	(err) => {
// 		console.error(err);
// 		return Promise.reject(err);
// 	}
// );

// response interceptor
service.interceptors.response.use(
	(response) => {
		const result = response.data as ApiResult<any>;
		if (!result.status && result.code !== 200) {
			alert(result.message || `Error ${result.code}`);
			//throw new Error(result.message || 'Error');
			return Promise.reject(new Error(result.message ?? `Error ${result.code}`));
		} else {
			return response;
		}
	},
	(error: AxiosError) => {
		//console.error(error);
		const resp = error.response;
		if (resp && resp.status && resp.data) {
			switch (resp.status) {
				// 		// 	case 400:
				// 		// 	break;
				// 		// 	case 401:
				// 		// 	break;
				// case 403:
				// 	message.error(resp.data.error);
				// 	authenStore.removeToken();
				// 	break;
				default:
					alert(resp.data.message);
				//return Promise.reject(new Error(resp.data.error ?? 'Error'));
			}
		}
		return Promise.reject(new Error(resp?.data?.error ?? 'Network error'));
	}
);

const { CancelToken, isCancel } = axios;

async function post<T>(tUrl: string, params?: any) {
	const source = CancelToken.source();

	let bodyFormData = new FormData();
	let uploadMode = false;

	if (params) {
		for (let key in params) {
			let currentValue = params[key];
			// 如果是FileList
			if (currentValue.length && currentValue[0] instanceof File) {
				uploadMode = true;
				currentValue.forEach((file: File) => {
					bodyFormData.append(key, file);
				});
			} else if (currentValue instanceof File) {
				uploadMode = true;
				bodyFormData.append(key, currentValue);
			} else {
				bodyFormData.append(key, currentValue);
			}
		}
	}

	let serve = service;

	if (uploadMode) {
		let headers = {
			'Content-Type': 'multipart/form-data',
		};

		serve = axios.create({
			headers,
			timeout: 0, // `0` (no timeout)
		});
	}

	try {
		let resp = await serve.post<ApiResult<T>>(tUrl, bodyFormData, { cancelToken: source.token });
		return parseResponse<T>(resp);
	} catch (err) {
		if (isCancel(err)) {
			console.log('Request canceled', err.message);
		}
		// alert(err.message);
		throw err;
	}
}

async function get<T>(tUrl: string, params?: any) {
	const source = CancelToken.source();

	try {
		let resp = await service.get<ApiResult<T>>(tUrl, { params, cancelToken: source.token });
		return parseResponse<T>(resp);
	} catch (err) {
		if (isCancel(err)) {
			console.log('Request canceled', err.message);
		}
		// alert(err.message);
		throw err;
	}
}

function parseResponse<T>(response: AxiosResponse<ApiResult<T>>): T {
	let resp: ApiResult<T> = {
		...response.data,
	};
	return resp.data as T;
}

// a fetching similator
function delay(t: number, v?: any): Promise<any> {
	return new Promise(function(resolve) {
		setTimeout(resolve.bind(null, v), t);
	});
}

export { get, post, delay, axios, parseResponse };

