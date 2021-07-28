import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';
import styles from './index.module.scss';

export default defineComponent({
	name: 'MainSectionHead',
	props: {
		redLead: {
			type: Boolean,
			required: false,
			default: true,
		},
		moreLink: {
			type: String,
			required: false,
			default: '',
		},
	},
	setup(props, { slots }) {
		const { t } = useI18n({ useScope: 'global' });
		return () => (
			<div class={styles.mainSecHeadText}>
				<span class={styles.label}>
					{props.redLead && <span class={styles.redCap}></span>}
					{slots.default?.()}
				</span>

				{props.moreLink && (
					<RouterLink class={styles.more} to={props.moreLink}>
						{t('common.more')}
					</RouterLink>
				)}
			</div>
		);
	},
});
