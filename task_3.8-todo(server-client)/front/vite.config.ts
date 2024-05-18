import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/

const cherryPickedKeys = ['BASE_URL'];

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	const processEnv = {};
	cherryPickedKeys.forEach((key) => (processEnv[key] = env[key]));
	return {
		plugins: [react()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
		define: {
			'process.env': processEnv,
		},
	};
});
