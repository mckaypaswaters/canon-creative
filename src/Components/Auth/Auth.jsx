import React, {Component} from 'react'
import canon from '../../assets/canon.png'
import './auth.css'
import axios from 'axios'
import sweet from 'sweetalert2'

class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange(e, key){
        this.setState({
            [key]: e.target.value
        })
    }
    async register(){
        const {username, password} = this.state
        const res = await axios.post('/auth/register', {username, password})
        if (res.data === 'Failed'){
            sweet.fire({type: 'error', text: 'Username already in use'})
        } else {
            sweet.fire({type: 'success', text: 'Successfully Registered'})
            this.props.history.push('/admin')
        }
    }

    render(){
        return(
            <div className='auth-page'> 
                <div className="login-box">
                    <img className='auth-logo'src={canon} alt="canon-logo"/>
                    Username<input onChange={e => this.handleChange(e, 'username')} type="text"/>
                    Password<input onChange={e => this.handleChange(e, 'password')} type="password"/>
                    <div className="login-register">
                        <button>Login</button>
                        <button onClick={() => this.register()}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth