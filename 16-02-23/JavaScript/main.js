// Estruturas de seleção

lang  =  "pt" ;  // pt, es, en

// if (lang === "pt") {
// console.log("Olá, Mundo!");
// } else if (lang === "es") {
// console.log("Hola, Mundo!");
// } else if (lang === "en") {
// console.log("Olá, Mundo!");
// } outro {
// console.log("Não há suporte para este idioma: " + lang);
// }

// switch-case = escolha-caso
alternar  ( idioma ) {
case"pt"
    console . log ( "Olá, Mundo!" ) ;
    quebrar ;  // para as verificações abaixo
  case  "es" :
    console . log ( "Olá, Mundo!" ) ;
    quebrar ;
  case  "pt" :
    console . log ( "Olá, Mundo!" ) ;
    quebrar ;
  default: // caso não encontre nenhum
    console . log ( "Não há suporte para este idioma: "  +  lang ) ;
}

// Exercício III: Defina uma variável numero(1 a 7) e diga qual é o dia da semana:
// 1 - domingo, 2 - segunda, 3 - terça, ... (SWITCH)

numero  =  2 ;

alternar  ( número );
caso1:
    console.registro ( "Domingo" ) ;
    quebrar;
  caso2:
    console.registro ( "Segunda" ) ;
    quebrar;
  caso3:
    console.log ( "Terça" ) ;
    quebrar;
  caso4:
    console.log ( "Quarta" ) ;
    quebrar;
  caso5:
    console.registro ( "Quinta" ) ;
    quebrar ;
  caso6:
    console.log ( "Sexta" ) ;
    quebrar;
  caso7:
    console.log ( "Sábado" ) ;
    quebrar;
  padrão:
    console.log ( "Este dia não existe!" ) ;
}

// IV Exercício: Defina uma variável comida
// - Mostre a mensagem "Humm, adoro" se for: batata, carne, chocolate
// - Mostre a mensagem "As vezes" se for: pizza, sanduíche
// - Mostre a mensagem "Quero não!" se não for nenhum acima.

let  comida  =  "pizza" ;

// if (comida === "batata" || comida === "carne" || comida === "chocolate") {
// console.log("Hum, adoro!");
// } else if (comida === "pizza" || comida === "sanduíche") {
// console.log("As vezes...");
// } outro {
// console.log("Quero não!");
// }

switch  ( comida )  {
  case  "batata" :
  case  "carne" :
  case  "chocolate" :
    console . log ( "Hum, adoro!" ) ;
    quebrar ;
  case  "pizza" :
  case  "sanduíche" :
    console . log ( "As vezes..." ) ;
    quebrar ;
  padrão :
    console . log ( "Quero não!" ) ;
}

// Exercício V: Com IF-ELSE, verifique se uma variável número é par ou não.
// Par é um número que é divisível por 2.

// Regra: Um número é zero, par ou ímpar.
num  =  2 ;

if  ( num  ===  0 )  {
  console . log ( "O número é zero" ) ;
}  else  if  ( num  %  2  ===  0 )  {
  console . log ( "O número é par" ) ;
}  /*if (num % 2 !== 0)*/  else  {
  // neste caso o se é necessário
  console . log ( "O número é total" ) ;
}
