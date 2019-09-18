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

const areaArnd = (xcord, ycord) => {
  const cord1 = [(xcord - 1), (ycord - 1)];
  const cord2 = [(xcord - 1), (ycord - 0)];
  const cord3 = [(xcord - 1), (ycord + 1)];
  const cord4 = [(xcord - 0), (ycord + 1)];
  const cord5 = [(xcord + 1), (ycord + 1)];
  const cord6 = [(xcord + 1), (ycord - 0)];
  const cord7 = [(xcord + 1), (ycord - 1)];
  const cord8 = [(xcord - 0), (ycord - 1)];
  const chkAdj = [cord1, cord2, cord3, cord4, cord5, cord6, cord7, cord8];
  return chkAdj
};

// board.forEach((boardSpot) => {
//   const neighbors = areaArnd(boardSpot.x, boardSpot.y)
//   neighbors.forEach((neighbor) => {
//     if (neighbor[0] === board.x && neighbor[1] === board.y && board.isBomb === true) {
//       boardSpot.neighborBombs += 1
//     }
//   })
// })

export const genBoard = (numBombs, height, width) => {
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
