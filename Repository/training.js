/* const numeros = [5, 50, 80, 1 , 2, 3, 5, 8, 7, 11, 15, 22, 27];


// const numerosFiltrados = numeros.filter(callbackFilter);

const numerosFiltrados = numeros.filter(valor => valor > 20);
console.log(numerosFiltrados); */

/* const numeros = [10, 20, 30, 5, 2, 7, 9, 12, 15, 50, 70];

const numerosFiltrados = numeros.filter(valor => valor >= 10);
console.log(numerosFiltrados); */
function inicia(valor, acumulador) {
const numeros = [10, 20, 30, 5, 2, 7, 9, 12, 15, 50, 70];

if(valor % 2 === 0) acumulador.push();
return acumulador;
}