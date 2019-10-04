import React, {Component} from 'react'
import store from '../../ducks/store'
import './gallery.scss'

class Gallery extends Component {
    constructor(){
        super()
        const reduxState = store.getState()
        this.state = {
            galleryArr: reduxState.galleryArr
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({galleryArr: reduxState.galleryArr})
        })
    }

    render(){

        const mappedRedux = this.state.galleryArr.map(el => {
            return (
                <div className="single-photo">
                    <img src={el.img} alt={el.name} className="single-photo-img"/>
                </div>
            )
        })

        return(
            <div className='gallery-back'>
                {mappedRedux}
            </div>
        )
    }
}

export default Gallery