import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import './contact.scss'
import contactImg from '../../assets/contactImg.jpg'
import axios from 'axios'
import sweet from 'sweetalert2'

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
    submitTwilio(){
        axios.post('/api/messages', this.state)
        sweet.fire({type: 'success', text: 'Your message has been sent!', showConfirmButton: false, timer: 1500})
        this.clearInputs()
    }
    clearInputs(){
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    render(){
        return(
            <div className='contact-parent'>
                <div className="contact-wallpaper">
                    <Nav/>
                </div>
                <div className="text-img-input">
                    <h1 className='contact-h1'>We are excited to hear from you!</h1>
                    <h4 className='contact-h4'>Send us a message below</h4>
                    <div className='hero-and-inputs'>
                        <img className='contact-img' src={contactImg} alt=""/>
                        <div className="all-inputs">
                            <div className='first-and-last'>
                                <input 
                                    value={this.state.firstName}
                                    onChange={(e) => this.handleChange(e, 'firstName')}
                                    className='firstNameInput' placeholder='First Name' type="text"/>
                                <input
                                    value={this.state.lastName} 
                                    onChange={(e) => this.handleChange(e, 'lastName')}
                                    className='lastNameInput' placeholder='Last Name' type="text"/>
                            </div>
                            <input
                                value={this.state.email} 
                                onChange={(e) => this.handleChange(e, 'email')}
                                className='emailInput' placeholder='Email' type="text"/>
                            <input
                                value={this.state.subject} 
                                onChange={(e) => this.handleChange(e, 'subject')}
                                className='subjectInput' placeholder='Subject' type="text"/>
                            <textarea
                                wrap='hard'
                                value={this.state.message} 
                                onChange={(e) => this.handleChange(e, 'message')}
                                className='messageInput' placeholder='Message' type="text"/>
                            <button onClick={() => this.submitTwilio()} className='contact-submit'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Contact

