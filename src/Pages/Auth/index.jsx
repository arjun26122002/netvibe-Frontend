import React from 'react'
import './index.css'
// import Logo from "../../img/logo1.png"
import Logo1 from '../../img/logo2.png'
import Login from '../../Components/AuthPage/Login/Index'
// import SignUp from '../../Components/AuthPage/SignUp'

const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                {/* <img src={Logo}alt=''/> */}
                <img src={Logo1} alt='' style={{
                    height: "45px"
                }} />
                <div className="Webname">
                    <h1>NetVibe</h1>
                    <h6>"Your Network,Your Vibe:NetVibe"</h6>
                </div>
            </div>

            {/* <SignUp /> */}
            <Login />
        </div>
    )
}

export default Auth 