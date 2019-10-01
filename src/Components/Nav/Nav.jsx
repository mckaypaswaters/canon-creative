import React from 'react'
import './nav.css'

class Nav extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className='nav'>
                <i className="hamburger fas fa-bars"></i>
                <h2 className='canon-creative'>Canon Creative</h2>
            </div>
        )
    }
}

export default Nav