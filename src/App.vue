<template>
	<a-config-provider :locale="locale" style="height: 100%;">
		<router-view />
	</a-config-provider>
</template>
<script lang="ts">
	import { useAppStore } from '@/stores/AppStore';
	export default {
		setup() {
			const { appStore } = useAppStore();
			return {
				locale: appStore.antdLocale,
			};
		},
	};
</script>
<style global>
	.ant-menu-item-selected {
		color: #fff !important;
	}
</style>
