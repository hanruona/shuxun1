import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="loginBg">
                <div className="loginBox">
                    <h2 className="title">考试管理平台</h2>
                    <p>
                        <input type="text" placeholder=" 请输入用户名" />
                    </p>
                    <p>
                        <input type="text" placeholder=" 请输入密码" />
                    </p>
                    <p>
                        <input type="checkbox" className="checbox" />
                        <span>记住密码</span><a href="#">忘记密码</a>
                    </p>
                    <button>登录</button>
                </div>
            </div>
        )
    }
}
