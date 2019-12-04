export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      { path: '/', component: '../pages/index' },
      { path: '/products', component: '../pages/products' },
      { path: '/cases', component: '../pages/cases' },
      { path: '/monitors', component: '../pages/monitors' },
    ],
  },
];
