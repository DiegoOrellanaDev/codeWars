// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

const rps = (p1, p2) => {
    let rules = {
      rock: 'scissors', 
      paper: 'rock',
      scissors: 'paper'
    }
    if(p1 === p2) return "Draw!"
    return rules[p1] === p2 ? "Player 1 won!" : "Player 2 won!"
  };