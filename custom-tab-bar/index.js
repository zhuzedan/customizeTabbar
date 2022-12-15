// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selectedColor: "#3161ff",
    allList: [
      [{
          "pagePath": "/pages/index/index",
          "text": "检查",
          "iconPath": "../assets/tabbar/check.png",
          "selectedIconPath": "../assets/tabbar/check_select.jpg",
          "selected": "index"
        },
        {
          "pagePath": "/pages/mine/index",
          "text": "我的",
          "iconPath": "../assets/tabbar/me.png",
          "selectedIconPath": "../assets/tabbar/me_select.png",
          "selected": "mine"
        }
      ],
      [{
          "pagePath": "/pages/index/index",
          "text": "检查",
          "iconPath": "../assets/tabbar/check.png",
          "selectedIconPath": "../assets/tabbar/check_select.jpg",
          "selected": "index"
        },
        {
          "pagePath": "/pages/approval/index",
          "text": "审批",
          "iconPath": "../assets/tabbar/approval.png",
          "selectedIconPath": "../assets/tabbar/approval_select.png",
          "selected": "approval"
        },
        {
          "pagePath": "/pages/mine/index",
          "text": "我的",
          "iconPath": "../assets/tabbar/me.png",
          "selectedIconPath": "../assets/tabbar/me_select.png",
          "selected": "mine"
        }
      ]
    ],
    selectList: []
  },
  /**
   * 生命周期方法
   */
  attached() {
    this.setData({
      selectList: this.data.allList[1]
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      // console.log(e.currentTarget.dataset);
      let path = e.currentTarget.dataset.path;
      let selected = e.currentTarget.dataset.selected
      // console.log(e.currentTarget.dataset.selected);
      wx.switchTab({
        url: path,
      })
    }
  }
})