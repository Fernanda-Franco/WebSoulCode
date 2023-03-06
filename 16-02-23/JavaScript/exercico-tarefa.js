let nomeProduto = "Batata";
let valorProduto = 100;
let descontoDoProduto = 0.2;
let descontoValido = false;
let precoFinal = valorProduto;
const demandaProdutos = [10, 2, 1, 30, 5]; //array
let valoresDemanda = []; //array vazio
let totalLucro = 0

if (descontoValido === true) {
  precoFinal = valorProduto - valorProduto * descontoDoProduto;
  console.log(precoFinal);
}

if (precoFinal > 1000) {
  precoFinal = precoFinal - 50;
} else {
  console.log(precoFinal);
}
for (let i = 0; i < demandaProdutos.length; i++) {
    const element = demandaProdutos[i];
    let e = element * precoFinal
    valoresDemanda.push(e)
    console.log(`O cliente ${i+1} devera pagar: ${valoresDemanda[i]}R$`)
}
for (let i = 0; i < valoresDemanda.length; i++) {
    let element = valoresDemanda[i];
    totalLucro = totalLucro + element
}
console.log(totalLucro)
