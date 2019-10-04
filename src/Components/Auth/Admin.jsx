import React, {Component} from 'react'
import './admin.scss'
import store, {ADD_TO_GALLERY} from '../../ducks/store'
import axios from 'axios'
import Posts from './Posts'
import {Link} from 'react-router-dom'

class Admin extends Component {
    constructor(){
        super()

        const reduxState = store.getState()

        this.state = {
            galleryArr: reduxState.galleryArr,
            name: '',
            img: '',
            input: ''
        }
        this.deletePhoto = this.deletePhoto.bind(this)
        this.updatePhoto = this.updatePhoto.bind(this)
        this.addToRedux = this.addToRedux.bind(this)
    }

    async componentDidMount() {
        const photos = await axios.get('/api/photos')
        this.setState({galleryArr: photos.data})
        this.addToRedux(photos.data)
    }
    async createPhoto(){
        const {name, img} = this.state
        await axios.post('/api/photo', {name, img})
        this.componentDidMount()
        this.setState({
            name: '',
            img: ''
        })
    }
    deletePhoto(gallery_id){
        axios.delete(`/api/photo/${gallery_id}`)
        this.componentDidMount()
    }
    async updatePhoto(gallery_id, name, img){
        const photo = await axios.put(`/api/photo/${gallery_id}`, {name, img})
        // this.updatePage()
        this.setState({galleryArr: photo.data})
    }
    handleChange(e, key){
        this.setState({
            [key]: e.target.value
        })
    }
    addToRedux(photos){
        store.dispatch({
            type: ADD_TO_GALLERY,
            payload: photos
        })
    }

    render(){
        const mappedPhotos = this.state.galleryArr.map((el, i) => {
            return(
                <Posts
                key={el.gallery_id}
                id={el.gallery_id}
                name={el.name}
                img={el.img}
                deletePhotoFn={this.deletePhoto}
                updatePhotoFn={this.updatePhoto}
                addToRedux={this.addToRedux}
                />
            )
        })

        return(
            <header>
            <div className='white-space'>
                <div className="mid-container">
                    <div className="individual-post">
                        <img className='mapImg'src={this.state.img} alt=""/>
                        <div className='title-input-button'>
                            <Link to='/'>
                                <button>Home</button>
                            </Link>
                            <h3>{this.state.name}</h3>
                            <input onChange={e => this.handleChange(e, 'name')} value={this.state.name}placeholder='-insert image name-' type="text"/>
                            <div className="save-upload-buttons">
                                <input onChange={e => this.handleChange(e, 'img')} value={this.state.img} placeholder='-insert image url-' type="text"/>
                                {/* <input type="file"/> */}
                            </div>
                            <button onClick={() => this.createPhoto()}>Add Image to Gallery</button>
                        </div>
                    </div>
                    {mappedPhotos}
                </div>
            </div>
            </header>
        )
    }
}

export default Admin

