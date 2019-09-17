const randCord = (numBombs, height, width) => {
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
  console.log(cord);
};

randCord(10, 9, 9);
