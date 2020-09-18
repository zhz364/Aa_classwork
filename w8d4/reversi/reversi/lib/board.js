let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let grid = [];
  for (let i = 0; i < 8; i++) {
    grid.push(new Array(8));
  }

  grid[3][4] = new Piece('black');
  grid[3][3] = new Piece('white');
  grid[4][4] = new Piece('white');
  grid[4][3] = new Piece('black');
  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  if (pos[0] < 8 && pos[0] > -1 && pos[1] < 8 && pos[1] > -1){
    return true;
  } else {
    return false;
  }
  // return this[pos[0]][pos[1]] === undefined ? false : true
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (this.isValidPos(pos)){
    return this.grid[pos[0]][pos[1]]
  }else{
    // debugger
    throw new Error("Not valid pos!");
  }
};
// const error = new Error(message);

// error.code = "THIS_IS_A_CUSTOM_ERROR_CODE";
// return error;
/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  if (this.isOccupied(pos)) {
    return this.getPiece(pos).color === color;
  }
  return false
  // return this.getPiece(pos) && this.getPiece(pos).color === color;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  if(this.getPiece(pos)) {
    return true
  } else {
    return false
  }
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip = []){
  
  let newPos = [pos[0] + dir[0], pos[1] + dir[1]];
  
  if(this.isValidPos(newPos) === false){
    return [];
  } else if(this.isOccupied(newPos) === false) {
    return [];
  } else if(this.isMine(newPos, color)){
    return piecesToFlip;
  } else {
    piecesToFlip.push(newPos);
    return this._positionsToFlip(newPos, color, dir, piecesToFlip);
  }
};


/**
 * Checks that a position is not already occupied and that the color

 */
Board.prototype.validMove = function (pos, color) {
  if (this.isOccupied(pos)) {
  return false;
  }

  let pieceFlipped = false;

  for(let i = 0; i < Board.DIRS.length; i++) {
    if (this._positionsToFlip(pos, color, Board.DIRS[i]).length > 0) {
      pieceFlipped = true;
      break;
    }
  }

  return pieceFlipped;
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *npx mocha -g "< STRING_USED_IN_SPEC >"

 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  // this.validMove(pos, color)
  
  
  this.grid[pos[0]][pos[1]] = new Piece(color)
  let positions = [pos];

  
  
  for (let i = 0; i < Board.DIRS.length; i++) {
  
    let arr = this._positionsToFlip(pos, color, Board.DIRS[i]);
    // positions = postions.concat(arr);
    positions += arr
  }
  for (let i = 0; i < positions.length; i++) {
    this.getPiece(positions[i]).flip();
  }
  // debugger
  // positions.forEach((newPos) => {
  //   let piece = this.getPiece(newPos);
  //   piece.flip();
  // })
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};



module.exports = Board;
