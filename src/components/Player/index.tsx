import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
import XgPlayer from 'xgplayer';
export default defineComponent({
	name: 'Home',
	props: {
		video: {
			type: String,
			required: true,
		},
		poster: {
			type: String,
			required: false,
			default: '',
		},
	},
	setup(props) {
		let domRef = ref<HTMLDivElement>();

		let player: XgPlayer;

		onMounted(() => {
			player = new XgPlayer({
				el: domRef.value,
				autoplay: false,
				volume: 0.5,
				url: props.video,
				poster: props.poster,
				videoInit: true,
				fluid: true,
				fitVideoSize: 'auto',
			});
		});

		onBeforeUnmount(() => {
			player.destroy();
		});

		return () => <div ref={domRef}></div>;
	},
});
