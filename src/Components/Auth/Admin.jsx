import React, {Component} from 'react'
import './admin.scss'
import store, {ADD_TO_GALLERY} from '../../ducks/store'
import axios from 'axios'
import Posts from './Posts'
import {Link} from 'react-router-dom'
import {v4 as randomString} from 'uuid'

class Admin extends Component {
    constructor(){
        super()

        const reduxState = store.getState()

        this.state = {
            galleryArr: reduxState.galleryArr,
            name: '',
            img: '',
            input: '',
            users_id: null
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
        const {name, img, users_id} = this.state
        await axios.post('/api/photo', {name, img, users_id})
        this.componentDidMount()
        this.setState({
            name: '',
            img: '',
            isUploading: false
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
    getSignedRequest = ([file]) => {
        this.setState({ isUploading: true });
        // We are creating a file name that consists of a random string, and the name of the file that was just uploaded with the spaces removed and hyphens inserted instead. This is done using the .replace function with a specific regular expression. This will ensure that each file uploaded has a unique name which will prevent files from overwriting other files due to duplicate names.
        const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`;
    
        // We will now send a request to our server to get a "signed url" from Amazon. We are essentially letting AWS know that we are going to upload a file soon. We are only sending the file-name and file-type as strings. We are not sending the file itself at this point.
        axios
          .get('/api/signs3', {
            params: {
              'file-name': fileName,
              'file-type': file.type,
            },
          })
          .then(response => {
            const { signedRequest, url } = response.data;
            this.uploadFile(file, signedRequest, url);
          })
          .catch(err => {
            console.log(err);
          });
      };
    
      uploadFile = (file, signedRequest, url) => {
        const options = {
          headers: {
            'Content-Type': file.type,
          },
        };
    
        axios
          .put(signedRequest, file, options)
          .then(response => {
            this.setState({ isUploading: false, img:url });
            // THEN DO SOMETHING WITH THE URL. SEND TO DB USING POST REQUEST OR SOMETHING
          })
          .catch(err => {
            this.setState({
              isUploading: false,
            });
            if (err.response.status === 403) {
              alert(
                `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${
                  err.stack
                }`
              );
            } else {
              alert(`ERROR: ${err.status}\n ${err.stack}`);
            }
          });
      };

      getSelection(){
        let e = document.querySelector('#select')
        let strUser = e.options[e.selectedIndex].value
        this.setState({
          users_id: strUser
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
                users_id={el.users_id}
                username={el.username}
                deletePhotoFn={this.deletePhoto}
                updatePhotoFn={this.updatePhoto}
                addToRedux={this.addToRedux}
                />
            )
        })

        return(
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
                            <select id='select'>
                              <option value="Default">-Select Name-</option>
                              <option onClick={() => this.getSelection()} value='23'>Kelsey</option>
                              <option onClick={() => this.getSelection()} value="24">Kaitlyn</option>
                            </select>
                            <div className="save-upload-buttons">
                                {/* <input onChange={e => this.handleChange(e, 'img')} value={this.state.img} placeholder='-insert image url-' type="text"/> */}
                                <input onChange={e => this.getSignedRequest(e.target.files)} type="file" />
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

