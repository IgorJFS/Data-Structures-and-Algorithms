const adjList = {
  A: ["B", "C"],
  B: ["A"],
  C: ["A", "D"],
  D: ["C"]
};

function bfs(start) {
  const visited = new Set();
  const queue = [start]; // fila inicial com o vértice de partida
  
  

  while (queue.length > 0) {
    const vertex = queue.shift(); // remove o primeiro da fila
    
    
    if (!visited.has(vertex)) {
      console.log(vertex); // visitar o vértice
      visited.add(vertex);

      // adiciona vizinhos não visitados na fila
      for (const neighbor of adjList[vertex]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
}

// executar
bfs("D");
