const n = 4; // número de vértices

// cria um array de n posições, cada uma contendo uma lista vazia
const adjList = Array.from({ length: n }, () => []);
function addEdge(u, v) {
  adjList[u].push(v); // adiciona v na lista de u
  adjList[v].push(u); // adiciona u na lista de v
}

// adicionando algumas arestas
addEdge(0, 1);
addEdge(0, 2);
addEdge(2, 3);

// imprimindo a lista
adjList.forEach((neighbors, vertex) => {
  console.log(`${vertex} -> ${neighbors.join(", ")}`);
});

