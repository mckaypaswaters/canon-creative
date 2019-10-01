import React, {Component} from 'react'
import canon from '../../assets/canon.png'
import './auth.css'

class Auth extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className='auth-page'> 
                <div className="login-box">
                    <img className='auth-logo'src={canon} alt="canon-logo"/>
                    Username<input type="text"/>
                    Password<input type="text"/>
                    <div className="login-register">
                        <button>Login</button>
                        <button>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth