import React,{Component} from 'react'
import { Button, Icon } from 'antd-mobile';
import './login.css'

class Login extends Component{
    render(){
        return(
            <div>
                <form>
                <div>
                    <input type="text" placeholder="请输入用户姓名"/>
                </div>
                 <div>
                     <input type="password" placeholder="请输入密码"/>
                 </div>
                    <button>提交</button>
                </form>
            </div>
        )
    }

}
export default Login