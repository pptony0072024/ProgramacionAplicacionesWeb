function obtenerDatos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos obtenidos con async/await");
    }, 1000);
  });
}

async function mostrarDatos() {
  try {
    const resultado = await obtenerDatos();
    console.log("Async/Await:", resultado);
  } catch (error) {
    console.error("Error:", error);
  }
}

mostrarDatos();
