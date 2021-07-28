import IconFont from '@/components/IconFont';
import { defineComponent, PropType } from 'vue';
import styles from './index.module.scss';

export default defineComponent({
	props: {
		label: {
			type: String,
			required: true,
		},
		iconSymbol: {
			type: String,
			required: true,
		},
		onClick: {
			type: Function as PropType<() => void>,
			required: false,
		},
	},
	name: 'MyItbIcon',
	setup(props) {
		return () => (
			<div
				class={styles.one}
				onClick={() => {
					props.onClick && props.onClick();
				}}
			>
				<div class={styles.navRoundIcon}>
					<IconFont type={props.iconSymbol} style={{ fontSize: '24px' }} />
				</div>
				<span class={styles.navText}>{props.label}</span>
			</div>
		);
	},
});
