// Explicação: Dividir para conquistar. Divide a lista em metades recursivamente e depois mescla as partes ordenadas.
// Propósito: Ordenação estável e eficiente para grandes volumes de dados.
// Big O: Sempre O(n log n).
// Exemplos Reais: Ordenação de listas encadeadas, E-commerce (produtos), base do Timsort (Python/Java).

let array = [9,1,2,3,5,4]

let sortedArray = mergeSort(array)

console.log(sortedArray);


function mergeSort(arr) {
  // Base case: array com 0 ou 1 elemento já está ordenado
  if (arr.length <= 1) return arr;

  // Divide o array no meio
  const middle = Math.floor(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursão: ordena as duas metades
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Junta as duas metades ordenadas
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  // Enquanto tiver elementos nos dois lados
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Coloca o que sobrou
  return result.concat(left.slice(i)).concat(right.slice(j));
}


