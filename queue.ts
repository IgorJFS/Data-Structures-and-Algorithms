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
  

