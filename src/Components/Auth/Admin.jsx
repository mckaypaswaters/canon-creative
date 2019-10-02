import React, {Component} from 'react'
import './admin.scss'
import store, {ADD_TO_GALLERY} from '../../ducks/store'
import axios from 'axios'

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

    async componentDidMount() {
        const photos = await axios.get('/api/photos', this.state.galleryArr)
        console.log(photos)
        this.setState({galleryArr: photos.data})
    }

    handleChange(e){
        this.setState({
            input: e.target.value
        })
    }
    updateTitle(){
        this.setState({
            galleryName: this.state.input,
            input: ''
        })
    }
    
    render(){
        return(
            <div className='white-space'>
                <div className="mid-container">
                    <div className="individual-post">
                        <img className='mapImg'src={this.state.galleryImg} alt=""/>
                        <div className='title-input-button'>
                            <button className='delete-button'>X</button>
                            <h3>{this.state.galleryName}</h3>
                            <input onChange={e => this.handleChange(e)}value={this.state.input}type="text"/>
                            <div className="save-upload-buttons">
                                <button onClick={() => this.updateTitle()}>Save Title</button>
                                <button>Upload Image</button>
                            </div>
                            <button>Add Image to Gallery</button>
                        </div>
                    </div>
                    <div className="individual-post">
                        <img className='mapImg'src={this.state.galleryImg} alt=""/>
                        <div className='title-input-button'>
                            <h3>{this.state.galleryName}</h3>
                            <input onChange={e => this.handleChange(e)}value={this.state.input}type="text"/>
                            <div className="save-upload-buttons">
                                <button onClick={() => this.updateTitle()}>Save Title</button>
                                <button>Upload Image</button>
                            </div>
                            <button>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin