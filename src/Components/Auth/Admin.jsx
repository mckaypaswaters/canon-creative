import React, {Component} from 'react'
import './admin.scss'
import store from '../../ducks/store'

class Admin extends Component {
    constructor(){
        super()

        const reduxState = store.getState()

        this.state = {
            galleryArr: reduxState.galleryArr,
            galleryName: reduxState.galleryName,
            galleryImg: reduxState.galleryImg,
            input: ''
        }
    }


    
    render(){
        return(
            <div className='white-space'>
                <div className="mid-container">
                    <div className="individual-post">
                        <img className='mapImg'src={this.state.galleryImg} alt=""/>
                        <div className='title-input-button'>
                            <h3>{this.state.galleryName}</h3>
                            <input value={this.state.input}type="text"/>
                            <div className="save-upload-buttons">
                                <button>Save Title</button>
                                <button>Upload</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin