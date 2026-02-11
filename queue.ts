// Explicação: Estrutura FIFO (First-In, First-Out). O primeiro a entrar é o primeiro a sair.
// Propósito: Gerenciar itens na ordem de chegada.
// Big O: Enqueue O(1), Dequeue O(n) (usando shift em array).
// Exemplos Reais: Fila de impressão, gerenciamento de tarefas em segundo plano, fila de pedidos.

let games = ["The Legend of Zelda", "Super Mario Bros", "Minecraft", "Fortnite", "Overwatch"];

while (games.length > 0) {
  for (let g = 0; games.length < 0; g++)
  console.log(games[g]);
  console.log(games);
  games.shift()
  if (games.length <= 0) {
    console.log("No games anymore");    
    break;
  }
}
  

