

export default {
  namespace: 'layout',
  state: {
    menus: [
      {
        key: '/menu-1',
        children: [
          {
            key: '/',
            label: '子菜单1-1',
          },
          {
            key: '/menu-1-2',
            label: '子菜单1-2',
          }
        ],
        label: '菜单一',
      },
      {
        key: '/menu-2',
        children: [
          {
            key: '/menu-2-1',
            label: '子菜单2-1',
          },
          {
            key: '/menu-2-2',
            label: '子菜单2-2',
          }
        ],
        label: '菜单二',
      }
    ]
    
  },
  reducers: {
    applyData(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
  },

};
