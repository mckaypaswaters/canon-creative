import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import './kelsey.scss'

class Kelsey extends Component {

    render(){
        return(
            <div className="kelsey-parent">
                <div className="kelsey-wallpaper">
                    <Nav/>
                </div>
                <div className="below-kelsey">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sunt veniam impedit eaque nihil blanditiis. Sint dolorum saepe maxime culpa placeat soluta doloremque perspiciatis ipsum itaque. Numquam iusto nesciunt distinctio?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, explicabo sed hic eveniet neque, pariatur obcaecati sunt excepturi quis at architecto quae minima corrupti culpa vel possimus impedit, quos animi.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit maxime et deleniti fuga sint cumque. Optio, quibusdam sapiente? Quidem totam deleniti sunt porro aperiam adipisci omnis pariatur laborum dolorem tenetur?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat dolor odit voluptas fuga eaque nesciunt sint voluptatum! Neque cum cupiditate, ut quo in, dolor, nisi repudiandae adipisci quos autem vel?</p>
                </div>
            </div>
        )
    }
}

export default Kelsey