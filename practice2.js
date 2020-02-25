//higher order function drills


function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

// repeat(hello, 5);
// repeat(goodbye, 5);

function filter(arr, fn) {
  return arr.map(word => fn(word) ? console.log(word) : null);
}

function filtery(word) {
  return word[0] === 'R';
}

const myNames = ['Rich', 'Joe', 'Ross', 'Bhaumik', 'Ray'];

// filter(myNames, filtery);

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return (location) => {
    warningCounter++;
    console.log(`Danger! there is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} alert has griggered ${warningCounter} time(s) today!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const lavaWarning = hazardWarningCreator('Lava coming!');
const snowWarning = hazardWarningCreator('Blizzard!');

// rocksWarning('Main St and Pacific Ave');





// let grid = [
//   [1, 1, 1, 1, 0],
//   [1, 1, 0, 1, 0],
//   [1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0]
// ];

// let grid2 = [
//   [1, 1, 0, 0, 0],
//   [1, 1, 0, 0, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 0, 1, 1],
// ];


// let grid3 = [['1', '1', '1'], ['0', '1', '0'], ['1', '1', '1']];
// var numIslands = function (grid) {
//   let islands = 0;
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {

//       if(grid[i][j] === '1'){
//         islands++;
//         grid[i][j] = 'X';
//         let sub=false;

//         if (i > 0) {
//           if (grid[i - 1][j] === 'X') {
//             sub=true;
//           }
//         } 

//         if (j > 0) {
//           if (grid[i][j - 1] === 'X') {
//             sub= true;
//           }
//         }

//         if(sub){
//           islands--;
//         }

//       }

//     }
//   }
//   return islands;
// };


// console.log(numIslands(grid3));



let grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']];
let grid2 = [
  ['1', '1', '1'],
  ['0', '1', '0'],
  ['1', '1', '1']];
// var numIslands = function (grid) {
//   let islands = 0;
//   for (let i = 0; i < grid.length; i++) {
//     if (grid[i].includes('1')) {
//       let index = grid[i].indexOf('1');
//       islands++;
//       grid[i][index] = 'X';
//       let subtract = false;
//       if (i > 0) {
//         if (grid[i - 1][index] === 'X') {
//           subtract = true;
//         }
//       }
//       if (index > 0) {
//         if (grid[i][index - 1] === 'X') {
//           subtract = true;
//         }
//       }
//       if (subtract) {
//         islands--;
//       }
//       i--;
//     }
//   }
//   return islands;
// };

// console.log(numIslands(grid2));



let grid4 = [
  ['1', '1', '1'],
  ['0', '1', '0'],
  ['1', '1', '1']];

// function numIslands(grid) {
//   let islands = 0;
//   for (let x = 0; x < grid.length; x++) {
//     for (let y = 0; y < grid[x].length; y++) {
//       if (grid[x][y] === '1') {
//         islands++;
//         grid[x][y] = 'X';
//         let subtract = false;
//         if (x > 0) {
//           if (grid[x - 1][y] === 'X') {
//             subtract = true;
//           }
//           if (grid[x - 1][y] === '1') {
//             grid[x][y] = 'X';
//           }

//         }
//         if (x < grid.length - 1) {
//           if (grid[x + 1][y] === 'X') {
//             subtract = true;
//           }
//           if (grid[x + 1][y] === '1') {
//             grid[x + 1][y] = 'X';
//           }

//         }
//         if (y > 0) {
//           if (grid[x][y - 1] === 'X') {
//             subtract = true;
//           }
//           if (grid[x][y - 1] === '1') {
//             grid[x][y - 1] = 'X';
//           }

//         }

//         if (y < grid[x].length - 1) {
//           if (grid[x][y + 1] === 'X') {
//             subtract = true;
//           }
//           if (grid[x][y + 1] === '1') {
//             grid[x][y + 1] = 'X';
//           }

//         }
//         if (subtract) {
//           islands--;
//         }
//       }
//     }
//   }
//   return islands;
// }

let grid5 = [
  ['1', '0', '1', '1', '1'],
  ['1', '0', '1', '0', '1'],
  ['1', '1', '1', '0', '1']];

// function numIslands(grid, x = 0, y = 0, islands = 0, prevIsland = false) {
//   if (x === grid.length-1 || y === grid[0].length-1) {
//     return 0;
//   }
//   if (grid[x][y] === '1') {
//     if (!prevIsland) {
//       islands++;
//     }
//     grid[x][y] = 'X';
//     if (x < grid.length - 1) {
//       if (grid[x + 1][y] === '1') {
//         return numIslands(grid, x + 1, y, islands, true);
//       }
//     }
//     if(x > 0){
//       if(grid[x-1][y] === '1'){
//         return numIslands(grid, x-1, y, islands, true);
//       }
//     }

//     if (y < grid[0].length){
//       if(grid[x][y+1] === '1'){
//         return numIslands(grid, x, y+1, islands, true);
//       }
//     }

//     if(y < 0) {
//       if(grid[x][y-1] === '1'){
//         return numIslands(grid, x, y+1, islands, true);
//       }
//     }

//   }
//   numIslands(grid, x+1, y, islands);
// numIslands(grid, x, y+1, islands);
//   return islands;
// }

// console.log(numIslands(grid));

function numIslands(grid){
  let islands = 0;
  for(let row=0; row < grid.length; row++){
    for(let col=0; col< grid[0].length; col++){
      if(grid[row][col] === '1') {
        islands++;
        helper(grid, row, col);
      }
    }
  }
  return islands;
}

function helper(grid, row, col){
  if(row<0 || row >= grid.length || col< 0 || col >= grid[0].length || grid[row][col] === '0'){
    return;
  }
  grid[row][col] = '0';
  helper(grid, row-1, col);
  helper(grid, row+1, col);
  helper(grid, row, col-1);
  helper(grid, row, col+1);
}

console.log(numIslands(grid));