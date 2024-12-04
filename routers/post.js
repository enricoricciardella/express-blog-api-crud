//Creo le rotte della risorsa ricette
const express = require("express");
const arrayRicette = require("../data");
const router = express.Router();
console.log(router);
const ricetteController = require("../controllers/controllerPost");

//INDEX endpoint
router.get("/", ricetteController.index);

//SHOW! GET
router.get("/:id", ricetteController.show);

//CREATE! USA POST!
router.post("/", ricetteController.create);

//UPDATE!!!! PUT
router.put("/:id", ricetteController.update);

//MODIFY - modifica nel DETTAGLIO un elemento, PATCH
router.patch("/:id", ricetteController.modify);

//DESTROYY!!! DELETE
router.delete("/:id", ricetteController.destroy);


module.exports = router;