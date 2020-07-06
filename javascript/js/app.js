var producto1 = 'pizza',
  precio1 = 10,
  producto2 = 'completo',
  precio2 = 20;
 // prompt('hola');
  const arreglo = [1,2,3,4,5,6,7];
  var meses = ['enero', 'febrero', 'marzo'];
  const dias = new Array('lunes', 'martes');
  const mezcla = ['dos', 1 , null, true, 'hola'];
  const arr = [9,2,3,4,7];
arr.sort();
  //console.log(arr);
var persona =  {
  nombre:'sebastian',
  edad:26,
  ciudad:{
    comuna:'santiago',
    pais:'chile'
  }
};
console.log(persona.ciudad.pais);
  meses.push('abril');
  meses.unshift('mes cero');
  //quitar el ultimo
  meses.pop();
  //quitar el 1
  meses.shift();
  //quitar en especifico
  //meses.splice(2);
  //meses.reverse(); para cambiar
  // agregar dos arreglos concatenarlos
//console.log(arreglo.concat(mezcla));
//console.log(meses );

//buscar

html = `
  <ul>
    <li>Orden: ${producto1} </li>
    <li>precio: ${precio1} </li>
    <li> orden : ${producto2} </li>
    <li>Precio : ${precio2} </li>
    <li>Total: ${total(precio1,precio2)} </li>
    </ul>
`;

function total(precio1,precio2){
  return precio1+precio2;
}
console.log(html);
document.getElementById('app').innerHTML = html;
