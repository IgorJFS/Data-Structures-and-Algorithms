// Explicação: Compara pares adjacentes e os troca se estiverem na ordem errada, "flutuando" o maior valor para o topo.
// Propósito: Ordenação simples e educacional.
// Big O: Melhor caso O(n), Pior caso O(n^2).
// Exemplos Reais: Raramente usado em produção devido à ineficiência; bom para ensinar conceitos básicos de ordenação.

const array = [9,1,2,3,5,4,7,6,8,10,22,12]

bubbleSort(array)

console.log(array);

bubbleSortReverse(array)

console.log(array);



function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) { // Esse são os rounds de cada index do array

    for (let j = 0; j < arr.length - i - 1; j++) { // Esse são dentro de cada round, o - i serve para não precisar verificar o ultimo numero
      if (arr[j] > arr[j+1]) { 
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp
      } 
    }
  }
}

function bubbleSortReverse(arr) {
  for (let i = 0; i < arr.length - 1; i++) { // Esse são os rounds de cada index do array

    for (let j = 0; j < arr.length - i - 1; j++) { // Esse são dentro de cada round, o - i serve para não precisar verificar o ultimo numero
      if (arr[j] < arr[j+1]) { 
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp
      } 
    }
  }
}