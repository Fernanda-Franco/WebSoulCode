// Tópicos: funções

// Função = procedimento = método

// Sintaxe básica
função =  dizOla ( )  {
  // declaração de função
  console . log ( "Olá, Mundo!" ) ;
  console . log ( "!!!!!!!" ) ;
}

// invocação = chamada
// dizOla();
// dizOla();
// dizOla();

função = exemplo01 ( )  {
  // escopo de função
a  =  5 ;
b  =  10 ;
  console . log ( `A soma é ${ a  +  b } ` ) ;
}

// exemplo01();

num1  =  3 ;
num2  =  5 ;

função = exemplo02 ( )  {
  console . log ( `A soma é ${ num1  +  num2 } ` ) ;
}

// exemplo02();
num1  =  10 ;
num2  =  15 ;
// exemplo02();

// Parâmetros = entrada = o que a função precisa para executar
// = Informação dinâmica
// aeb são PARÂMETROS
função = soma ( a ,  b )  {
  console . log ( `A soma de ${ a } + ${ b } = ${ a  +  b } ` ) ;
}

// soma(20, 75);
// soma(10, 5);
// soma(9, 80);
// soma(1, 2);

função = calculadora ( a ,  b ,  c )  {
  console . log ( `A soma é ${ a  +  b  +  c } ` ) ;
  console . log ( `A subtração é ${ a  -  b  -  c }`);
  console . log ( `A multiplicação é ${ a  *  b  *  c }`);
  console . log ( `A divisão é ${ a  /  b  /  c}`);
}

// Chamou?
// calculadora(10, 5, 2);
numero1  =  50 ;
numero2  =  25 ;
numero3  =  40 ;
// calculadora(numero1, numero2, numero3); // argumentos = valores passados ​​para os parâmetros

// Declare uma função que recebe 3 notas e mostra a média entre elas.
função = mídia ( n1 ,  n2 ,  n3 )  {
resultado  =  ( n1  +  n2  +  n3 )  /  3 ;
console . log ( ´´A média é ${ resultado } ` ) ;

   resultado de retorno ;  // indica que o valor da variável será "externalizado"
  console . log ( "Oiee" ) ;  // dead-code = código que nunca vai ser executado
}

// let medBiologia = media(7.5, 8.0, 9.0);
// deixe medMatematica = media(7, 6, 3.5);
// let medPortugues = media(7.7, 9.6, 4.5);

// console.log(`Biologia = ${medBiologia}`);
// console.log(`Matemática = ${medMatematica}`);
// console.log(`Português = ${medPortugues}`);

// Função ENTRADA(parâmetro) -> PROCESSAMENTO(lógica) -> SAÍDA(retorno)
// y = f(x)
// f = função
// x = parâmetro
// y = resultado/retorno
function  estaAprovado ( n1 ,  n2 ,  n3 )  {
  // indica se o aluno foi aprovado ou não
  let  med  =  media ( n1 ,  n2 ,  n3 ) ;

  if  ( med  >=  7 )  {
    console . log ( "Aprovado!" ) ;
    retorna  verdadeiro ;  // podemos retornar "Aprovado!"
  }  senão  {
    console . log ( "Reprovado!" ) ;
    retorna  falso ;  // podemos retornar "Reprovado!"
  }
}

let  statusAluno  =  estaAprovado ( 6.5,3.0,8.6 ) ;  _ _  _ _
console . log ( statusAluno ) ;