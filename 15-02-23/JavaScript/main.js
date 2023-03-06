// Operadores lógicos: NOT(!), AND(&&), OR(||)

// Operador NOT(!) = Inverte o valor lógico
ligado  =  verdadeiro ;
desligado  =  ! ligado ;
/*
    Tabela (NOT)
    !verdadeiro = falso
    !falso = verdadeiro
*/
// Operador AND(&&) = Todas as expressões tem que ser true
let  gasolinaTanque  =  1 ;
let  naReserva  =  gasolinaTanque  <  5 ;
let  podeAbastecer  =  desligado  &&  naReserva ;
let  podeViajar  =  ligado  &&  ! naReserva ;
ficaEmCasa  =  ! podeViajar ;
/*
    Tabela Verdade (E)
    verdadeiro && verdadeiro = verdadeiro
    verdadeiro && falso = falso
    falso && verdadeiro = falso
    falso && falso = falso
*/
// Operador OR(||) = Basta uma expressão ser true
let  taPodendo  =  podeViajar  ||  podeAbastecer ;
/*
    Tabela Verdade (OU)
    verdadeiro || verdadeiro = verdadeiro
    verdadeiro || falso = verdadeiro
    falso || verdadeiro = verdadeiro
    falso || falso = falso
*/
idade  =  100 ;
let  podeBeber  =  idade  >=  18  &&  idade  <=  59 ;  // De 18 até 59 anos
// Basta idade >= 18
let  podeDirigir  =  idade  >=  18  ||  idade  <=  59 ;
console . log ( podeBeber ) ;
console . log ( podeDirigir ) ;

media  =  8.5 ;
let  sabeInglês  =  false ;
let  aprovado  =  media  >=  7 ;
// O candidato será contratado caso esteja aprovado e saiba inglês
contratado  =  aprovado  &&  sabeInglês ;
console . log ( aprovado  ||  sabeInglês ) ;
x  =  5 ;
y  =  10 ;
let  expressao  =  x  >  3  &&  y  <  20 ;  // verdadeiro
let  expressao2  =  y  !=  20  ||  x  >=  5 ;  // verdadeiro
let  expressao3  =  y  ===  100  ||  x  <  10 ;  // verdadeiro
let  expressao4  =  ! ( x  ===  5 ) ;  // falso = !verdadeiro
// Estruturas condicionais (IF-ELSE)
/*
    if(condição) {
        // Faz algo se a condição for verdadeira
    }
*/

let  idadeUsuario  =  10 ;

if  ( idadeUsuário  >=  18 )  {
  // executa se for verdade
  console . log ( "Você é maior de idade!" ) ;
} contrario {
  //caso contrário
  console . log ( "Você é menor de idade" ) ;
}

nota  =  5,5 ;

if  ( nota  >=  7 )  {
  // está aprovado
  console . log ( "Você está aprovado com nota"  +  nota ) ;
}  senão  {
  // não está aprovado
  console . log ( "Você está reprovado. Tente de novo" ) ;
}

numero  =  0 ;

if  ( numero  >  0 )  {
  console . log ( "O número é positivo!" ) ;
}  else  if  ( numero  <  0 )  {
  console . log ( "O número é negativo!" ) ;
}  senão  {
  // se nenhuma das condições acima for verdadeira
  console . log ( "O número é zero!" ) ;
}

if  ( idadeUsuario  >=  18  &&  idadeUsuario  <=  59 )  {
  console . log ( "Você pode beber! Com moderação!" ) ;
}  senão  {
  console . log ( "Você não pode beber." ) ;
}