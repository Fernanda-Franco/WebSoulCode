// Exercício I: Crie um array de palavras, para cada palavra
// verifique se o tamanho é menor que 5, se for transforme em BATATA
// Caso contrário retorne a palavra original em caixa alta.

let palavra = ["pao", "BANANA", "MILHO", "LEITE"];
let palavra2 = palavras.map((palavra) => {
    if (palavra.length < 5) {
        return "Batata";    }
    } else {
    return palavra.toUpperCase():
    }
});
console.log(palavra2)