//Prima di tutto, devo prendere i dati da analizzare per poter fare il confronto
const posts = require("../data");

//creo middleware per il controllo parametro
const checkId = (req, res, next) =>{
//Prendo il parametro richiesto dall'utente
const userQueryId = parseInt(req.params.id);
//Cerco lo stesso parametro con lo stesso valore nell'array0 e confronto con richiesta dell utente
const curParam = posts.find((curItem) => curItem.id === userQueryId);

//Condizione se trova la corrispondenza 
if (curParam){
    next();
}else{
    //Se non trova corrispondenza
    res.statusCode = 404;
    res.json({
        error: true,
        message:"Elemento non trovato, riprovare",
    })
}
};

//Creo middleware per gestione errori GENERALI DEL SERVER!
const checkReqError = (err, req, res, next) =>{
    res.statusCode = 500;
    res.json({
        errore: true,
        message: "Errore interno del server"
    });
};

module.exports = {checkId};
module.exports = {};

