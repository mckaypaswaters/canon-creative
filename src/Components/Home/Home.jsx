import React from 'react'
import Nav from '../Nav/Nav'
import './home.scss'

class Home extends React.Component {
    

    render(){
        return(
            <div className='home-parent'>
            <div className='home'>
                <Nav/>
                Home
            </div>
            </div>
        )
    }
}

export default Home