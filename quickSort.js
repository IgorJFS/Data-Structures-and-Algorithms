let array = [9,1,2,3,5,4,6,8,7]


quickSort(array, 0, array.length - 1);
console.log(array);



function quickSort(arr, comeco, fim) {
  if (fim <= comeco) return; //Base case
    let pivot = partition(arr, comeco, fim);
    quickSort(arr, comeco, pivot - 1);
    quickSort(arr, pivot + 1, fim)
}

function partition(arr, comeco, fim) {
  let pivot = arr[fim];
  let i = comeco - 1;
  for (let j = comeco; j < fim; j++) {
    if (arr[j] < pivot) {
      i++
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  i++;
  let temp = arr[i];
  arr[i] = arr[fim];
  arr[fim] = temp;
  return i;
}
