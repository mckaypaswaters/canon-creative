import React from 'react'
import Nav from '../Nav/Nav'
import './home.css'

class Home extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className='home'>
                <Nav/>
                {/* <img className='background-img' src="https://i.imgur.com/3xU1m5G.jpg" alt=""/> */}
                Home
            </div>
        )
    }
}

export default Home