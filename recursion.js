//Recursivo
function fact(n) {
  if (n === 1) return 1; // base case

  return n * fact(n - 1); //Quando você chama uma função dentro dela mesma, ela irá se repetir até chegar o base case ou crashar;
}
console.log(fact(5));

