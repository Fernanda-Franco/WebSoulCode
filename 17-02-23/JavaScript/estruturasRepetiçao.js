// Aula 17.02
// Tópicos: while, for

// Estruturas de repetição = loops = laços
// Condição de parada, valor inicial, atualizacao

// Enquanto = Enquanto
/*
    while(condição) {
        // código a se repetir
    }
*/

/*
// Loop infinito
deixe numero = 1;
while(true) { // loop infinito
    console.log(número);
}
*/

/*
deixe numero = 1;
while(true) { // condição de parada
    console.log(número);
    numero++;
}
*/

// Loop com parada e atualização
numero  =  1 ;
enquanto  ( número  <=  5 )  {
  console . registro ( número ) ;
  número ++ ;  // atualização
}

console . log ( "Fora do loop: "  +  numero ) ;

// 1000 até 1
numero2  =  10 ;

while  ( numero2  >=  1 )  {
  console . registro ( número2 ) ;
  numero2 -- ;
}

console . log ( "Fora do loop: "  +  numero2 ) ;

// Soma 1 + 2 + 3 + 4 + 5 + ... + 99 + 100 = 5050 (PA)

contador  =  1 ;
acumuladora  =  0 ;

while  ( contador  <=  100 )  {
  acumuladora  =  acumuladora  +  contador ;
  contador ++ ;
}

console . log ( acumuladora ) ;