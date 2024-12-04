const express = require("express");
const app = express();
//Importo l'array dal file data.js
const arrayRicette = require("./data");
console.log(arrayRicette);
const postsRouters = require("./routers/post");

//Rendo la cartella visibile e utilizzabile a tutti tramite .USE
app.use(express.static("public"));
app.use("/posts", postsRouters);

//Preparo in server per metterlo in ascolto alle chiamate API
app.listen(3002, () => {
    console.log("sono in ascolto!");
});

//Creo una rotta
app.get("/", (req, res) => {
    console.log("Questo è il nuovo server del mio blog!");
    res.send("<h1> Hey! stai facendo bene! </h1>");
});
//Creo un altra rotta!
app.get("/Bacheca", (req, res) =>{
    const objArray = {arrayRicette};
    res.json(objArray);
});





