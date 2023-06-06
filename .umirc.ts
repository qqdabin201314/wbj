import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts',
      routes: [
        {
          path: '/',
          defaultName: '子菜单1-1',
          component: '@/pages/Demo',
        },
        {
          path: '/menu-1-2',
          defaultName: '子菜单1-2',
          component: '@/pages/Demo',
        },
        {
          path: '/menu-2-1',
          defaultName: '子菜单2-1',
          component: '@/pages/Demo',
        },
        {
          path: '/menu-2-2',
          defaultName: '子菜单2-2',
          component: '@/pages/Demo',
        },
      
      ],
    },
  ],
  fastRefresh: {},
});
