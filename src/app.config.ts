export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/accounting/index',
    'pages/checkin/index',
    'pages/plan/index',
    'pages/profile/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '小伴侣',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#1890ff',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/tabbar/home.png',
        selectedIconPath: 'assets/tabbar/home-active.png'
      },
      {
        pagePath: 'pages/accounting/index',
        text: '记账',
        iconPath: 'assets/tabbar/accounting.png',
        selectedIconPath: 'assets/tabbar/accounting-active.png'
      },
      {
        pagePath: 'pages/checkin/index',
        text: '签到',
        iconPath: 'assets/tabbar/checkin.png',
        selectedIconPath: 'assets/tabbar/checkin-active.png'
      },
      {
        pagePath: 'pages/plan/index',
        text: '计划',
        iconPath: 'assets/tabbar/plan.png',
        selectedIconPath: 'assets/tabbar/plan-active.png'
      },
      {
        pagePath: 'pages/profile/index',
        text: '我的',
        iconPath: 'assets/tabbar/profile.png',
        selectedIconPath: 'assets/tabbar/profile-active.png'
      }
    ]
  }
})
