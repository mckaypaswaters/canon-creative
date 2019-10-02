import React from 'react'
import Nav from '../Nav/Nav'
// import About from '../Home/About'
import './home.scss'

class Home extends React.Component {
    

    

    render(){
        return(
            <div className='home-parent'>
                <div className='home-wallpaper'>
                    <Nav/>
                    
                </div>
            </div>
        )
    }
}

export default Home