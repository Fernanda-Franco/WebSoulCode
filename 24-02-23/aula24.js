// Exercicio I: Crie uma função que recebe 2 números e um operador (+, -, *, /)
// e faça a operação indicada entre os 2 números. Não tem retorno.

// Exercício II: Crie uma função que converte celsius em fahrenheit
// C = (F - 32) / 1.8
// Em seguida crie uma outra função (checarTemperatura) que recebe uma temperatura 
// como parâmetro:
// Caso esteja abaixo de 10: "Muito frio!"
// Esteja entre 11 e 15: "Clima bom!"
// Esteja entre 16 e 30: "Agradável..."
// Seja maior que 30: "Hell"

//Exercicio I

//function calculadora (a, b, operador) {
//    if (operador === "!"){
//    console.log(a, b, operador)
//    }
//} 
//calculadora(10, 20, "-")

// Exercício: Transforme as funções abaixo em arrow
function criarNomeCompleto(nome, sobrenome) {
    return nome + " " + sobrenome;
  }
  // const 
  //} console.log("nome + sobrenome")
  function contar(maximo) {
    for (let i = 1; i <= maximo; i++) {
      console.log(i);
    }
  }
  function imc(peso, altura) {
    let calculo = peso / (altura * altura);
    console.log(`O IMC é ${calculo}`)