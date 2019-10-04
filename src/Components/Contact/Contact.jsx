import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import './contact.scss'

class Contact extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    }

    handleChange(e, key){
        this.setState({
            [key]: e.target.value
        })
    }

    render(){
        return (
            <div>
                <Nav/>
                <div className="contact-white-space">
                    <div className="contact-mid-container">
                        <h1>We're excited to hear from you!</h1>
                        <h4>Send us a message below</h4>
                        <div className="image-input-boxes">
                            <img className='contact-img' src="https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                            <div className='contact-input-boxes'>
                                <div>
                                    <input type="text"/>
                                    <input type="text"/>
                                </div>
                                    <input type="text"/>
                                    <input type="text"/>
                                    <input type="text"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact