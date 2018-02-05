import React, { Component } from 'react';
import axios from 'axios';

class Landingpage extends Component {
constructor() {
    super();
    this.state= {
        starship: ""
    };
    this.getRandomShip  = this.getRandomShip.bind(this);
}

getRandomShip() {
    axios
        .get("https://swapi.co/api/starships")
        .then(response => {
            // console.log(response.data);
            
            const random = Math.floor(Math.random() * 10);
            // console.log(random)
            this.setState({ starship: response.data.results[random].name })
        })
        .catch(console.log());
}

render () {
    return (
        <div className="landing-page">
            <h1 id="StarshipName">Click below to generate!</h1>
            <p>{this.state.starship}</p>
            <div className="landing-page__button-container">
                <button onClick={() => this.getRandomShip()}>Generate</button>
            </div>
            <div className="landing-page__button-container">
                <button onClick={() => this.props.handleUpdateFavorites(this.state.starship)}>Save this ship!</button>
            </div>
        </div>
    )
}}


export default Landingpage;
