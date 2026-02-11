const arrSorteado = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29];


function procurarNumeroBinary(target:number):void { 

  let tentativas = 0
  
  let baixo = 0;
  let alto = arrSorteado.length - 1

  while(baixo <= alto){
    tentativas++
    let meio = Math.floor((alto + baixo) / 2)
    let valor = arrSorteado[meio];

    if (valor === target) {
      console.log(valor);
      console.log("Tentativas:", tentativas);
      return;
    } else if (valor < target){
      baixo = meio + 1;
    }
    else {
      alto = meio - 1;
    }
  }
  console.log("Não tem o número");
  console.log("Tentativas:", tentativas);
}

procurarNumeroBinary(2) //Não tem o numero
procurarNumeroBinary(23) // 3
