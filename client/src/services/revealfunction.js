// reveal a square and igt will act according to the values, ie bomb, neighbombs

const reveal = () => {
  if (isReaveled === false) {
    if (isBomb === true) {
      console.log('you have lost')
    } else if(isBomb === false) {
      console.log(neighborBombs)
    }
  }
}


const gameOver = () => {
  if (props.board.isBomb) {
      console.log('game over');
      this.timerClick();
      
  }
}
