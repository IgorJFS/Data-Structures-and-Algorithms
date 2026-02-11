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