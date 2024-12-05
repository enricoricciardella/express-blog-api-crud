
const arrayRicette = require("../data");

//GET mostra tutti gli oggetti
const index = (req, res) => {
    res.json(arrayRicette);
};
//GET mostra solamente un oggetto
const show = (req, res) => {
    //Prendiamo l'id dall'URL(postman) e lo convertiamo in numero con parseInt
    const ricetteId = parseInt(req.params.id);
    //Tramite FIND troviamo l'oggetto corrente che ha lo stesso id di quello trovato sopra(messo noi nell url)
    const objVerificato = arrayRicette.find((currObj) => currObj.id === ricetteId);
    //CREO una condizione dove se l'oggetto cercato è uguale a indefinito, mi segna l'errore 204, MENTRE, se lo trova, mi darà l'oggetto con id chiesto
    if (objVerificato === undefined) {
        res.sendStatus(204);
    } else {
        res.json(objVerificato);
    };
};
//POST
const create = (req, res) => {
    //Oggetto preso dalla richiesta APE
    const objJson = req.body;
    //PRENDO ULTIMO INDICE ARRAY INIZIALE
    const lastIndex = arrayRicette.length -1;
    //prendo l'ultimo oggetto dell'array
    const lastObj = arrayRicette[lastIndex];
    //Prendo ID dell'ultimo oggetto!
    const lastId = lastObj.id;
    //Aggiungo una proprietà ID aumentata di uno all'oggetto preso dalla richiesta
    objJson.id = lastId +1;
    arrayRicette.push(objJson);
    res.json(arrayRicette);

};
//Vogliam modificare un oggetto dell'array, questo oggetto deve avere lo stesso ID del parametro inserito nel URL
//PUT
const update = (req, res) => {
    // res.json("Modifica tutti i dati dell'elemento!");
    //converto il nostro parametro da stringa a numero!
    const paramId = parseInt(req.params.id);
    const objDaApi = req.body;
    // troviamo l'indice dell'array da aggiornare
    const indexToUpdate = arrayRicette.findIndex((currObj)=> currObj.id === paramId);
    const objToUpdate = arrayRicette[indexToUpdate];
    const objApiToPush = {
        
        id: objToUpdate.id,
        titolo: objDaApi.titolo,
        contenuto: objDaApi.contenuto,
        immagine: objDaApi.immagine, 
        tags: objDaApi.tags
    };
    arrayRicette[indexToUpdate] = objApiToPush;
    res.json(arrayRicette);
};

//PATCH
const modify = (req, res) => {
    const ricetteId = req.params.id;
    res.json("Qui modifichiamo gli specifici dati di uno specifico elemento " + ricetteId);
};

//DELETE
const destroy = (req, res) => {
    //Prendiamo l'id dall'URL(postman) e lo convertiamo in numero con parseInt
    const ricetteId = parseInt(req.params.id);
    //Dobbiamo trovare l'indice dell'oggetto da cancellare!
    const indexToDelete = arrayRicette.findIndex((currObj) => currObj.id === ricetteId);

    if (indexToDelete === -1) {
        // res.sendStatus(204);
        res.json("Ciao c'è un errore");
    } else {
        arrayRicette.splice(indexToDelete, 1);
        res.json(arrayRicette);
    };
};


module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
};