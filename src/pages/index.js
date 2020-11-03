import React from 'react'
import loadable from "@loadable/component"
import {
  MailOutlined,
  AppstoreOutlined
} from '@ant-design/icons';

const TestRedux = loadable(()=>import('./home/TestRedux'))
const TestReduxHook = loadable(()=>import('./home/TestReduxHook'))
const TestChat = loadable(()=>import('./home/TestChat'))
const TestEchart = loadable(()=>import('./home/TestEchart'))


const GoodList = loadable(()=>import('./good/GoodList'))
const GoodDetail = loadable(()=>import('./good/GoodDetail'))


const routes = [
  {
    id: 9,
    text: '首页概况',
    icon: <MailOutlined />,
    children: [
      {
        id: 901,
        path: '/',
        component: TestRedux,
        text: 'TestRedux'
      },
      {
        id: 902,
        path: '/redux/hook',
        component: TestReduxHook,
        text: 'TestReduxHook'
      },
      {
        id: 903,
        path: '/chat',
        component: TestChat,
        text: '聊天室'
      },
      {
        id: 904,
        path: '/echart',
        component: TestEchart,
        text: '可视化技术'
      }
    ]
  },
  {
    id: 10,
    text: '商品管理',
    icon: <AppstoreOutlined />,
    children: [
      {
        id: 1001,
        path: '/good/list',
        component: GoodList,
        text: '商品列表',
        children: [
          {
            id: 100101,
            path: '/good/detail/:id',
            component: GoodDetail,
            text: '商品详情'
          }
        ]
      }
    ]
  }
]

export default routes
