// Explicação: Uma função que chama a si mesma para resolver instâncias menores do problema.
// Propósito: Simplificar problemas complexos que podem ser divididos em subproblemas idênticos.
// Big O: Depende do problema (Fatorial é O(n)).
// Exemplos Reais: Percorrer árvores de diretórios, cálculo de fatorial, sequência de Fibonacci, algoritmos de grafos (DFS).

//Recursivo
function fact(n) {
  if (n === 1) return 1; // base case

  return n * fact(n - 1); //Quando você chama uma função dentro dela mesma, ela irá se repetir até chegar o base case ou crashar;
}
console.log(fact(5));

