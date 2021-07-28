import { defineComponent } from 'vue';
import styles from './index.module.scss';

export default defineComponent({
	name: 'LoginLayout',
	setup(props, { slots }) {
		return () => (
			<div class={styles.wapper}>
				<div class={styles.pannel}>{slots.default?.()}</div>
			</div>
		);
	},
});
