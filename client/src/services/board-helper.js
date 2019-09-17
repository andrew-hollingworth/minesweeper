const bombCord = (numBombs, height, width) => {
  let x = null;
  let y = null;
  const cord = [];
  for (let i = 0; i < numBombs; i++) {
    while (cord.length === i) {
      x = Math.floor(Math.random() * height);
      y = Math.floor(Math.random() * width);
      if (!cord.includes([x, y])) {
        cord.push([x, y]);
      }
    }
  }
  return cord
};

const genBoard = (numBombs, height, width) => {
  let board = [];
  for (let y = 0; y < height; y += 1){
    for(let x = 0; x < width; x += 1){
      board.push({
        isBomb: false,
        isRevealed: false,
        neighborBombs: 0,
        x, y
      })
    }
  }
  let bombs = bombCord(numBombs, height, width)
  bombs.forEach((coord) => {
    board.forEach((board) => {
      if (coord[0] === board.x && coord[1] === board.y) {
        board.isBomb = true;
      }
    })
  })
  return board
}

console.log(genBoard(2, 3, 3));
