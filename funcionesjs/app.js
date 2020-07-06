
//funciones con parametros

function saludar(nombre = 'visitante'){
  return `Hola ${nombre}`;
}

//saludar('seba');
//saludar('vivi');
let saludo;
saludo = saludar();
//console.log(saludo);
function sumar (a,b){
  return a + b;
}
var suma;
suma = sumar(5,3);
//console.log(suma);


// IIFFE algo asi el metodo
(function(tecnologia){
  //console.log(`aprendiendo ${tecnologia}`);
})('Javascript');


// objetos con funciones

const musica = {
  reproducir: function(){
    console.log(`reproduciendo musica ..`);
  },
  pausar: function(){
    console.log(`pausado activado ..`);
  }
}

// pasando funciones por fuera
musica.borrar = function(id){
  console.log(`borrando cancion con el id ${id}`)
}
musica.reproducir();
musica.pausar();
musica.borrar(2);

try {
  algo();
} catch (e) {
  console.log(e);
} finally {
  console.log('nanananan batman');
}
