<template>
	<a-layout>
		<a-layout-header :class="styles.header">
			<Headbar />
		</a-layout-header>
		<a-layout :class="styles.body">
			<a-layout-sider
				collapsible
				theme="light"
				v-model:collapsed="appStore.leftSideCollapsed"
				collapsedWidth="80"
				width="240"
				:class="styles.bodyLeft"
			>
				<Sidebar />
			</a-layout-sider>
			<a-layout-content>
				<slot></slot>
			</a-layout-content>
			<a-layout-sider
				collapsible
				theme="light"
				v-model:collapsed="appStore.rightSideCollapsed"
				collapsedWidth="80"
				width="386"
				:class="styles.bodyRight"
			>
				bbbbbbbb2
			</a-layout-sider>
		</a-layout>
	</a-layout>
</template>
<script lang="ts">
	import { useAppStore } from '@/stores/AppStore';
	import { defineComponent } from 'vue';
	import Headbar from './Headbar/index';
	import styles from './index.module.scss';
	import Sidebar from './Sidebar';

	export default defineComponent({
		name: 'DefaultLayout',
		components: {
			Headbar,
			Sidebar,
		},
		setup() {
			let { appStore } = useAppStore();
			return {
				appStore,
				styles,
			};
		},
	});
</script>
