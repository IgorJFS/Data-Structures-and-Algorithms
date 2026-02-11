const array = [9,1,2,3,5,4,7,6,8,10,22,12]


function procurarNumero(n:any):any { 
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      console.log(`Numero ${n} encontrado no Index: ${i}`);
      return;
    }
  }
  console.log("Elemento não encontrado");
}
procurarNumero(1)
procurarNumero(100)