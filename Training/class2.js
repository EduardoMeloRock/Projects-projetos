function criaPessoa(nome, sobrenome, a, p) {
    return { nome, 
        sobrenome,
    fala: function(assunto) {
        return `${nome} ${sobrenome} está ${assunto}.`;
    },
    altura: a,
    peso: p,
    imc() {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2);
    }
};
}
    
    const p1 = criaPessoa('Lord', 'Darkonda', 1.67, 90);
    console.log(p1.imc())
    const p2 = criaPessoa('Eduardo','Melo', 1.90, 100)
    console.log(p2.fala('Falando sobre JS'));
   