import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'

class App extends Component {
  
  state = {
    goatList: [],
    }
  

  componentDidMount() {
    this.getGoats();
  }

  getGoats = () => {
    console.log('in getGoats');
    axios.get('/gallery')
    .then( response => {
      this.setState({
        goatList: response.data,
      })
    }).catch(error => {
      console.log('error getting goats to frolic back to the client', error);
    })
  }

  

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">#GoatLife</h1>
        </header>
        <br/>
        <p>Gallery of Goats.</p>
       <GalleryList goatList = {this.state.goatList} getGoats = {this.getGoats}/>
      </div>
    );
  }
}

export default App;
