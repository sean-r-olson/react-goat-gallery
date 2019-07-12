import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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

  handleLike = (item) => {
    let count = item.likes;
    axios.put(`/gallery/like/${item.id}`,{likes: count})
    .then((response) => {
      console.log(response);
      this.getGoats();
    }).catch((error) => {
      console.log('error updating likes');
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
        <ul>{this.state.goatList.map((item) =>
            <li  key={item.id}>  <img src={item.path} alt={item.description}/>
            <br/>
            {item.likes}
                  <button className="button" key={item.id} onClick = {() => {this.handleLike(item)}}>Like</button>
            </li>
                  )}
        </ul>
      </div>
    );
  }
}

export default App;
