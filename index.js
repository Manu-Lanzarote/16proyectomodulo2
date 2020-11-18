//Importo express y mongodb
const express = require("express");
const mongodb = require("mongodb");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Conecto a la base de datos y la guardo
const MongoClient = mongodb.MongoClient;
let db;

MongoClient.connect("mongodb://localhost:27017", function (err, client) {
  if (err !== null) {
    console.log(err);
  } else {
    db = client.db("inmersiones_lanzarote");
  }
});

//Lanzarote tiene 4 zonas de buceo, así que crearé un app.get por cada una de ellas con su correspondiente ruta.
//Playa Blanca
app.get("/playablanca/", function (req, res) {
  db.collection("PLAYA BLANCA")
    .find()
    .toArray(function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    });
});

//Mala
app.get("/mala/", function (req, res) {
  db.collection("MALA")
    .find()
    .toArray(function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    });
});

//La graciosa
app.get("/lagraciosa/", function (req, res) {
  db.collection("LA GRACIOSA")
    .find()
    .toArray(function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    });
});

//Puerto del Carmen
app.get("/puertodelcarmen/", function (req, res) {
  db.collection("PUERTO DEL CARMEN")
    .find()
    .toArray(function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    });
});

//Ruta post para dar al usuario la posibilidad de añadir nuevos puntos de inmersión
app.post("/anyadir-inmersion/", function (req, res) {
  const nuevaInmersion = req.body;
  db.collection(req.body.lugar).insertOne(nuevaInmersion, function (
    err,
    datos
  ) {
    if (err !== null) {
      res.send(err);
    } else {
      res.send(datos);
    }
  });
});

app.listen(3000);
