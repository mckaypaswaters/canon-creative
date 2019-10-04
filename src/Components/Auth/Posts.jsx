import React, {Component} from 'react'

class Posts extends Component {
    state = {
        name: '',
        img: ''
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

    render(){
        return (
            <div className="individual-post" key={this.props.key}>
                <img className='mapImg'src={this.props.img} alt=""/>
                <div className='title-input-button'>
                    <button onClick={() => this.props.deletePhotoFn(this.props.id)}className='delete-button'>X</button>
                    <h3>{this.props.name}</h3>
                    <input onChange={e => this.handleChange(e, 'name')} value={this.state.name} placeholder='-insert image name-'type="text"/>
                    <div className="save-upload-buttons">
                        <input onChange={e => this.handleChange(e, 'img')} value={this.state.img} placeholder='-insert image url-' type="text"/>
                        {/* <input type="file"/> */}
                    </div>
                    <button onClick={() => this.bothMethods()}>Update Image</button>
                </div>
            </div>
        )
    }
}

export default Posts