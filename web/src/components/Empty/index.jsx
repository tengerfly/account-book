import React from 'react'
import PropsType from 'prop-types'
import './index.less'
function Empty({desc}) {
  return (
    <div className="empty-content">
      <img src="//s.yezgea02.com/1619144597039/empty.png" alt="暂无数据"/>
      <p>{desc|| '暂无数据'}</p>
    </div>
  )
}
Empty.PropsType = {
  desc: PropsType.string
}
export default Empty