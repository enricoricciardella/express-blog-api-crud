const arrayTag = ["Dolce", "Salato"];

// Creo l'array di oggetti contenente i dati di ogni dolce.
const arrayRicette = [
  { 
    "id": 7,
    titolo: "Ciambellone",
    contenuto: "Non c'è contenuto",
    immagine: "public/images/ciambellone.jpeg",
    tags: arrayTag[0],
  },
  {
    "id": 2,
    titolo: "Cracker Barbabietola",
    contenuto: "Non c'è contenuto",
    immagine: "public/images/cracker_barbabietola.jpeg",
    tags: arrayTag[1],
  },
  {
    "id": 8,
    titolo: "Pane fritto dolce",
    contenuto: "Non c'è contenuto",
    immagine: "public/images/pane_fritto_dolce.jpeg",
    tags: arrayTag[0],
  },
  {
    "id": 4,
    titolo: "Pasta barbabietola",
    contenuto: "Non c'è contenuto",
    immagine: "public/images/pasta_barbabietola.jpeg",
    tags: arrayTag[1],
  },
  {
    "id": 1,
    titolo: "Torta paesana",
    contenuto: "Non c'è contenuto",
    immagine: "public/images/torta_paesana.jpeg",
    tags: arrayTag[0],
  },
];

module.exports = arrayRicette;