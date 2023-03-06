// Exercício I: Crie uma função para calcular o IMC,
// de acordo com a formula (IMC = PESO / ALTURA * ALTURA),
// determine quais os 2 parâmetros
// que ela deve receber e mostre o calculo no console sempre
// que ela for chamada (NÃO TEM RETORNO)

function imc(peso, altura){
    let calculo = peso / (altura * altura);
    console.log(`O IMC é ${calculo}`);
}
imc(80.0, 1.79);
imc(40.0, 1.5)

// Exercício II: Crie uma função que recebe um número (PARÂMETRO)
// de 0 a 1. E RETORNA em porcentagem:
// percent(0.456) -> 45.6%

function porcentagem(num) {
    let p = num * 100;
    return `${p.toFixed(1)}%`;
}

let valorFormatado = porcentagem(0.456);// 75.0%
console.log(valorFormatado);

// Exercício III: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA se ele é negativo (true ou false)
// ehNegativo(-2) ===> true

function ehNegativo(num) {
    if (num < 0) {
        return true;
    } else {
        return false;
    }
    }

    console.log(ehNegativo(-200))

    function criarNomeCompleto(nome, sobrenome) {
        return nome + "" + sobrenome;
        }
console.log(criarNomeCompleto("Fernanda","Franco"));


// e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido

function nivelCirculo(area) {
    if (area >= 1 && area <=20) {
        return "nivel I";
    } else if 
}