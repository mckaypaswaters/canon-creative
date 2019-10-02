import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import './kaitlyn.scss'

class Kaitlyn extends Component {

    render(){
        return(
            <div className="kaitlyn-parent">
                <div className="kaitlyn-wallpaper">
                    <Nav/>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sunt veniam impedit eaque nihil blanditiis. Sint dolorum saepe maxime culpa placeat soluta doloremque perspiciatis ipsum itaque. Numquam iusto nesciunt distinctio?</p>
            </div>
        )
    }
}

export default Kaitlyn