import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import './contact.scss'
import contactImg from '../../assets/contactImg.jpg'

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
        return(
            <div className='contact-parent'>
                <div className="contact-wallpaper">
                    <Nav/>
                </div>
                <div className="text-img-input">
                    <h1 className='contact-h1'>We are excited to hear from you!</h1>
                    <h4>Send us a message below</h4>
                    <div className='hero-and-inputs'>
                        <img className='contact-img' src={contactImg} alt=""/>
                        <div className="all-inputs">
                            <div className='first-and-last'>
                                <input 
                                    onChange={(e) => this.handleChange(e, 'firstName')}
                                    className='firstNameInput' placeholder='First Name' type="text"/>
                                <input 
                                    onChange={(e) => this.handleChange(e, 'lastName')}
                                    className='lastNameInput' placeholder='Last Name' type="text"/>
                            </div>
                            <input 
                                onChange={(e) => this.handleChange(e, 'email')}
                                className='emailInput' placeholder='Email' type="text"/>
                            <input 
                                onChange={(e) => this.handleChange(e, 'subject')}
                                className='subjectInput' placeholder='Subject' type="text"/>
                            <input 
                                onChange={(e) => this.handleChange(e, 'message')}
                                className='messageInput' placeholder='Message' type="text"/>
                            <button className='contact-submit'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Contact

