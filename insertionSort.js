const array = [9,1,2,3,5,4,7,6,8,10,22,12]

insertionSort(array) 

console.log(array); // 1,2,3,4,5,6,7,8,9,10,12,22

insertionSortRerverse(array)

console.log(array); // 22,12,10,9,8,7,6,5,4,3,2,1

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) { //Index tem que começar por 1, por que ele sempre vai analisar o da esquerda
    let temp = arr[i];
    let j = i - 1 // esse é o que verifica o numero da esquerda

    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }
}

function insertionSortRerverse(arr) {
  for (let i = 1; i < arr.length; i++) { //Index tem que começar por 1, por que ele sempre vai analisar o da esquerda
    let temp = arr[i];
    let j = i - 1 // esse é o que verifica o numero da esquerda

    while (j >= 0 && arr[j] < temp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }
}
