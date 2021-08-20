import React, { useState, useEffect, Fragment } from 'react'
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom"

import { ConfigProvider } from 'zarm'
import zhCN from 'zarm/lib/config-provider/locale/zh_CN'
import 'zarm/dist/zarm.css'
import routes from '@/router'
import NavBar from '@components/NavBar'
/**
 * tips:
 * 函数组件内使用useLocation的时候，组件必须要背Router高阶组件包裹，不然报错location of undefined
 */
function App() {
  const [showNav, setShowNav] = useState(true)
  const location = useLocation() // 拿到 location 实例
  const { pathname } = location // 获取当前路径
  const needNav = ['/', '/data', '/user'] // 需要底部导航栏的路径
  useEffect(() => {
    setShowNav(needNav.includes(pathname))
  },[pathname])
  return (
    <Fragment>
      <ConfigProvider primaryColor={'#007fff'} locale={zhCN}>
        <Switch>
          {
            routes.map(route => <Route exact key={route.path} path={route.path}>
              <route.component />
            </Route>)
          }
        </Switch>
      </ConfigProvider>
      <NavBar showNav={showNav} />
    </Fragment>
  )
}

export default App