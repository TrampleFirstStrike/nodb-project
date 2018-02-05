const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { getShips, addFavorites, deleteFavoriteItem } = require(`${__dirname}/controller/mainCtrl`);
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.get("/api/test", getShips)
app.post("/api/addToFavorites", addFavorites)
app.delete("/api/deleteFavoriteItem/:pos", deleteFavoriteItem)

const port = 3003;

app.listen(port, function(){
    console.log(`listening on port: ${port}`)
})

