import ErrorLayout from '@/components/Layouts/Error';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Page403',
	setup() {
		return () => <ErrorLayout code={404} message='Page not found' />;
	},
});
