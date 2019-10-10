import React, {Component} from 'react'
import axios from 'axios'
import {v4 as randomString} from 'uuid'

class Posts extends Component {
    state = {
        name: '',
        img: '',
        isUploading: false
    }

    handleChange(e, key){
        this.setState({
            [key]: e.target.value
        })
    }
    clearBoxes(){
        this.setState({
            name: '',
            img: ''
        })
    }
    bothMethods(){
        this.props.updatePhotoFn(this.props.id, this.state.name, this.state.img)
        this.clearBoxes()
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

      checkUserId() {
        if (this.props.users_id === 23){
          return <h5>Taken by: {this.props.username}</h5>
        } else if (this.props.users_id === 24){
          return <h5>Taken by: {this.props.username}</h5>
        }
      }


    render(){
        return (
            <div className="individual-post" key={this.props.key}>
                <img className='mapImg'src={this.props.img} alt=""/>
                <div className='title-input-button'>
                    <button onClick={() => this.props.deletePhotoFn(this.props.id)}className='delete-button'>X</button>
                    <h3 className='post-name'>{this.props.name}</h3>
                    {this.checkUserId()}
                    <input onChange={e => this.handleChange(e, 'name')} value={this.state.name} placeholder='-insert image name-'type="text"/>
                    <div className="save-upload-buttons">
                        {/* <input onChange={e => this.handleChange(e, 'img')} value={this.state.img} placeholder='-insert image url-' type="text"/> */}
                        <input onChange={e => this.getSignedRequest(e.target.files)} type="file"/>
                    </div>
                    <button onClick={() => this.bothMethods()}>Update Image</button>
                </div>
            </div>
        )
    }
}

export default Posts