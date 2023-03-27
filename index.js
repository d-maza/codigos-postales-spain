const zip = require ('./codigos-postales.json')

city = "Reus" // Ejemplo de búsqueda - Search example

const { codigo_postal } = zip.find((item) => item.municipio_nombre == city);
 
console.log(codigo_postal);