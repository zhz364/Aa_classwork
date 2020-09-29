/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MoveError = __webpack_require__(/*! ./moveError */ \"./src/moveError.js\");\n\nclass Board {\n  constructor() {\n    this.grid = Board.makeGrid();\n  }\n\n  isEmptyPos(pos) {\n    if (!Board.isValidPos(pos)) {\n      throw new MoveError('Is not valid position!');\n    }\n\n    return (this.grid[pos[0]][pos[1]] === null);\n  }\n\n  isOver() {\n    if (this.winner() != null) {\n      return true;\n    }\n\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\n        if (this.isEmptyPos([rowIdx, colIdx])) {\n          return false;\n        }\n      }\n    }\n\n    return true;\n  }\n\n  placeMark(pos, mark) {\n    if (!this.isEmptyPos(pos)) {\n      throw new MoveError('Is not an empty position!');\n    }\n\n    this.grid[pos[0]][pos[1]] = mark;\n  }\n\n  print() {\n    const strs = [];\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\n      const marks = [];\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\n        marks.push(\n          this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : \" \"\n        );\n      }\n      strs.push(`${marks.join('|')}\\n`);\n    }\n\n    console.log(strs.join('-----\\n'));\n  }\n\n  winner() {\n    const posSeqs = [\n      // horizontals\n      [[0, 0], [0, 1], [0, 2]],\n      [[1, 0], [1, 1], [1, 2]],\n      [[2, 0], [2, 1], [2, 2]],\n      // verticals\n      [[0, 0], [1, 0], [2, 0]],\n      [[0, 1], [1, 1], [2, 1]],\n      [[0, 2], [1, 2], [2, 2]],\n      // diagonals\n      [[0, 0], [1, 1], [2, 2]],\n      [[2, 0], [1, 1], [0, 2]]\n    ];\n\n    for (let i = 0; i < posSeqs.length; i++) {\n      const winner = this.winnerHelper(posSeqs[i]);\n      if (winner != null) {\n        return winner;\n      }\n    }\n\n    return null;\n  }\n\n  winnerHelper(posSeq) {\n    for (let markIdx = 0; markIdx < Board.marks.length; markIdx++) {\n      const targetMark = Board.marks[markIdx];\n      let winner = true;\n      for (let posIdx = 0; posIdx < 3; posIdx++) {\n        const pos = posSeq[posIdx];\n        const mark = this.grid[pos[0]][pos[1]];\n\n        if (mark != targetMark) {\n          winner = false;\n        }\n      }\n\n      if (winner) {\n        return targetMark;\n      }\n    }\n\n    return null;\n  }\n\n  static isValidPos(pos) {\n    return (0 <= pos[0]) &&\n    (pos[0] < 3) &&\n    (0 <= pos[1]) &&\n    (pos[1] < 3);\n  }\n\n  static makeGrid() {\n    const grid = [];\n\n    for (let i = 0; i < 3; i++) {\n      grid.push([]);\n      for (let j = 0; j < 3; j++) {\n        grid[i].push(null);\n      }\n    }\n\n    return grid;\n  }\n}\n\nBoard.marks = ['x', 'o'];\n\nmodule.exports = Board;\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\nconst MoveError = __webpack_require__(/*! ./moveError */ \"./src/moveError.js\");\n\nclass Game {\n  constructor() {\n    this.board = new Board();\n    this.currentPlayer = Board.marks[0];\n  }\n\n  isOver() {\n    return this.board.isOver();\n  }\n\n  playMove(pos) {\n    this.board.placeMark(pos, this.currentPlayer);\n    this.swapTurn();\n  }\n\n  promptMove(reader, callback) {\n    const game = this;\n\n    this.board.print();\n    console.log(`Current Turn: ${this.currentPlayer}`);\n\n    reader.question('Enter rowIdx: ', rowIdxStr => {\n      const rowIdx = parseInt(rowIdxStr);\n      reader.question('Enter colIdx: ', colIdxStr => {\n        const colIdx = parseInt(colIdxStr);\n        callback([rowIdx, colIdx]);\n      });\n    });\n  }\n\n  run(reader, gameCompletionCallback) {\n    this.promptMove(reader, move => {\n      try {\n        this.playMove(move);\n      } catch (e) {\n        if (e instanceof MoveError) {\n          console.log(e.msg);\n        } else {\n          throw e;\n        }\n      }\n\n      if (this.isOver()) {\n        this.board.print();\n        if (this.winner()) {\n          console.log(`${this.winner()} has won!`);\n        } else {\n          console.log('NO ONE WINS!');\n        }\n        gameCompletionCallback();\n      } else {\n        // continue loop\n        this.run(reader, gameCompletionCallback);\n      }\n    });\n  }\n\n  swapTurn() {\n    if (this.currentPlayer === Board.marks[0]) {\n      this.currentPlayer = Board.marks[1];\n    } else {\n      this.currentPlayer = Board.marks[0];\n    }\n  }\n\n  winner() {\n    return this.board.winner();\n  }\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const View = __webpack_require__(/*! ./ttt-view.js */ \"./src/ttt-view.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n  $(() => {\n    // Without any let/const/var, the variable will be global.\n    // The variables must be global in order to be accessed within the browser console.\n    game = new Game();\n    view = new View(game,$(\".ttt\"));\n  });\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moveError.js":
/*!**************************!*\
  !*** ./src/moveError.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst MoveError = function (msg) { this.msg = msg; };\n\n// MoveError really should be a child class of the built in Error object provided\n// by Javascript, but since we haven't covered inheritance yet, we'll just\n// let it be a vanilla Object for now!\n\nmodule.exports = MoveError;\n\n\n//# sourceURL=webpack:///./src/moveError.js?");

/***/ }),

/***/ "./src/ttt-view.js":
/*!*************************!*\
  !*** ./src/ttt-view.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class View {\n  constructor(game, $el) {\n    this.game = game;\n    this.$el = $el;\n    this.setupBoard();\n    this.bindEvents();\n  }\n\n  bindEvents() {\n    let that = this;\n\n    this.$el.on(\"click\", function (event) {\n      // event.preventDefault();\n      //event.target.data()\n\n      // returns an object hash = { pos: [0,2] }\n      //let pos = $(event.target).data();\n\n      // returns an pos array = [0,2] \n      //let pos = $(event.target).data()[\"pos\"];\n\n      // this is pointing to the HTML element $el\n      // console.log(this);\n      // console.log(this.game);\n      //console.log(pos);\n\n      that.makeMove($(event.target));\n    });\n    \n  }\n\n  makeMove($square) {\n    // Add/remove CSS classes to\n    // change the cell background to white and \n    // display the 'X's and 'O's in different colors.\n    $square.data( { currMark: this.game.currentPlayer} );\n    \n    // $square.data([\"currMark\"]).css(\"background-color\", \"white\");\n    \n    if ($square.data()[\"currMark\"]){\n      // disable hover effect\n      $square.off(\"mouseenter mouseleave\");\n      $square.css(\"background-color\", \"white\");\n    }\n\n    let pos = $square.data()[\"pos\"];\n    \n    try {\n      this.game.playMove(pos);\n      // if an error occurs on the playMove(),\n      // then the following text change will not run\n      $square.text(this.game.currentPlayer);\n    } catch (error) {\n      // console.log(error);\n      alert(error.msg);\n    }\n\n    $square.css(\"font-size\",\"70px\");\n    $square.css(\"text-align\",\"center\");\n\n    if (this.game.isOver()){\n      if (this.game.winner()){\n        alert(`Winner is ${this.game.currentPlayer}`);\n      } else{\n        alert(\"Draw game\");\n      }\n    }\n\n  }\n\n  setupBoard() {\n    let $ul = $(\"<ul></ul>\");\n    $ul.css(\"display\",\"flex\");\n    $ul.css(\"border-size\", \"2px\");\n    $ul.css(\"border-style\", \"solid\");\n    $ul.css(\"width\", \"300px\");\n    $ul.css(\"flex-wrap\",\"wrap\");\n\n    $ul.css(\"list-style-type\", \"none\");\n    //$ul.css(\"list-style\", \"none\");\n\n    $ul.css(\"padding\", \"0px\")\n\n    for(let i = 0; i<3; i++){\n      for(let j = 0; j<3; j++){\n        let $li = $(\"<li></li>\");\n\n        // Stores the position data for the list element\n        $li.data( { pos: [ i,j ] } );\n        \n        // The following is an example to extract the stored data.\n        //$( \"span\" ).first().text( $( \"div\" ).data( \"test\" ).first );\n        \n        $li.css(\"flex-wrap\",\"wrap\");\n        $li.css(\"background-color\", \"gray\");\n        $li.css(\"border-size\", \"2px\");\n        $li.css(\"border-style\", \"solid\");\n        $li.css(\"width\", \"94px\");\n        $li.css(\"height\", \"94px\");\n\n        $ul.append($li);\n        $li.hover(function(){\n          $(this).css(\"background-color\", \"yellow\");\n        },function(){\n          $(this).css(\"background-color\", \"gray\");\n        }\n        )\n      }\n    }\n\n    this.$el.append($ul);\n  }\n}\n\n// .hover( handlerIn )\n\n// $(\"p\").hover(function(){\n//   $(this).css(\"background-color\", \"yellow\");\n//   }, function(){\n//   $(this).css(\"background-color\", \"pink\");\n// });\n\n\nmodule.exports = View;\n\n\n//# sourceURL=webpack:///./src/ttt-view.js?");

/***/ })

/******/ });