// Explicação: Estima a posição do valor interpolando onde ele deve estar (como buscar palavra em dicionário).
// Propósito: Busca otimizada para dados ordenados e uniformemente distribuídos.
// Big O: Média O(log(log n)), Pior caso O(n).
// Exemplos Reais: Procurar nome em lista telefônica, busca em índices de dados numéricos uniformes.

// Usamos esse algoritmo para dados que crescen de maneira previsivel, como 1,2,3,4,5,6 ou exponencialmente como desse exemplo. Nesses casos, ele até supera o Binary Search
const array = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

let tentativas = 0;

function interpolationSearch(arr, valor) {
  let alto = arr.length - 1;
  let baixo = 0;

  while (valor >= arr[baixo] && valor <= arr[alto] && baixo <= alto) {
    let probe = Math.floor(
      baixo +
        ((alto - baixo) * (valor - arr[baixo])) / (arr[alto] - arr[baixo]),
    );
    tentativas++;

    if (arr[probe] === valor) {
      return probe;
    } else if (arr[probe] < valor) {
      baixo = probe + 1;
    } else {
      alto = probe - 1;
    }
  }
  return -1;
}

let index = interpolationSearch(array, 256);
let palavra = tentativas === 1 ? "tentativa" : "tentativas";

if (index !== -1) {
  console.log(
    `Numero encontrado no index: ${index} com ${tentativas} ${palavra}`,
  );
} else {
  console.log("Numero não encontrado");
}
