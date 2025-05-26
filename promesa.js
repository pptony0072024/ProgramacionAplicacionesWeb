function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const datos = "Datos obtenidos con promesa";
      resolve(datos);
    }, 1000);
  });
}

obtenerDatos()
  .then((resultado) => {
    console.log("Promesa:", resultado);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
