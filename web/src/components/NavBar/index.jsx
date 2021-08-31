import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import {TabBar} from 'zarm'
import { useHistory, useLocation } from 'react-router-dom'
import CustomIcon from '@components/icon'
import './index.less'
const tabs = [{
  title:'账单',
  path: '/',
  type: 'zhangdan'
},{
  title:'统计',
  path: '/data',
  type: 'tongji'
},{
  title:'我的',
  path: '/user',
  type: 'wode'
}]
function NavBar({showNav}) {
  // 这里使用useLocation获取当前的路径
  // useLocation在组件内执行，必须被Router包裹
  const [activeKey, setActiveKey] = useState(useLocation().pathname)
  const history = useHistory()
  const changeTab = (path) => {
    setActiveKey(path)
    history.push(path)
  }
  return (
    <TabBar visible={showNav} className="" activeKey={activeKey} onChange={changeTab}>
      {
        tabs.map((tab, i) =>{
          return (
            <TabBar.Item 
              key={tab.path} 
              itemKey={tab.path} 
              title={tab.title}
              icon={<CustomIcon type={tab.type} />}
            ></TabBar.Item>
          )
        })
      }
    </TabBar>
  )
}

NavBar.propTypes = {
  showNav: PropTypes.bool
}

export default NavBar
