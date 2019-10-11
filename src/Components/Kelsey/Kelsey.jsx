import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import './kelsey.scss'
// import kelsey from '../../assets/kelsey.jpg'
// import rotate from './rotate'

class Kelsey extends Component {

    state = {
        margin: 0
    }
    
    imageRef = React.createRef()
    
    async componentDidMount(){
        await this.calcHeight()
        window.addEventListener('resize', this.calcHeight)
        // console.dir(this.imageRef.current.children[0])
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.margin !== this.state.margin){
           this.calcHeight()
        }
    }

    calcHeight = () => {
        console.dir(this.imageRef.current)
        this.setState({
            margin: this.imageRef.current.clientHeight
        })
    }

    render(){

        return(
            <div className="kelsey-parent">
                <div className="kelsey-wallpaper">
                    <Nav/>
                    <div  className="wallpaper-pics">
                        <img
                        onLoad={this.calcHeight}
                        ref={this.imageRef} src="https://canon-creative.s3-us-west-1.amazonaws.com/rotate/rotate5.jpg" alt="" className="wall1"/>
                        <img src="https://canon-creative.s3-us-west-1.amazonaws.com/rotate/rotate4.jpg" alt="" className="wall2"/>
                        <img src="https://canon-creative.s3-us-west-1.amazonaws.com/rotate/rotate3.JPG" alt="" className="wall3"/>
                    </div>
                </div>
                <div 
                style={{
                    marginTop: this.state.margin
                }}
                className="below-kelsey">
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