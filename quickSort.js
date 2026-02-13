// Explicação: Escolhe um "pivô" e particiona o array: menores à esquerda, maiores à direita. Repete recursivamente.
// Propósito: Rápido e eficiente na prática, gasta pouca memória extra.
// Big O: Melhor/Médio O(n log n), Pior caso O(n^2).
// Exemplos Reais: Principal algoritmo de ordenação em linguagens como C++ (std::sort), V8 (Chrome).

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
