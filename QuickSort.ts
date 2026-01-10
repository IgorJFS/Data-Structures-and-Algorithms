function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const menores = arr.filter((n) => n < pivot);
  const iguais = arr.filter((n) => n === pivot);
  const maiores = arr.filter((n) => n > pivot);

  return [...quickSort(menores), ...iguais, ...quickSort(maiores)];
}

// Testando
const numeros = [7, 2, 1, 9, 3, 6];
console.log("Antes:", numeros);
console.log("Depois:", quickSort(numeros));

// QUICKSORT OTIMIZADO
function quickSortInPlace(
  arr: number[],
  start = 0,
  end = arr.length - 1
): void {
  if (start >= end) return;

  const pivotIndex = partition(arr, start, end);
  quickSortInPlace(arr, start, pivotIndex - 1);
  quickSortInPlace(arr, pivotIndex + 1, end);
}

function partition(arr: number[], start: number, end: number): number {
  const pivot = arr[end];
  let i = start;

  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[end]] = [arr[end], arr[i]];
  return i;
}
