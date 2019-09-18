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

const areaArnd = (xcord, ycord, height, width) => {
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

const placeBombs = (board, bombs) => {
  bombs.forEach((bomb) => {
    const currentBomb = board.find((item) => {
      return item.x === bomb[0] && item.y === bomb[1]
    })
    currentBomb.isBomb = true;
  })
  return board
}

// for each of the bombs, get neighbors.
// for each of those neighbors, increment that neighbors "neighborBombs" by one.

const incrementNeighbors = (board, bombs, height, width) => {
  bombs.forEach((coord) => {
    const neighbors = areaArnd(coord[0], coord[1]);
    neighbors.forEach((neighbor) => {
      if ((neighbor[0] >= 0 && neighbor[0] <= (width - 1)) && (neighbor[1] >= 0 && neighbor[1] <= (height - 1))) {
        const currentNeighbor = board.find((item) => {
          return item.x === neighbor[0] && item.y === neighbor[1]
        })
      currentNeighbor.neighborBombs += 1;
      }
    })
  })
  return board
}

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
  const boardWithBombs = placeBombs(board, bombs);
  let neighborBoard = incrementNeighbors(boardWithBombs, bombs, height, width)
  return neighborBoard
}
