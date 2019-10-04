import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import './kaitlyn.scss'
import Gallery from './Gallery'

class Kaitlyn extends Component {

    render(){
        return(
            <div className="kaitlyn-parent">
                <div className="kaitlyn-wallpaper">
                    <Nav/>
                </div>
                <div className="below-kaitlyn">
                    <Gallery/>
                </div>
            </div>
        )
    }
}

export default Kaitlyn