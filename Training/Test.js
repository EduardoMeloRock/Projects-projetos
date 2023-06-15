/* function conta (operador, acumulador, ...numeros) {
    for (numero of numeros) {
    if (operador === '*') acumulador *= numero;
}
    console.log('O valor do desconto foi:', acumulador);
    
} 

conta ('*', 100, 0.1);

function descontado (operador, acumulado, ...descontos) {
    for (desconto of descontos) {
    if (operador === '-') acumulado -= desconto;
}
    console.log('O valor com desconto foi:', acumulado);
}


descontado("-", 100, 10); */

function conta (operador, acumulador, ...dano) {
    let dano1 = 10;
    let dano2 = 20;
    let dano3 = 50;
    let dano4= 70;
    let ataque = dano1 * dano2 * dano3 * dano4;
    
    for (ataque of dano) {
        if (operador === '*') acumulador *= ataque;
        if (operador === '*') acumulador *= ataque;
        if (operador === '*') acumulador *= ataque;
        if (operador === '*') acumulador *= ataque;
        
    }
    console.log('O poder de ataque vai ser de:', acumulador)
}
conta('*', 10, 20, 50, 70)
