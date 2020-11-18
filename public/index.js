let inmprimir = "";

//Buscar zona de buceo.
function zonaBuceo() {
  //Traigo del index.html la zona de buceo que el usuario quiere ver
  let zonaBuceo = document.getElementById("lugar").value;
  //console.log(zonaBuceo);
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
            <button onclick="imprimirPlayaBlanca(${i})">Ver inmersión</button>
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
          <button onclick="imprimirPuerto(${i})">Ver inmersión</button>
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
          <button onclick="imprimirMala(${i})">Ver inmersión</button>
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
          <div class = "resultados">
          <img src="${datos[i].imagen}" alt="Imagen">
          <h2>${datos[i].nombre}</h2>
          <p>${datos[i].descripcion}</p>
          <button onclick="imprimirGraciosa(${i})">Ver inmersión</button>
          <br><br>
          </div>
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

// //////IMPRIMIR INMERSIÓN PLAYA BLANCA EN PANTALLA
function imprimirPlayaBlanca(dato) {
  console.log(dato);
  fetch("/playablanca/")
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (datos) {
      console.log(datos);

      let miNombre = "";
      let miDescripcion = "";
      let miLugar = "";
      let miNivel = "";
      let miProfundidad = "";
      let miEntrada = "";
      let miHorario = "";
      let miTemperatura = "";
      let miMapa = "";
      let miImagen = "";

      for (let i = 0; i < datos.length; i++) {
        miNombre = datos[dato].nombre;
        miDescripcion = datos[dato].descripcion;
        miLugar = datos[dato].lugar;
        miNivel = datos[dato].nivel;
        miProfundidad = datos[dato].profundidad;
        miEntrada = datos[dato].entrada;
        miHorario = datos[dato].horario;
        miTemperatura = datos[dato].temperatura;
        miMapa = datos[dato].mapa;
        miImagen = datos[dato].imagen;
      }
      document.getElementById("miNombre").innerHTML = `<h2>${miNombre}</h2>`;
      document.getElementById(
        "miDescripcion"
      ).innerHTML = `<p>${miDescripcion}</p>`;
      document.getElementById("miLugar").innerHTML = `<p>${miLugar}</p>`;
      document.getElementById("miNivel").innerHTML = `<p>${miNivel}</p>`;
      document.getElementById(
        "miProfundidad"
      ).innerHTML = `<p>${miProfundidad}</p>`;
      document.getElementById("miEntrada").innerHTML = `<p>${miEntrada}</p>`;
      document.getElementById("miHorario").innerHTML = `<p>${miHorario}</p>`;
      document.getElementById(
        "miTemperatura"
      ).innerHTML = `<p>${miTemperatura}</p>`;
      document.getElementById(
        "miMapa"
      ).innerHTML = `<img src="${miMapa}" alt="Mapa">`;
      document.getElementById(
        "miImagen"
      ).innerHTML = `<img src="${miImagen}" alt="Mapa">`;
    });
}

//IMPRIMIR INMERSIÓN PUERTO DEL CARMEN EN PANTALLA
function imprimirPuerto(dato) {
  console.log(dato);
  fetch("/puertodelcarmen/")
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (datos) {
      console.log(datos);

      let miNombre = "";
      let miDescripcion = "";
      let miLugar = "";
      let miNivel = "";
      let miProfundidad = "";
      let miEntrada = "";
      let miHorario = "";
      let miTemperatura = "";
      let miMapa = "";
      let miImagen = "";

      for (let i = 0; i < datos.length; i++) {
        miNombre = datos[dato].nombre;
        miDescripcion = datos[dato].descripcion;
        miLugar = datos[dato].lugar;
        miNivel = datos[dato].nivel;
        miProfundidad = datos[dato].profundidad;
        miEntrada = datos[dato].entrada;
        miHorario = datos[dato].horario;
        miTemperatura = datos[dato].temperatura;
        miMapa = datos[dato].mapa;
        miImagen = datos[dato].imagen;
      }
      document.getElementById("miNombre").innerHTML = `<h2>${miNombre}</h2>`;
      document.getElementById(
        "miDescripcion"
      ).innerHTML = `<p>${miDescripcion}</p>`;
      document.getElementById("miLugar").innerHTML = `<p>${miLugar}</p>`;
      document.getElementById("miNivel").innerHTML = `<p>${miNivel}</p>`;
      document.getElementById(
        "miProfundidad"
      ).innerHTML = `<p>${miProfundidad}</p>`;
      document.getElementById("miEntrada").innerHTML = `<p>${miEntrada}</p>`;
      document.getElementById("miHorario").innerHTML = `<p>${miHorario}</p>`;
      document.getElementById(
        "miTemperatura"
      ).innerHTML = `<p>${miTemperatura}</p>`;
      document.getElementById(
        "miMapa"
      ).innerHTML = `<img src="${miMapa}" alt="Mapa">`;
      document.getElementById(
        "miImagen"
      ).innerHTML = `<img src="${miImagen}" alt="Mapa">`;
    });
}

//IMPRIMIR INMERSIÓN LA GRACIOSA EN PANTALLA
function imprimirGraciosa(dato) {
  console.log(dato);
  fetch("/lagraciosa/")
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (datos) {
      console.log(datos);

      let miNombre = "";
      let miDescripcion = "";
      let miLugar = "";
      let miNivel = "";
      let miProfundidad = "";
      let miEntrada = "";
      let miHorario = "";
      let miTemperatura = "";
      let miMapa = "";
      let miImagen = "";

      for (let i = 0; i < datos.length; i++) {
        miNombre = datos[dato].nombre;
        miDescripcion = datos[dato].descripcion;
        miLugar = datos[dato].lugar;
        miNivel = datos[dato].nivel;
        miProfundidad = datos[dato].profundidad;
        miEntrada = datos[dato].entrada;
        miHorario = datos[dato].horario;
        miTemperatura = datos[dato].temperatura;
        miMapa = datos[dato].mapa;
        miImagen = datos[dato].imagen;
      }
      document.getElementById("miNombre").innerHTML = `<h2>${miNombre}</h2>`;
      document.getElementById(
        "miDescripcion"
      ).innerHTML = `<p>${miDescripcion}</p>`;
      document.getElementById("miLugar").innerHTML = `<p>${miLugar}</p>`;
      document.getElementById("miNivel").innerHTML = `<p>${miNivel}</p>`;
      document.getElementById(
        "miProfundidad"
      ).innerHTML = `<p>${miProfundidad}</p>`;
      document.getElementById("miEntrada").innerHTML = `<p>${miEntrada}</p>`;
      document.getElementById("miHorario").innerHTML = `<p>${miHorario}</p>`;
      document.getElementById(
        "miTemperatura"
      ).innerHTML = `<p>${miTemperatura}</p>`;
      document.getElementById(
        "miMapa"
      ).innerHTML = `<img src="${miMapa}" alt="Mapa">`;
      document.getElementById(
        "miImagen"
      ).innerHTML = `<img src="${miImagen}" alt="Mapa">`;
    });
}

//IMPRIMIR INMERSION MALA EN PANTALLA
function imprimirMala(dato) {
  console.log(dato);
  fetch("/mala/")
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (datos) {
      console.log(datos);

      let miNombre = "";
      let miDescripcion = "";
      let miLugar = "";
      let miNivel = "";
      let miProfundidad = "";
      let miEntrada = "";
      let miHorario = "";
      let miTemperatura = "";
      let miMapa = "";
      let miImagen = "";

      for (let i = 0; i < datos.length; i++) {
        miNombre = datos[dato].nombre;
        miDescripcion = datos[dato].descripcion;
        miLugar = datos[dato].lugar;
        miNivel = datos[dato].nivel;
        miProfundidad = datos[dato].profundidad;
        miEntrada = datos[dato].entrada;
        miHorario = datos[dato].horario;
        miTemperatura = datos[dato].temperatura;
        miMapa = datos[dato].mapa;
        miImagen = datos[dato].imagen;
      }
      document.getElementById("miNombre").innerHTML = `<h2>${miNombre}</h2>`;
      document.getElementById(
        "miDescripcion"
      ).innerHTML = `<p>${miDescripcion}</p>`;
      document.getElementById("miLugar").innerHTML = `<p>${miLugar}</p>`;
      document.getElementById("miNivel").innerHTML = `<p>${miNivel}</p>`;
      document.getElementById(
        "miProfundidad"
      ).innerHTML = `<p>${miProfundidad}</p>`;
      document.getElementById("miEntrada").innerHTML = `<p>${miEntrada}</p>`;
      document.getElementById("miHorario").innerHTML = `<p>${miHorario}</p>`;
      document.getElementById(
        "miTemperatura"
      ).innerHTML = `<p>${miTemperatura}</p>`;
      document.getElementById(
        "miMapa"
      ).innerHTML = `<img src="${miMapa}" alt="Mapa">`;
      document.getElementById(
        "miImagen"
      ).innerHTML = `<img src="${miImagen}" alt="Mapa">`;
    });
}
