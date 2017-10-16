import React,{Component} from 'react'
import './login.css'

class Login extends Component{
    render(){
        return(
            <div className="login">
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