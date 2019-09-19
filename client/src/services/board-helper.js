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

const isCoordinateInGrid = (x, y, h, w) => {
  return (x >= 0 && y >= 0 && x < w && y < h)
}

const areaArnd = (x, y, h, w) => {
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
  debugger;
  bombs.forEach((coord) => {
    const neighbors = areaArnd(coord[0], coord[1], height, width);
    debugger;
    neighbors.forEach((neighbor) => {
      const currentNeighbor = board.find((item) => {
        return item.x === neighbor[0] && item.y === neighbor[1]
      })
      console.log('bomb:', coord);
      console.log("neighbor:", currentNeighbor);
      currentNeighbor.neighborBombs += 1;
      }
    )
    debugger;
  })

  return board
}


export const genBoard = (numBombs, height, width) => {
  let board = [];
  for (let y = 0; y < height; y += 1){
    for(let x = 0; x < width; x += 1){
      board.push({
        isBomb: false,
        isRevealed: true,
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
