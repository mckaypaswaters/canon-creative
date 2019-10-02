import React from 'react'
import Nav from '../Nav/Nav'
import './about.scss'

class About extends React.Component {

    render(){
        return(
            <div className='about-parent'>
                <div className="about-wallpaper">
                    <Nav/>
                </div>
            </div>
        )
    }
}

export default About