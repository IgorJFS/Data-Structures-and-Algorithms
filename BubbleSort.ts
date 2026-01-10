function bubbleSort(arr: number[]): number[] {
  const n = arr.length;

  // Percorre todos os elementos do array
  for (let i = 0; i < n - 1; i++) {
    // Últimos i elementos já estão no lugar, então não precisa ir até o final
    for (let j = 0; j < n - 1 - i; j++) {
      // Compara elementos adjacentes
      if (arr[j] > arr[j + 1]) {
        // Troca se estiver fora de ordem
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Testando
export const numeros = [5, 3, 8, 4, 2];
console.log("Antes:", numeros);
console.log("Depois:", bubbleSort([...numeros])); // Usando spread para não modificar o original

//BUBBLESORT OTIMIZADO

function bubbleSortOptimizado(arr: number[]): number[] {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let trocou = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        trocou = true;
      }
    }

    if (!trocou) break; // Já está ordenado
  }

  return arr;
}
