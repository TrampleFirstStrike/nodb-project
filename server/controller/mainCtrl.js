const axios = require("axios");

let ships = [];
let favorites = [];

const deleteFavoriteItem =(req, res, next) => {
    let num = req.params.pos;
    favorites.splice(num, 1);
    res.status(200).send(favorites);

// req.params.pos
}
const addFavorites = (req, res, next) => {
    favorites.push(req.body.favoriteItem)
    res.json(favorites)
}


const getShips = (req, res, next) => {
    axios
        .get("https://swapi.co/api/starships")
        .then(response => {
            ships.push(response.data.results)
            
            res.json(ships);

        })
        .catch(console.log);
    };
    module.exports = {
        getShips: getShips,
        addFavorites: addFavorites,
        deleteFavoriteItem
    };
