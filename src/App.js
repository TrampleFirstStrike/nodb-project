import React, { Component } from 'react';
import logo from './images/death-star.png';
import './App.css';
import './index.css';
import axios from 'axios';
import Landingpage from "./components/Landingpage.js"
import Favorites from "./components/Favorites.js"


class App extends Component {
  constructor() {
      super();
      this.state= {
          favoriteShips: []
      }
      this.handleUpdateFavorites = this.handleUpdateFavorites.bind(this)
      this.handleDeleteFavorites = this.handleDeleteFavorites.bind(this)

  }
  
  componentDidMount () {
    axios.get("/api/test")
    .then (response => {
      // console.log(response);
    });
  }

  handleUpdateFavorites = (fav) => {
    axios
      .post("http://localhost:3003/api/addToFavorites", {favoriteItem: fav})
      .then (response => {
        this.setState({
          favoriteShips: response.data
        })
      })
    
  }

  handleDeleteFavorites = (pos) => {
    console.log(pos)
    axios
      .delete(`http://localhost:3003/api/deleteFavoriteItem/${pos}`)
      .then( (response) => {
      this.setState({favoriteShips: response.data})
      })
      .catch(console.log)
    let tempFav = this.state.favoriteShips
    this.setState({
      favoritesShips: []
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Starship Generator</h1>
        </header>
        <Landingpage handleUpdateFavorites={this.handleUpdateFavorites} />

        <Favorites favorites={this.state.favoriteShips} 
        deleteFavorites={this.handleDeleteFavorites} />
      </div>
    );
  }
}

export default App;
