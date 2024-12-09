//Creo le rotte della risorsa ricette
const express = require("express");
const arrayRicette = require("../data");
const router = express.Router();
console.log(router);
const ricetteController = require("../controllers/controllerPost");
//Importo middlewares 
const checkWare = require("../middlewares/checkware");
//Importo middlewares generico di errore
// const errorGlobal = require("../middlewares/checkware");


//INDEX endpoint
router.get("/", ricetteController.index);

//SHOW! GET
router.get("/:id", checkWare.checkId, ricetteController.show);

//CREATE! USA POST!
router.post("/", ricetteController.create);

//UPDATE!!!! PUT
router.put("/:id",checkWare.checkId, ricetteController.update);

//MODIFY - modifica nel DETTAGLIO un elemento, PATCH
router.patch("/:id",checkWare.checkId, ricetteController.modify);

//DESTROYY!!! DELETE
router.delete("/:id", checkWare.checkId, ricetteController.destroy);


module.exports = router;