import MainSectionHead from '@/components/Texts/MainSectionHead';
import { Carousel } from 'ant-design-vue';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import styles from './index.module.scss';

export default defineComponent({
	name: 'HomePage_SpeakerSection',
	setup() {
		const { t } = useI18n({ useScope: 'global' });
		const router = useRouter();

		function gotoSpeackerDetail(evt: Event) {
			let img = evt.target as HTMLImageElement;
			let speakerId = img.dataset['speaker'];

			router.push('/speakers/' + speakerId);
		}

		return () => (
			<>
				<MainSectionHead moreLink='/speakers'>{t('homePage.speaker')}</MainSectionHead>

				<Carousel autoplay style={{ backgroundColor: '#eee' }}>
					<img
						class={styles.fullWidthImage}
						src='//via.placeholder.com/765x240.jpg?text=11'
						data-speaker='aaa'
						onClick={gotoSpeackerDetail}
					/>
					<img
						class={styles.fullWidthImage}
						src='//via.placeholder.com/765x240.jpg?text=21'
						data-speaker='bbb'
						onClick={gotoSpeackerDetail}
					/>
				</Carousel>

				<div class={`${styles.gridCols5} ${styles.mg_t_20}`}>
					<div class={styles.squareItem}>
						<img src='//picsum.photos/120/120' />
					</div>
					<div class={styles.squareItem}>
						<img src='//picsum.photos/150/120' />
					</div>
					<div class={styles.squareItem}>
						<img src='//picsum.photos/150/170' />
					</div>
					<div class={styles.squareItem}>
						<img src='//picsum.photos/150/150' />
					</div>
					<div class={styles.squareItem}>
						<img src='//picsum.photos/130/120' />
					</div>
				</div>
			</>
		);
	},
});
