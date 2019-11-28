'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  assets: {
    enable: true,
    package: 'egg-view-assets',
  },
  nunjunks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
};
