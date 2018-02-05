import React, { Component } from 'react';
import ListItem from './ListItem.js' 

const titleStyles = {
    marginBottom: 16,
};

class Favorites extends Component {
    renderFavorites = () => this.props.favorites.map((fav, index) =>  <ListItem fav={fav} pos={index} key={index} handleClick={this.deleteFavorites}/>);

    deleteFavorites = (num) => {this.props.deleteFavorites(num)}

    render() {
        console.log(this.props.favorites)

        return (
            <div className="favorites">
                <h1 className="favorites__title">Favorites List</h1>
                <ul class="favorites__list">
                    {this.renderFavorites()}
                </ul>
            </div>
        )

    }
}
export default Favorites
