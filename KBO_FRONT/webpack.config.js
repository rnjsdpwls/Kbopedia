// webpack.config.js

const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  // 다른 설정...
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      target: 'node',
      externals: [nodeExternals()],
      // 다른 필요한 모듈이 있다면 추가
    },
  },
  // 다른 설정...
};
