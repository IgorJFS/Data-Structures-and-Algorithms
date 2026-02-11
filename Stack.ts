// Explicação: Estrutura LIFO (Last-In, First-Out). O último a entrar é o primeiro a sair.
// Propósito: Armazenar histórico temporário para reverter ações.
// Big O: Push O(1), Pop O(1).
// Exemplos Reais: Recurso "Desfazer" (Undo), histórico de navegador, recursão.

let jogos = ["The Legend of Zelda", "Super Mario Bros", "Minecraft", "Fortnite", "Overwatch"];

console.log(jogos);


jogos.push("FFXIV")


console.log(jogos);

jogos.pop()

console.log(jogos);


