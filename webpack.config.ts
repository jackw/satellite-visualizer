import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import type { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import grafanaConfig, { type Env } from './.config/webpack/webpack.config';

const config = async (env: Env): Promise<Configuration> => {
  const baseConfig = await grafanaConfig(env);

  return merge(baseConfig, {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: path.resolve(__dirname, 'node_modules/cesium/Build/Cesium'), to: 'cesium' },
        ],
      }),
    ],
    resolve: {
      fallback: { https: false, zlib: false, http: false, url: false },
      mainFiles: ['index', 'Cesium'],
    },
  });
};

export default config;
