const n = 4;

// cria matriz n x n preenchida com 0
const adjMatrix = Array.from({ length: n }, () =>
  Array(n).fill(0)
);

// adiciona aresta (u -> v)
function addEdge(u, v) {
  adjMatrix[u][v] = 1;
  adjMatrix[v][u] = 1; // se for grafo não-direcionado
}

addEdge(0, 1);
addEdge(0, 2);
addEdge(2, 3);

adjMatrix.forEach(row => { //Isso aqui é apenas para o terminal fazer a matriz ficar verticalmente ajustada, posso usar o console.table(adjMatrix) também
  console.log(row.join(" "));
});

console.table(adjMatrix)

