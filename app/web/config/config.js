// ref: https://umijs.org/config/
import routes from './routes.config';

// ref: https://umijs.org/plugin/umi-plugin-react.html
const plugins = [
  ['umi-plugin-react', {
    antd: true,
    dva: true,
    dynamicImport: { webpackChunkName: true },
    title: 'web',
    target: { ie: 11 },
    dll: true,
    locale: {
      enable: true,
      default: 'zh-CN',
    },
    routes: {
      exclude: [
        /models\//,
        /services\//,
        /model\.(t|j)sx?$/,
        /service\.(t|j)sx?$/,
        /components\//,
      ],
    },
  }],
];

export default {
  treeShaking: true,
  routes,
  plugins,
  // ignoreMomentLocale: true,
  // lessLoaderOptions: { javascriptEnabled: true },
  // disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, localIdentName, localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }
      const match = context.resourcePath.match(/src(.*)/);
      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = antdProPath
          .split('/')
          .map(a => a.replace(/([A-Z])/g, '-$1'))
          .map(a => a.toLowerCase());
        return `pino${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }
      return localName;
    },
  },
  // extra configuration for egg
  runtimePublicPath: true,
}
