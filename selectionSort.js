// Explicação: Seleciona repetidamente o menor elemento da parte não ordenada e o move para o início.
// Propósito: Ordenação simples, útil quando a escrita na memória é custosa (faz poucas trocas).
// Big O: Melhor/Pior caso O(n^2).
// Exemplos Reais: Ordenar arquivos pequenos com escritas limitadas (memória flash antiga).

const array = [9,1,2,3,5,4,7,6,8,10,22,12]

selectionSort(array) 

console.log(array); // 1,2,3,4,5,6,7,8,9,10,12,22

selectionSortReverse(array)

console.log(array); // 22,12,10,9,8,7,6,5,4,3,2,1

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    let temp = arr[i];
    arr[i] = arr[min]
    arr[min] = temp
  }
}

function selectionSortReverse(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] < arr[j]) {
        min = j
      }
    }
    let temp = arr[i];
    arr[i] = arr[min]
    arr[min] = temp
  }
}