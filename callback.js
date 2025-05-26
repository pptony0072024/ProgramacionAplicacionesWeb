function obtenerDatos(callback) {
  setTimeout(() => {
    const datos = "Datos obtenidos mediante callback";
    callback(datos);
  }, 1000);
}

obtenerDatos((resultado) => {
  console.log("Callback:", resultado);
});
