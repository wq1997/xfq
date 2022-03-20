import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/register',
      component: '@/pages/register',
    },
    {
      path: '/login',
      component: '@/pages/login',
    },
    {
      path: '/home',
      component: '@/pages/home',
      routes: [
        {
          path: '/home/first',
          component: '@/pages/home/first',
        },
        {
          path: '/home/second',
          component: '@/pages/home/second',
        },
        {
          path: '/home/third',
          component: '@/pages/home/third',
        },
      ],
    },
    {
      path: '/',
      redirect: '/home/first',
    },
  ],
  fastRefresh: {},
  dva: {
    immer: true,
  },
  theme: {
    '@primary-color': '#ff6347',
  },
  antd: {
    mobile: false,
  },
});
