import React,{useState} from 'react';
import { Button } from 'zarm'
import CustomIcon from '@components/icon'
import Empty from '@components/Empty'
import './index.less'
function Index(props) {
  const [costAll, setCostAll] = useState(0)
  const [incomeAll, setIncomeAll] = useState(0)
  const [list, setList] = useState([])
  return (
    <div className="index-container">
      <div className="account-header">
        <div className="cost-income">
          <span className="cost-all">
            总支出: <span>￥{costAll}</span>
          </span>
          <span className="income-all">
            总收入: <span>￥{incomeAll}</span>
          </span>
        </div>
        <div className="cost-search-params">
          <span>全部类型: <CustomIcon type='arrow-bottom' /></span>
          <span>2021-08: <CustomIcon type='arrow-bottom' /></span>
        </div>
      </div>
      <div className="account-content">
        { list.length ?
          list.map((item) => {
            return (
              <div>
                账单
              </div>
            )
          }) : <Empty />
        }
      </div>
    </div>
  )
}
export default Index;
