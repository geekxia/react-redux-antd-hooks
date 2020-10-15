import React from 'react';

// 全局的样式文件
import '@/assets/css/app.scss'
import 'antd/dist/antd.css'

// 路由系统
import { HashRouter } from 'react-router-dom'

// 状态管理
import { Provider } from 'react-redux'
import store from '@/store'

import { QfLayout } from '@/components'

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="app">
          <QfLayout />
        </div>
      </Provider>
    </HashRouter>
  )
}

export default App;
