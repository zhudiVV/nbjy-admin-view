import { defineConfig, loadEnv } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
	const env = loadEnv(mode, process.cwd(), "");
	return {
			plugins: [createVuePlugin()],
			base: "./",
			resolve: {
			  // 别名
			  alias: [
			    {
			      find: "@",
			      replacement: "/src",
			    },
			  ],
			},
			build: {
			  cssCodeSplit: true,
			  sourcemap: true
			},
			server: {
				cors: true,
				host: "0.0.0.0",
				proxy: {
					"/users": {
					  target: env.VITE_API_TARGET,
					  changeOrigin: true,
					  rewrite: (path) => 
					    path.replace(/^\/users/, "users")
					}
				}
			}
	}
})
