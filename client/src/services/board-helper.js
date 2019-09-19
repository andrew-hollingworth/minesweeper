const bombCord = (numBombs, height, width) => {
  const cord = [];
  for (let i = 0; i < numBombs; i++) {
    while (cord.length === i) {
      const x = Math.floor(Math.random() * (height - 1));
      const y = Math.floor(Math.random() * (width - 1));
      if (!(cord.filter((maybeBomb) => {
        return (maybeBomb[0] === x && maybeBomb[1] === y)
      }).length)) {
        cord.push([x, y]);
      }
    }
  }
  return cord
};

const isCoordinateInGrid = (x, y, h, w) => {
  return (x >= 0 && y >= 0 && x < w && y < h)
}

export const areaArnd = (x, y, h, w) => {
  const chkAdj = [];
  for (let j = -1; j <= 1; j += 1) {
    for (let i = -1; i <= 1; i += 1) {
      chkAdj.push([(x + i), (y + j)])
    }
  }
  return chkAdj.filter( (coord) => {
    return isCoordinateInGrid(coord[0], coord[1], h, w)
  })
}


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
    const neighbors = areaArnd(coord[0], coord[1], height, width);
    neighbors.forEach((neighbor) => {
      const currentNeighbor = board.find((item) => {
        return item.x === neighbor[0] && item.y === neighbor[1]
      })
      if (!currentNeighbor.isBomb) {
        currentNeighbor.neighborBombs += 1;
      }
      }
    )
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
        isFlag: false,
        x, y,
        index: (y * height) + x
      })
    }
  }

  let bombs = bombCord(numBombs, height, width)
  const boardWithBombs = placeBombs(board, bombs, height, width);
  let neighborBoard = incrementNeighbors(boardWithBombs, bombs, height, width)
  return neighborBoard
}
