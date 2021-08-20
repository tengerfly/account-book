import React, { useCallback, useState } from 'react';
import { Cell, Input, Button, Checkbox, Toast  } from 'zarm';
import CustomIcon from '@components/icon'
import style from './index.module.less';
import Captcha from "react-captcha-code" // 验证码组件
function Login() {
  const [username, setUserName] = useState('') // 账号
  const [password, setPassword] = useState('') // 密码
  const [verify, setVerify] = useState('') // 输入的验证码
  const [captcha, setCaptcha] = useState(''); // 验证码的值

  const handleCaptchaChange = (value) => {
    setVerify('')
    setCaptcha(value)
  }
 //  验证码变化，回调方法
  // const handleCaptchaChange = useCallback((captcha) => {
  //   console.log('captcha', captcha)
  //   setCaptcha(captcha)
  // }, [])
  // 提交
  const handleSubmit = async ()=> {
    if(!username){
      return Toast.show('用户名不能为空!')
    }
    if(!password){
      return Toast.show('密码不能为空!')
    }
    if(!verify){
      return Toast.show('验证码不能为空!')
    }
    if(verify !== captcha){
      setVerify('')
      return Toast.show('验证码输入错误!')
    }
    try {
      // const 
      // 调用接口
      console.log('username',username)
      console.log('password',password)
      console.log('verify',verify)
    } catch (error) {
      
    }
  }
  return (
    <div className={style.auth}>
      <div className={style.head} />
      <div className={style.tab}>
        <span>注册</span>
      </div>
      <div className={style.form}>
        <Cell icon={<CustomIcon type="zhanghao" />}>
          <Input
            clearable
            type="text"
            placeholder="请输入账号"
            value={username}
            onChange={(value)=> setUserName(value)}
          />
        </Cell>
        <Cell icon={<CustomIcon type="mima" />}>
          <Input
            clearable
            type="password"
            placeholder="请输入密码"
            value={password}
            onChange={(value)=> setPassword(value)}
          />
        </Cell>
        <Cell icon={<CustomIcon type="mima" />}>
          <Input
            clearable
            type="text"
            placeholder="请输入验证码"
            value={verify}
            onChange={(value)=> setVerify(value)}
          />
          <Captcha charNum={4} onChange={(value)=> setCaptcha(value)} />
        </Cell>
      </div>
      <div className={style.operation}>
        <div className={style.agree}>
          <Checkbox />
          <label className="text-light">阅读并同意<a>《掘掘手札条款》</a></label>
        </div>
        <Button onClick={handleSubmit} block theme="primary">注册</Button>
      </div>
    </div>
  )
}

export default Login;
