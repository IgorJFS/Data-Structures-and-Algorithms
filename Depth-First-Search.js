// grafo exemplo
const adjList = {
  A: ["B", "C"],
  B: ["A"],
  C: ["A", "D"],
  D: ["C"]
};

// função DFS recursiva
function dfs(start, visited = new Set()) { 
  console.log(start);      // visitar o vértice
  visited.add(start);      // marcar como visitado

  for (const neighbor of adjList[start]) {
    if (!visited.has(neighbor)) {
      dfs(neighbor, visited); // chamar DFS para cada vizinho não visitado
    }
  }
}

// executar
dfs("C"); //como o visited tem "=" não precisa passar um segundo parâmetro 
