import React, { Component } from 'react';
import '../App/App.css'
import axios from 'axios';

class GalleryItem extends Component {

    state = {
        clickedID: false,
        clickedDescription: '',
    }

    renderPicDescription = (item) => {
        if(this.state.clickedID === false) {
        this.setState({
          clickedID: true,
          clickedDescription: item,
        }) 
      } else {
        this.setState({
          clickedID: false,
          clickedDescription: '',
        })
        }
        this.props.getGoats();
    }
    
    handleLike = (item) => {
        let count = item.likes;
        axios.put(`/gallery/like/${item.id}`,{likes: count})
        .then((response) => {
          console.log(response);
          this.props.getGoats();
        }).catch((error) => {
          console.log('error updating likes');
        })
      }

    render () {

        if (this.state.clickedID === false) {

        return (
        <>
        <ul>
            <li><img onClick = {() => this.renderPicDescription(this.props.item)} src = {this.props.item.path} alt = {this.props.item.description}/></li>
            <button className="button" key={this.props.item.id} onClick = {() => {this.handleLike(this.props.item)}}><img src='/images/thumbsup.png'/></button>
            <li className = "likes">Likes: {this.props.item.likes}</li>
        </ul>
        </>
        )} else {   

        return (
        <>
        <ul>
            <li className = "description" onClick={this.renderPicDescription}>{this.props.item.description}</li>
            <button className="button" key={this.props.item.id} onClick = {() => {this.handleLike(this.props.item)}}><img src='/images/thumbsup.png'/></button>
            <li className = "likes">Likes: {this.props.item.likes}</li>
        </ul>
        
        </>
        )}
        }
    }


export default GalleryItem;