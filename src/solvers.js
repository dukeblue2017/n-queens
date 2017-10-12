/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


window.findNRooksSolution = function(n) {
  var board = new Board({n: n});
  var row = 0;
  var column = 0;
  var numOfPieces = 0;

  var advance = function() {
    if (column < n - 1) {
      column++;
    } else {
      // if (row === n - 1 && column === n - 1) {
      //   throw new Error('cannot go any further');
      // }
      row++;
      column = 0;
    }
  };

  while (numOfPieces < n) {
    board.togglePiece(row, column);
    if (board.hasAnyRooksConflicts()) {
      board.togglePiece(row, column);
    } else {
      numOfPieces++;
    }
    if (row < n - 1 || column < n - 1) {
      advance();
    }
  }
  var solution = board.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  // increment solutioncount if:
  //

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  if ( n === 2 || n === 3 ) {
    return board.rows();
  }
  var rowStart = 0;
  var columnStart = 0;
  var recurse = function(rowNum, aBoard) {
    if (rowNum === n) {
      return aBoard.rows();
    }
    for (var colNum = 0; colNum <= n - 1; colNum++) {

      aBoard.togglePiece(rowNum, colNum);

      if (!aBoard.hasAnyQueensConflicts()) {
        var sol = recurse(rowNum + 1, aBoard);
        if (sol) {
          return sol;
        }

      } aBoard.togglePiece(rowNum, colNum);
    }
  };
  var solution = recurse(0, board);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
