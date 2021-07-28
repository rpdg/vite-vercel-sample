import HelloWorld from '@/components/HelloWorld.vue';
import { defineComponent } from '@vue/runtime-core';
import pic from './assets/logo.png';

export default defineComponent({
	setup() {
		return () => (
			<>
				<img alt='Vue logo' src={pic} />
				<HelloWorld msg='Hello Vue 3 + Vite' />
			</>
		);
	},
});
