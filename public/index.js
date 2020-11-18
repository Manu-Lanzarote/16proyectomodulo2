//Buscar zona de buceo.

function zonaBuceo() {
  //Traigo del index.html la zona de buceo que el usuario quiere ver
  let zonaBuceo = document.getElementById("lugar").value;
  console.log(zonaBuceo);
  let toUpperZonaBuceo = zonaBuceo.toUpperCase();

  //Creo un fetch por cada una de las zonas de buceo.
  //Playa Blanca
  function playaBlanca() {
    fetch("/playablanca/")
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (datos) {
        console.log(datos);
        //Imprimir en pantalla las inmersiones que tengo en la db
        let inmersiones = "";
        for (let i = 0; i < datos.length; i++) {
          inmersiones += `
          <div class = "resultados">
          <img src="${datos[i].imagen}" alt="Imagen">
            <h2>${datos[i].nombre}</h2>
            <p>${datos[i].descripcion}</p>
            <button onclick="imprimirPlayaBlanca()">Ver inmersión</button>
            <br><br>
            </div>
            `;
        }
        document.getElementById("div1").innerHTML = inmersiones;
      });
  }

  //Puerto del Carmen
  function puertoDelCarmen() {
    fetch("/puertodelcarmen/")
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (datos) {
        console.log(datos);
        //Imprimir en pantalla las inmersiones que tengo en la db
        let inmersiones = "";
        for (let i = 0; i < datos.length; i++) {
          inmersiones += `
          <div class = "resultados">
          <img src="${datos[i].imagen}" alt="Imagen">
          <h2>${datos[i].nombre}</h2>
          <p>${datos[i].descripcion}</p>
          <button onclick="verInmersion()">Ver inmersión</button>
          <br><br>
          </div>
            `;
        }
        document.getElementById("div1").innerHTML = inmersiones;
      });
  }

  //Mala
  function mala() {
    fetch("/mala/")
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (datos) {
        console.log(datos);
        //Imprimir en pantalla las inmersiones que tengo en la db
        let inmersiones = "";
        for (let i = 0; i < datos.length; i++) {
          inmersiones += `
          <div class = "resultados">
          <img src="${datos[i].imagen}" alt="Imagen">
          <h2>${datos[i].nombre}</h2>
          <p>${datos[i].descripcion}</p>
          <button onclick="verInmersion()">Ver inmersión</button>
          <br><br>
          </div>
            `;
        }
        document.getElementById("div1").innerHTML = inmersiones;
      });
  }

  //La Graciosa
  function laGraciosa() {
    fetch("/lagraciosa/")
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (datos) {
        console.log(datos);
        //Imprimir en pantalla las inmersiones que tengo en la db
        let inmersiones = "";
        for (let i = 0; i < datos.length; i++) {
          inmersiones += `
            <h2>${datos[i].nombre}</h2>
            <p>${datos[i].descripcion}</p>
            <img src="${datos[i].mapa}" alt="Imagen">
            <p class="nivel">Nivel: ${datos[i].nivel}</p>
            <span>Profundidad: ${datos[i].profundidad}</span> --
            <span>Entrada: ${datos[i].entrada}</span> -- 
            <span>Horario: ${datos[i].horario}</span> -- 
            <span>Temperatura: ${datos[i].temperatura}</span>
            <br><br>
            `;
        }
        document.getElementById("div1").innerHTML = inmersiones;
      });
  }

  //E imprimo el que corresponda. Si no existe lanzo un mensaje de error.
  if (toUpperZonaBuceo === "PLAYA BLANCA") {
    playaBlanca();
  } else if (toUpperZonaBuceo === "PUERTO DEL CARMEN") {
    puertoDelCarmen();
  } else if (toUpperZonaBuceo === "MALA") {
    mala();
  } else if (toUpperZonaBuceo === "LA GRACIOSA") {
    laGraciosa();
  } else {
    document.getElementById("div1").innerHTML = `<div class = "dory">
    <img src="./imagenes/dory.png" alt="Fish">
    <span class="error">Upps! No encontramos la zona que has seleccionado.
    <br>
    Inténtalo de nuevo.</span>
    </div>
    `;
  }
}

//////IMPRIMIR INMERSIÓN PLAYA BLANCA EN PANTALLA
function imprimirPlayaBlanca() {
  console.log("prueba");
  document.getElementById("prueba").innerHTML = `prueba`;
}
