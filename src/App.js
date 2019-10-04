import React from 'react';
import routes from './routes'
import store, {ADD_TO_GALLERY} from './ducks/store'
import axios from 'axios'

import './App.css';

class App extends React.Component {
  constructor(){
    super()
    const reduxState = store.getState()
    this.state = {
      galleryArr: reduxState.galleryArr
    }
  }

  async componentDidMount() {
    const photos = await axios.get('/api/photos')
    this.setState({galleryArr: photos.data})
    this.addToRedux(photos.data)
  }
  addToRedux(photos){
    store.dispatch({
      type: ADD_TO_GALLERY,
      payload: photos
    })
  }

  render(){
    return (
      <div className="App">
        {/* <Home/> */}
        {routes}
      </div>
    );
  }
}

export default App;
