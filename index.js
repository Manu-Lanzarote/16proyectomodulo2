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

//Ruta post para dar al usuario la posibilidad de AÑADIR nuevos puntos de inmersión
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

//Ruta PUT para dar al usuario la posibilidad de MODIFICAR una inmersión
app.put("/editarInmersion/", function (req, res) {
  let editarInmersion = {
    imagen: req.body.imagen,
    lugar: req.body.lugar,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    mapa: req.body.mapa,
    nivel: req.body.nivel,
    profundidad: req.body.profundidad,
    entrada: req.body.entrada,
    horario: req.body.horario,
    temperatura: req.body.temperatura,
  };
  db.collection(`${editarInmersion.lugar}`).updateOne(
    { nombre: editarInmersion.nombre },
    {
      $set: {
        imagen: editarInmersion.imagen,
        descripcion: editarInmersion.descripcion,
        mapa: editarInmersion.mapa,
        nivel: editarInmersion.nivel,
        profundidad: editarInmersion.profundidad,
        entrada: editarInmersion.entrada,
        horario: editarInmersion.horario,
        temperatura: editarInmersion.temperatura,
      },
    },
    function (err, datos) {
      if (err !== null) {
        res.send(err);
      } else {
        res.send(datos);
      }
    }
  );
});

//Ruta DELETE para borrar una inmersión
app.delete("/borrarInmersion/", function (req, res) {
  let lugar = req.body.lugar;
  let nombre = req.body.nombre;
  db.collection(`${lugar}`).deleteOne({ nombre: nombre }, function (
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
