import { defineComponent } from 'vue';
import styles from './index.module.css';
export default defineComponent({
	props: {
		code: {
			type: Number,
			reuuired: true,
		},
		message: {
			type: String,
			required: true,
		},
	},
	name: 'ErrorLayout',
	setup(props, { slots }) {
		return () => (
			<div class={styles.errorContainer}>
				<h1>{props.code}</h1>
				<span>{props.message}</span>
			</div>
		);
	},
});
