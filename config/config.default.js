/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1574929750514_7369';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    view: {
      mapping: {
        root: path.join(appInfo.baseDir, 'app/view'),
        '.html': 'nunjucks',
      },
    },
    assets: {
      public: '/public',
      devServer: {
        autoPort: true,
        command: 'umi dev --port={port}',
        env: {
          APP_ROOT: path.join(__dirname, '../app/web'),
          BROWSER: 'none',
          SOCKET_SERVER: 'http://127.0.0.1:{port}',
        },
        debug: true,
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
