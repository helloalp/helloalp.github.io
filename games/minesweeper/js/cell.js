get your sweep on
☟☟☟
Play Here
Minesweeper
Minesweeper... yep, that old classic game you remember playing on good ol' Windows '95 back in the day (in fact it was implemented in Microsoft's software updates until Windows 8).

Minesweeper has its origins in the earliest mainframe games of the 1960s and 1970s. The earliest ancestor of Minesweeper was Jerimac Ratliff's Cube. The basic gameplay style became a popular segment of the puzzle game genre during the 1980s.

Brush up on your Minesweeper history [here].(https://en.wikipedia.org/wiki/Minesweeper_(video_game))

Do you know what an actual Minesweeper is? I didn't either until I read [this].(https://en.wikipedia.org/wiki/Minesweeper)

I remember my first experience with computers in the 90's involved playing this game a lot, so I thought what better game than this to come full circle?

anyways, here are the basic rules:
basic gameplay
Select your difficulty level.
Easy = 9x9, 10 mines
Medium = 16x16, 40 mines
Hard = 30x30, 160 mines
Click anywhere on the board to begin and start the timer. *The numbers depict how many mines are adjacent to any given cell.
Use "Shift + Click" to add flags to a cell if you think it's a mine.
winning/losing
If you hit a mine... game over, homie.
Win by uncovering all the cells without mines!
(get it... MINE... SWEEPER...?)

My Version
UI Screenshot

design choices
I decided to roll with the OG Windows '95 look. I am a firm believer in the "Imitate. Assimilate. Innovate." model of learning, so figured for my first project I needed to walk before I could run and start with the imitation phase of the learning process.

I'm very glad I chose this path, because I learned A LOT by simply trying to match the styles from the original game.

With that said, I am definitely going to create a modernized version of this someday soon.

Technologies Used
The good old Three Amigos:

HTML
CSS
JavaScript
html
As you can see from the source code, the HTML is very concise, as most of the action happens in the JavaScript. Not to mention, the gameboard itself is just a simple table.

css
I had a lot of fun styling this to the old look of the Windows '95 desktop view. I still want to mess around with it a bit to get it perrrrfect (couldn't find the exact font used by MS).

My biggest challenge with the CSS was figuring out the table styles (borders, td sizes, etc.)

javascript
As this was my first time ever writing a functioning web app using JavaScript, it's not a big surprise that this section was by far the greatest challenge of the project for me.

Here are a couple highlights:

Dynamically sizing the table when clicking a difficulty level
I created a function (with the help of Jim, of course) which parses the number from the ID on the table which converts it into a ${size} variable which basically appends rows/cols based on the number it grabs. This concept blew my mind.
In turn, dynamically creating an array of arrays to match the visual table.
Creating a "Cell" class which I used to create individual "cell objects" which I assigned a ton of properties to: row#, col#, bomb t/f, # of adjacent bombs (another challenge in and of itself, btw), revealed t/f, and flagged t/f.
This approach made it a lot easier to write more concise code and not repeat myself over and over, as well as create methods on the class that would run for every cell object.
Creating a functional timer that displayed the seconds elapsed.
Randomizing bomb placement on the array.
Rendering everything in the DOM.
Assigning click handlers to different events.
Creating win/lose logic
Figuring out the control flow of how the functions are all chained together synchronously.
Learning about recursion and how to properly write a function that creates such an effect.
Getting Started
Well you probably are wanting to stop reading this about this thing and start playing it instead.

Jump in the time machine and enjoy playing my first game ever made from scratch, [Minesweeper].(https://nickarocho.github.io/minesweeper/)

Next Steps!
This project really was a lot of fun for me. I plan to continue to refine it and refer back to the many lessons learned for years to come.

Like I mentioned earlier, I would love to make a "display toggle" which flips the CSS to a modernized, clean, flat, minimalist UI.
There are some stupid little aesthetic bugs that are making me pull my hair out, like how the cell width/height gets tweaked by a few pixels when the board is totally revealed. I need to fix that.
I would also love to flesh out the Windows '95 thing more, making the Start button do something, add a clock to the bottom right corner, and some functional desktop icons.
A really difficult feature I would love to tackle would be to make a feature where the user could choose the difficulty by inputing numbers (row/col/mine numbers).
That'll be for a rainy day.

thank you for reading! i hope you enjoy the game :)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Minesweeper</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="shortcut icon" href="images/bomb.png" />
    <script
    src="https://code.jquery.com/jquery-3.2.1.min.js"
    integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
    crossorigin="anonymous"></script>
</head>
<body>   
    <div class="flex-container">
        <div class="game-board">
            <br>
        <table id="board"></table>
        </div>
    </div>
        <section id="footer">
            <div id="start"><img src="images/start.png"></div>
            <div id="size-btns">
                <div id="size-btns"><button id="size-9"><img src="images/easy.png"> Easy</button></div> 
                <div id="size-btns"><button id="size-16"><img src="images/medium.png"> Medium</button></div> 
                <div id="size-btns"><button id="size-30"><img src="images/hard.png"> Hard</button></div>
            </div>
            <div id="clock"><em>"Shift + Click"</em></strong> to toggle <img src="images/flag.png"></div>
        </section>
    <script src="js/cell.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
@font-face {
    font-family: "Digital Dismay";
    src: url("./digital-dismay.otf") format("truetype");
}

@font-face {
    font-family: "Press Start";
    src: url("./prstart.ttf");
}

@font-face {
    font-family: "MS Sans Serif";
    src: url("./micross.ttf");
}

* {
    -o-user-select: none;
    user-select: none;
}

body {
    background-color: #0D8584;
}

#board {
    background-color: lightgray;
}

button {
    font-family: 'MS Sans Serif';
    text-align: left;
    font-size: 14px;
    height: 30px;
    width: 100px;
    background-color: #BFBFBF;
    color: black;
    border-bottom: 2px solid #7B7B7B;
    border-left: 2px solid #ffffff;
    border-top: 2px solid #ffffff;
    border-right: 2px solid #7B7B7B;
}

button:hover {
    background-color: lightgray;
    color: slategray;
    cursor: pointer;
}

#clock {
    font-family: 'MS Sans Serif';
    font-size: 14px;
    display: inline;
    float: right;
    border-top: 1.5px solid #808080;
    border-left: 1.5px solid #808080;
    border-right: 1.5px solid #FAFAFA;
    border-bottom: 1.5px solid #FAFAFA;
    /* height: 28px; */
    width: 200px;
    height: 22px;
    margin: 2px;
    padding: 5px;
}

.flex-container {
    display: flex;
    justify-content: center;
    margin: 80px 10px;
}

#folder1 {
    display: inline;
    padding-right: 10px;
}

#folder2 {
    display: inline;
    padding-right: 10px;
}

#folder-bar {
    background-color: #D3CEC4;
    border: none;
    text-align: left;
    padding: 2px 8px;
}

#footer {
    text-align: center;
    position: fixed;
    height: 36px;
    background-color: #BFBFBF;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
}

.menu a {
    font-family: 'MS Sans Serif';
    color: black;
    text-decoration: none;
    font-size: 14px;
    letter-spacing: 0;
}

#reset {
    text-align: center;
    width: 35px;
    height: 35px;
    border-top: 2px solid #ffffff;
    border-right: 2px solid #7B7B7B;
    border-bottom: 2px solid #7B7B7B;
    border-left: 2px solid #ffffff;
}

.revealed {
    font-family: "Press Start";
    background-color: #C0C0C0;
    font-size: 80%;
    text-align: center;
    border: none;
}

#reset:hover {
    text-align: center;
    cursor: pointer;
}

.sidebar {
    vertical-align: top;
    max-width: 300px;
    margin: 0 30px;
}

#size-btns {
    float: left;
    display: inline;
    margin: 2px;
}

#start {
    float: left;
}

#status-bar  {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2px;
    margin: 6px;
    border-top: 2px solid #7B7B7B;
    border-right: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
    border-left: 2px solid #7B7B7B;
}

td {
    height: 20px;
    width: 20px;
    background-color: #C0C0C0;
    border: 1.5px solid;
    border-top-color: #ffffff;
    border-right-color: #7B7B7B;
    border-bottom-color: #7B7B7B;
    border-left-color: #ffffff;
    text-align: center;
    vertical-align: middle;
}

#timer, #bomb-counter {
    font-family: 'Digital Dismay';
    font-size: 35px;
    letter-spacing: 1px;
    color: red;
    background-color: black;
    text-align: center;
    padding: 4px 4px 0 7px;
    line-height: 1em;
}

#window-controls {
    float: right;
    cursor: pointer;
}

#window-title {
    font-family: 'MS Sans Serif';
    letter-spacing: .5px;
    float: left;
    color: #D5DEF3;
    font-size: 16px;
}

#window-title-bar {
    background: -moz-linear-gradient(left, rgba(33,41,89,1) 0%, rgba(33,41,89,1) 11%, rgba(80,114,161,1) 56%, rgba(117,172,219,0.7) 92%, rgba(125,185,232,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, rgba(33,41,89,1) 0%,rgba(33,41,89,1) 11%,rgba(80,114,161,1) 56%,rgba(117,172,219,0.7) 92%,rgba(125,185,232,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, rgba(33,41,89,1) 0%,rgba(33,41,89,1) 11%,rgba(80,114,161,1) 56%,rgba(117,172,219,0.7) 92%,rgba(125,185,232,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#212959', endColorstr='#007db9e8',GradientType=1 ); /* IE6-9 */
}
/*----- classes -----*/
class  Cell {
    constructor(row, col, board) {
        this.row = row;
        this.col = col;
        this.bomb = false;
        this.board = board;
        this.revealed = false;
        this.flagged = false;
    }

    getAdjCells() {
        var adj = [];
        var lastRow = board.length - 1;
        var lastCol = board[0].length - 1;
        if (this.row > 0 && this.col > 0) adj.push(board[this.row - 1][this.col - 1]);
        if (this.row > 0) adj.push(board[this.row - 1][this.col]);
        if (this.row > 0 && this.col < lastCol) adj.push(board[this.row - 1][this.col + 1]);
        if (this.col < lastCol) adj.push(board[this.row][this.col + 1]);
        if (this.row < lastRow && this.col < lastCol) adj.push(board[this.row + 1][this.col + 1]);
        if (this.row < lastRow) adj.push(board[this.row + 1][this.col]);
        if (this.row < lastRow && this.col > 0) adj.push(board[this.row + 1][this.col - 1]);
        if (this.col > 0) adj.push(board[this.row][this.col - 1]);       
        return adj;
    }

    calcAdjBombs() {
        var adjCells = this.getAdjCells();
        var adjBombs = adjCells.reduce(function(acc, cell) {
            return acc + (cell.bomb ? 1 : 0);
        }, 0);
        this.adjBombs = adjBombs;
    }

    flag() {
        if (!this.revealed) {
            this.flagged = !this.flagged;
            return this.flagged;
        }
    }

    reveal() {
        if (this.revealed && !hitBomb) return;
        this.revealed = true;
        if (this.bomb) return true;
        if (this.adjBombs === 0) {
            var adj = this.getAdjCells();
            adj.forEach(function(cell){
                if (!cell.revealed) cell.reveal();
            });
        }
        return false;
    }
}

/*----- constants -----*/
var bombImage = '<img src="images/bomb.png">';
var flagImage = '<img src="images/flag.png">';
var wrongBombImage = '<img src="images/wrong-bomb.png">'
var sizeLookup = {
  '9': {totalBombs: 10, tableWidth: '245px'},
  '16': {totalBombs: 40, tableWidth: '420px'},
  '30': {totalBombs: 160, tableWidth: '794px'}
};
var colors = [
  '',
  '#0000FA',
  '#4B802D',
  '#DB1300',
  '#202081',
  '#690400',
  '#457A7A',
  '#1B1B1B',
  '#7A7A7A',
];

/*----- app's state (variables) -----*/
var size = 16;
var board;
var bombCount;
var timeElapsed;
var adjBombs;
var hitBomb;
var elapsedTime;
var timerId;
var winner;

/*----- cached element references -----*/
var boardEl = document.getElementById('board');

/*----- event listeners -----*/
document.getElementById('size-btns').addEventListener('click', function(e) {
  size = parseInt(e.target.id.replace('size-', ''));
  init();
  render();
});

boardEl.addEventListener('click', function(e) {
  if (winner || hitBomb) return;
  var clickedEl;
  clickedEl = e.target.tagName.toLowerCase() === 'img' ? e.target.parentElement : e.target;
  if (clickedEl.classList.contains('game-cell')) {
    if (!timerId) setTimer();
    var row = parseInt(clickedEl.dataset.row);
    var col = parseInt(clickedEl.dataset.col);
    var cell = board[row][col];
    if (e.shiftKey && !cell.revealed && bombCount > 0) {
      bombCount += cell.flag() ? -1 : 1;
    } else {
      hitBomb = cell.reveal();
      if (hitBomb) {
        revealAll();
        clearInterval(timerId);
        e.target.style.backgroundColor = 'red';
      }
    }
    winner = getWinner();
    render();
  }
});

function createResetListener() { 
  document.getElementById('reset').addEventListener('click', function() {
    init();
    render();
  });
}

/*----- functions -----*/
function setTimer () {
  timerId = setInterval(function(){
    elapsedTime += 1;
    document.getElementById('timer').innerText = elapsedTime.toString().padStart(3, '0');
  }, 1000);
}

function revealAll() {
  board.forEach(function(rowArr) {
    rowArr.forEach(function(cell) {
      cell.reveal();
    });
  });
}

function buildTable() {
  var topRow = `
    <tr>
      <td class="menu" id="window-title-bar" colspan="${size}">
        <div id="window-title"><img src="images/mine-menu-icon.png"> Minesweeper</div>
        <div id="window-controls"><img src="images/window-controls.png"></div>
      </td>
    <tr>
      <td class="menu" id="folder-bar" colspan="${size}">
        <div id="folder1"><a href="https://github.com/nickarocho/minesweeper/blob/master/readme.md" target="blank">Read Me </a></div>
        <div id="folder2"><a href="https://github.com/nickarocho/minesweeper" target="blank">Source Code</a></div>
      </td>
    </tr>
    </tr>
      <tr>
        <td class="menu" colspan="${size}">
            <section id="status-bar">
              <div id="bomb-counter">000</div>
              <div id="reset"><img src="images/smiley-face.png"></div>
              <div id="timer">000</div>
            </section>
        </td>
      </tr>
    `;
  boardEl.innerHTML = topRow + `<tr>${'<td class="game-cell"></td>'.repeat(size)}</tr>`.repeat(size);
  boardEl.style.width = sizeLookup[size].tableWidth;
  createResetListener();
  var cells = Array.from(document.querySelectorAll('td:not(.menu)'));
  cells.forEach(function(cell, idx) {
    cell.setAttribute('data-row', Math.floor(idx / size));
    cell.setAttribute('data-col', idx % size);
  });
}

function buildArrays() {
  var arr = Array(size).fill(null);
  arr = arr.map(function() {
    return new Array(size).fill(null);
  });
  return arr;
}

function buildCells(){
  board.forEach(function(rowArr, rowIdx) {
    rowArr.forEach(function(slot, colIdx) {
      board[rowIdx][colIdx] = new Cell(rowIdx, colIdx, board);
    });
  });
  addBombs();
  runCodeForAllCells(function(cell){
    cell.calcAdjBombs();
  });
}

function init() {
  buildTable();
  board = buildArrays();
  buildCells();
  bombCount = getBombCount();
  elapsedTime = 0;
  clearInterval(timerId);
  timerId = null;
  hitBomb = false;
  winner = false;
};

function getBombCount() {
  var count = 0;
  board.forEach(function(row){
    count += row.filter(function(cell) {
      return cell.bomb;
    }).length
  });
  return count;
}

function addBombs() {
  var currentTotalBombs = sizeLookup[`${size}`].totalBombs;
  while (currentTotalBombs !== 0) {
    var row = Math.floor(Math.random() * size);
    var col = Math.floor(Math.random() * size);
    var currentCell = board[row][col]
    if (!currentCell.bomb){
      currentCell.bomb = true
      currentTotalBombs -= 1
    }
  }
}

function getWinner() {
  for (var row = 0; row<board.length; row++) {
    for (var col = 0; col<board[0].length; col++) {
      var cell = board[row][col];
      if (!cell.revealed && !cell.bomb) return false;
    }
  } 
  return true;
}

function render() {
  document.getElementById('bomb-counter').innerText = bombCount.toString().padStart(3, '0');
  var seconds = timeElapsed % 60;
  var tdList = Array.from(document.querySelectorAll('[data-row]'));
  tdList.forEach(function(td) {
    var rowIdx = parseInt(td.getAttribute('data-row'));
    var colIdx = parseInt(td.getAttribute('data-col'));
    var cell = board[rowIdx][colIdx];
    if (cell.flagged) {
      td.innerHTML = flagImage;
    } else if (cell.revealed) {
      if (cell.bomb) {
        td.innerHTML = bombImage;
      } else if (cell.adjBombs) {
        td.className = 'revealed'
        td.style.color = colors[cell.adjBombs];
        td.textContent = cell.adjBombs;
      } else {
        td.className = 'revealed'
      }
    } else {
      td.innerHTML = '';
    }
  });
  if (hitBomb) {
    document.getElementById('reset').innerHTML = '<img src=images/dead-face.png>';
    runCodeForAllCells(function(cell) {
      if (!cell.bomb && cell.flagged) {
        var td = document.querySelector(`[data-row="${cell.row}"][data-col="${cell.col}"]`);
        td.innerHTML = wrongBombImage;
      }
    });
  } else if (winner) {
    document.getElementById('reset').innerHTML = '<img src=images/cool-face.png>';
    clearInterval(timerId);
  }
}

function runCodeForAllCells(cb) {
  board.forEach(function(rowArr) {
    rowArr.forEach(function(cell) {
      cb(cell);
    });
  });
}

init();
render();
