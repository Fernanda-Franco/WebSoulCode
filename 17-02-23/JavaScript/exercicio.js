// Exercício I: Faça a tabuada do 5
// 1 x 5 = 5
// 2 X 5 = 10
// ...
// 10 x 5 = 50

mult  =  1 ;

enquanto  ( mult  <=  10 )  {
resultado  =  mult  *  5 ;
  console . log ( ` ${ mult } x 5 = ${ resultado } ` ) ;
  multi ++ ;
}

// Exercícios II: Vá do 1 até o 99 e mostre apenas os valores ímpares. (SE dentro do WHILE)
num  =  1 ;

enquanto  ( num  <=  99 )  {
  if  ( num  %  2  ==  1 )  {
    console . log ( "Ímpar: "  +  num ) ;
  }

  num ++ ;
}
// Exercícios III: Conte de 50 até 75.
console . registro ( "---------------------------------------" ) ;

x  =  50 ;  // 50, 51, 52, 53 ... 75

enquanto  ( x  <=  75 )  {
  console . log ( x ) ;
  x ++ ;
}

// Exercícios IV: Transforme os exercícios anteriores para usar o FOR.
console . registro ( "-----------------------------------------" ) ;

// Tabuada
for  ( let  fator  =  1 ;  fator  <=  10 ;  fator ++ )  {
  console . log ( `5 x ${ fator } = ${ fator  *  5 } ` ) ;
}

// Impares
for  ( deixe  numero  =  1 ;  numero  <=  99 ;  numero ++ )  {
  if  ( numero  %  2  ===  1 )  {
    console . log ( "Impar: "  +  numero ) ;
  }
}

// Intervalo 50 a 75
for  ( deixe  i  =  50 ;  i  <  76 ;  i ++ )  {
  console . log ( `número: ${ i } ` ) ;
}