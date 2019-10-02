import React from 'react'
import './nav.scss'
import {Link} from 'react-router-dom'

class Nav extends React.Component {


    clickHamburger() {
        const dropdown = document.querySelector('#dropdown')
        if (dropdown.classList.contains('hide')) {
            dropdown.classList.remove('hide')
        } else {
            dropdown.classList.add('hide')
        }
    }

    render(){
        return(
            <div>
                <div className='nav'>
                    <i onClick={() => this.clickHamburger()} className="hamburger fas fa-bars"></i>
                    <div className="one-more-div">
                        <div className="title-nav">
                            <h2 className='canon-creative'>Canon Creative</h2>
                            <nav className="nav-row">
                                <nav className="nav-list">
                                    <Link className='link-decoration' to='/'>
                                        <li>Home</li>
                                    </Link>
                                    <Link className='link-decoration' to='/about'>
                                        <li>About</li>
                                    </Link>
                                    <li>K. Riddle Films</li>
                                    <Link className="link-decoration" to='/kaitlyn-harris-photo'>
                                        <li>Kaitlyn Harris Photos</li>
                                    </Link>
                                    <li>Contact</li>
                                </nav>
                            </nav>
                        </div>
                    </div>
                </div>
                <nav id='dropdown' className='hide dropdown'>
                    <Link className='link-decoration' to='/'>
                        <li>Home</li>
                    </Link>
                    <Link className='link-decoration' to='/about'>
                        <li>About</li>
                    </Link>
                    <li>K. Riddle Films</li>
                    <li>Kaitlyn Harris Photos</li>
                    <li>Contact</li>
                </nav>
            </div>
        )
    }
}

export default Nav