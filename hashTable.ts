let map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

for (let [key, value] of map) {
  console.log(key, value);
}


let word = "banana";
let freq = new Map();

for (let char of word) {
  if (freq.has(char)) {
    freq.set(char, freq.get(char) + 1);
  } else {
    freq.set(char, 1);
  }
}

console.log(freq);
