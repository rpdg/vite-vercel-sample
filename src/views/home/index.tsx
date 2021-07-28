import Player from '@/components/Player';
import MainSectionHead from '@/components/Texts/MainSectionHead';
import { Carousel } from 'ant-design-vue';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import styles from './index.module.scss';
import SpeakerSection from './speakers';

export default defineComponent({
	name: 'Home',
	setup() {
		const { t } = useI18n();

		return () => {
			return (
				<>
					<MainSectionHead redLead={false}>{t('menu.home')}</MainSectionHead>
					<Carousel autoplay class>
						<img class={styles.fullWidthImage} src='//via.placeholder.com/367x240.jpg?text=pic-1' alt='' />
						<img class={styles.fullWidthImage} src='//via.placeholder.com/767x240.jpg?text=pic-2' alt='' />
						<img class={styles.fullWidthImage} src='//via.placeholder.com/767x240.jpg?text=pic-3' alt='' />
					</Carousel>

					<MainSectionHead moreLink='/news/page2'>{t(`homePage.sponsor`)}</MainSectionHead>
					<div class={styles.gridCols2}>
						<div class={styles.rectangleItem}>
							<img src='//via.placeholder.com/372x368.jpg?text=pic-2-1' />
						</div>
						<div class={styles.rectangleItem}>
							<img src='//via.placeholder.com/372x168.jpg?text=pic-2-1' />
						</div>
						<div class={styles.rectangleItem}>
							<img src='//via.placeholder.com/372x168.jpg?text=pic-2-1' />
						</div>
						<div class={styles.rectangleItem}>
							<img src='//via.placeholder.com/372x168.jpg?text=pic-2-1' />
						</div>
						<div class={styles.rectangleItem}>
							<img src='//via.placeholder.com/372x168.jpg?text=pic-2-1' />
						</div>
					</div>

					<MainSectionHead moreLink='/news/page1'>{t(`homePage.presentation`)}</MainSectionHead>
					<div class={styles.gridCols2}>
						<div class={styles.rectangleItem}>
							<Player
								video={
									'//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4'
								}
								poster={
									'//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg'
								}
							/>
						</div>
					</div>

					<SpeakerSection />

					<MainSectionHead>{t('homePage.recommended')}</MainSectionHead>
					<div class={styles.gridCols4}>
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

					<MainSectionHead>{t('homePage.news')}</MainSectionHead>
					<div class={`${styles.gridCols3} ${styles.pd_20} ${styles.bg_white}`}>
						<div class={styles.newsCard}>
							<img src='//picsum.photos/150/150' alt='' />
							<div class={styles.title}>test title</div>
							<div class={styles.content}>
								To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The
								slings and arrows
							</div>
						</div>
						<div class={styles.newsCard}>
							<img src='//picsum.photos/150/150' alt='' />
							<div class={styles.title}>test title</div>
							<div class={styles.content}>
								To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The
								slings and arrows
							</div>
						</div>
						<div class={styles.newsCard}>
							<img src='//picsum.photos/150/150' alt='' />
							<div class={styles.title}>test title</div>
							<div class={styles.content}>
								To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The
								slings and arrows
							</div>
						</div>
						<div class={styles.newsCard}>
							<img src='//picsum.photos/150/150' alt='' />
							<div class={styles.title}>test title Whether it is nobler in the mind to suffer</div>
							<div class={styles.content}>
								To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The
								slings and arrows
							</div>
						</div>
					</div>
				</>
			);
		};
	},
});
