import HelloWorld from '@/views/errors/404';
import { defineComponent } from '@vue/runtime-core';
import pic from './assets/logo.png';

export default defineComponent({
	setup() {
		return () => (
			<>
				<img alt='Vue logo' src={pic} />
				<HelloWorld />
			</>
		);
	},
});
