let coinFlip = Math.random();
let choice = prompt('Heads or Tails?').toLowerCase();

if (coinFlip >= 0 && coinFlip < 0.5) {
  coinFlip = "heads";
   if (choice === coinFlip) {
      document.write("<p>The flip was heads and you chose heads...you win!!</p>")
    } else {
      document.write("<p>The flip was heads but you chose tails...you lose!!</p>")
}
} else if (coinFlip >= 0.5 && coinFlip < 1) {
  coinFlip = "tails"
}   if (choice === coinFlip) {
      document.write("<p>The flip was tails and you chose tails...you win!</p>")
    } else {
      document.write("<p>The flip was tails but you chose heads...you lose!</p>")
} 
