(function(idade, peso, altura) {
   
    const sobrenome = 'Darkonda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Lord'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(23, 90, 1.67);