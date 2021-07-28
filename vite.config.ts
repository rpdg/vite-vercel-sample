import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import consts from 'rollup-plugin-consts';
import { defineConfig } from 'vite';
import importCDN, { autoComplete } from 'vite-plugin-cdn-import';
import viteComponents, { AntDesignVueResolver } from 'vite-plugin-components';
import styleImport from 'vite-plugin-style-import';

const ItbRed = '#AB2B2F';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		sourcemap: process.env.NODE_ENV != 'production',
		commonjsOptions: {},
	},
	css: {
		preprocessorOptions: {
			scss: {},
			less: {
				javascriptEnabled: true,
				modifyVars: {
					'primary-color': ItbRed,
					'layout-header-background': '#fff',
					'switch-color': '#e5bfc0',
					'menu-item-active-bg': ItbRed,
					// 'menu-highlight-color': ItbRed,
					// 'menu-item-active-border-width': '0px',
				},
			},
		},
	},
	plugins: [
		vue(),
		vueJsx(),
		importCDN({
			modules: [
				autoComplete('vue'),
				autoComplete('axios'),
				{
					name: 'moment',
					var: 'moment',
					path: ['moment.js', 'locale/zh-cn.js'],
				},
				// {
				// 	name: 'ant-design-vue',
				// 	var : 'antd' ,
				// 	path: 'dist/antd.min.js',
				// 	css : 'dist/antd.min.css'
				// },
			],
		}),
		viteComponents({
			customComponentResolvers: [AntDesignVueResolver()],
		}),
		// vitePluginImp({
		// 	libList: [
		// 		{
		// 			libName: 'ant-design-vue',
		// 			style(name) {
		// 				if (/popconfirm/.test(name)) {
		// 					// support multiple style file path to import
		// 					return [
		// 						'ant-design-vue/lib/button/style/index',
		// 						'ant-design-vue/lib/popover/style/index',
		// 					];
		// 				}
		// 				else if (/menu/.test(name)) {
		// 					// support multiple style file path to import
		// 					return [
		// 						'ant-design-vue/lib/menu/style/index',
		// 						'ant-design-vue/lib/tooltip/style/index',
		// 					];
		// 				}
		// else if (/month-picker/.test(name)) {
		// 	return 'ant-design-vue/es/date-picker/style/index';
		// }
		// 				return `ant-design-vue/lib/${name}/style/index`;
		// 			},
		// 		},
		// 	],
		// }),
		styleImport({
			libs: [
				{
					libraryName: 'ant-design-vue',
					esModule: true,
					resolveStyle: (name) => {
						if (/month-picker/.test(name)) {
							return 'ant-design-vue/es/date-picker/style/index';
						}
						return `ant-design-vue/es/${name}/style/index`;
					},
				},
			],
		}),
		consts({
			timeStamp: new Date().toLocaleString('en-GB'),
		}),
	],
	resolve: {
		alias: [
			{ find: '@', replacement: '/src' },
			{ find: /^~/, replacement: '' },
			// { find: 'vue-i18n', replacement: 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js' },
		],
	},
	optimizeDeps: {
		include: ['axios', 'vue-router', 'ant-design-vue', 'vue' , 'moment'],
	},
	server: {
		host: '0.0.0.0',
		hmr: {
			protocol: 'ws',
			host: 'localhost',
		},
		proxy: {
			'/post': {
				target: 'https://jsonplaceholder.typicode.com',
				changeOrigin: true,
			},
		},
	},
});
