import React, {Component} from 'react'
import './admin.scss'
// import store, {ADD_TO_GALLERY, HANDLE_CHANGE_NAME, HANDLE_CHANGE_IMG} from '../../ducks/store'
import axios from 'axios'

class Admin extends Component {
    constructor(){
        super()

        // const reduxState = store.getState()

        this.state = {
            galleryArr: [],
            name: '',
            img: '',
            input: ''
        }
    }

    async componentDidMount() {
        const photos = await axios.get('/api/photos', this.state.galleryArr)
        this.setState({galleryArr: photos.data})
    }
    async createPhoto(){
        const {name, img} = this.state
        await axios.post('/api/photo', {name, img})
        this.componentDidMount()
    }
    deletePhoto(gallery_id){
        axios.delete(`/api/photo/${gallery_id}`)
        this.componentDidMount()
    }
    handleChange(e, key){
        this.setState({
            [key]: e.target.value
        })
    }
    
    render(){
        const mappedPhotos = this.state.galleryArr.map((el, i) => {
            return(
                <div className="individual-post">
                        <img className='mapImg'src={el.img} alt=""/>
                        <div className='title-input-button'>
                            <button onClick={() => this.deletePhoto(el.gallery_id)}className='delete-button'>X</button>
                            <h3>{el.name}</h3>
                            <input onChange={e => this.handleChange(e, 'galleryName')} placeholder='-insert image name-'type="text"/>
                            <div className="save-upload-buttons">
                                <input onChange={e => this.handleChange(e, 'galleryImg')} placeholder='-insert image url-' type="text"/>
                            </div>
                            <button>Add Image to Gallery</button>
                        </div>
                    </div>
            )
        })

        return(
            <div className='white-space'>
                <div className="mid-container">
                    <div className="individual-post">
                        <img className='mapImg'src={this.state.img} alt=""/>
                        <div className='title-input-button'>
                            <button className='delete-button'>X</button>
                            <h3>{this.state.name}</h3>
                            <input onChange={e => this.handleChange(e, 'name')} placeholder='-insert image name-' type="text"/>
                            <div className="save-upload-buttons">
                                <input onChange={e => this.handleChange(e, 'img')} placeholder='-insert image url-' type="text"/>
                            </div>
                            <button onClick={() => this.createPhoto()}>Add Image to Gallery</button>
                        </div>
                    </div>
                    {mappedPhotos}
                </div>
            </div>
        )
    }
}

export default Admin
