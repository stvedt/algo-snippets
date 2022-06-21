class Robot {
  constructor(board = { x: 10, y: 10 }, startPosition = { x: 0, y: 0 }) {
    this.position = startPosition;
    this.board = board;
  }

  onboard(newPos, xy) {
    if (newPos >= 0 && newPos <= this.board[xy]) this.position[xy] = newPos;
  }

  moveLeft() {
    const newPosition = this.position.x - 1;

    this.onboard(newPosition, "x");
  }

  moveRight() {
    const newPosition = this.position.x + 1;
    this.onboard(newPosition, "x");
  }

  moveUp() {
    this.position.y--;
  }

  moveDown() {
    this.position.y++;
  }

  getLocation() {
    return this.position;
  }
}

const RoboCop = new Robot();

RoboCop.moveRight();
RoboCop.moveRight();
RoboCop.moveRight();
RoboCop.moveRight();
RoboCop.moveRight();
RoboCop.moveRight();
RoboCop.moveRight();
RoboCop.moveRight();
RoboCop.moveRight();
RoboCop.moveRight();
RoboCop.moveRight();
RoboCop.moveRight();
console.log(RoboCop.getLocation());
