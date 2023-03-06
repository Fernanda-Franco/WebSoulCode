// Dia 14.02
// Variáveis ​​e operadores

// let = palavra reservada
// deixe [NOME DA VARIAVEL]
let  nomeCompleto ;  // caixa de camelo

nomeCompleto  =  "José Almir" ;  // atribuição

// console.log("batata");
// console.log(nomeCompleto);
nomeCompleto  =  "Pedro Tavares" ;  // re-atribuição (redefinir)
// console.log(nomeCompleto);

idade  =  19 ;
idade  =  20 ;

// concatenação
// console.log("Meu nome é " + nomeCompleto + " e tenho " + idade + " anos!");

// const = define uma constante = impede a re-atribuição
const  cpf  =  "000.000.000-00" ;
// cpf = "batata";

// Tipos
let  golsSofridos  =  3 ;  // numero = numero
chanceDerrota  =  0,55 ;  // numero decimal
let  posseBola  =  33;  // 33,57
let  nomeTime  =  "Valência" ;  // corda
patrocinio ;  // indefinido = não tem valor definido
patrocinio  =  "Soulcode" ;
// boolean = 2 valores possíveis (verdadeiro ou falso)
timeGanhou  =  true ;  // "Lê: É verdade que o timeGanhou"
let  timePerdeu  =  false ;  // "Lê: É falso que o timePerdeu"

// Operadores aritméticos
soma  =  200  +  100;
sub  =  100-55;
mult  =  5  *  7;
div  =  400/25;
resto  =  8  %  3 ;
let  expressao  =  ( soma  +  sub )  *  div ;
let  expressao2  =  mult  -  div  /  rest ;

// console.log("A soma é " + soma + "!");
// console.log(`A subtração é ${sub}!`); // Template strings = interpolação de strings
// console.log(`A multiplicação é ${mult}!`);
// console.log(div);
// console.log(resto);
// console.log(expressão);
// console.log(expressao2);

i  =  0 ;
// i = i + 1; // o novo valor de i é 0 + 1 = 1
// i = i + 1; // o novo valor de i é 1 + 1 = 2
// i = i + 1; // o novo valor de i é 2 + 1 = 3
// i = i + 1; // o novo valor de i é 3 + 1 = 4
// i = i + 1
// console.log(i);
// altera o valor de i somando i + 1 = incremento
// console.log(i);
// i = i - 1 = decremento
// console.log(i);

// Operadores relacionais (>, <, >=, <=, ==, !=)
a  =  3 ;
b  =  5 ;

console . log ( a  >  b ) ;  // A é maior que B?
console . log ( a  <  b ) ;  // A é menor que B?
console . log ( b  >=  a ) ;  // B é maior ou igual a A?
console . log ( a  <=  b ) ;  // A é menor ou igual a B?
console . log ( a  ==  b ) ;  // A é IGUAL a B?
console . log ( a  !=  b ) ;  // A é diferente de B?

console . log ( a  ==  "3" ) ;  // A é igual a "3"?
console . registro ( a  ===  "3" ) ;  // A é ausente igual a "3"?
console . log ( a  !==  "3" ) ;  // A é diferente de "3"?
// O operador === compara VALOR e TIPO

// Exercício 1
peso  =  78,0 ;
altura  =  1,90 ;
let  imc  =  peso  /  altura  **  2  // altura elevado a 2
console . log ( "Meu IMC é"  +  imc )