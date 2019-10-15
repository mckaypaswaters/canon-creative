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
                                        <li className='hover-test'>Home</li>
                                    </Link>
                                    <Link className='link-decoration' to='/about'>
                                        <li className='hover-test'>About</li>
                                    </Link>
                                    {/* <Link className="link-decoration" to='/k-riddle-films'>
                                        <li>K. Riddle Films</li>
                                    </Link> */}
                                    <Link className="link-decoration" to='/kaitlyn-harris-photo'>
                                        <li className='hover-test'>Kaitlyn Harris Photos</li>
                                    </Link>
                                    <Link className="link-decoration" to='/contact'>
                                        <li className='hover-test'>Contact</li>
                                    </Link>
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
                    {/* <Link className="link-decoration" to='/k-riddle-films'>
                        <li>K. Riddle Films</li>
                    </Link> */}
                    <Link className="link-decoration" to='/kaitlyn-harris-photo'>
                        <li>Kaitlyn Harris Photos</li>
                    </Link>
                    <Link className="link-decoration" to='/contact'>
                        <li>Contact</li>
                    </Link>
                </nav>
            </div>
        )
    }
}

export default Nav