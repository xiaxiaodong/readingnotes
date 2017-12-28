const util = require('./util.js');
const timeCount = require('./timeCount.js');
const select = require('./select.js');
const insert = require('./insert.js');
const shell = require('./shell.js');
const merge = require('./merge.js');
const quick = require('./quick.js');
const maxPQ = require('./maxPQ.js');

var a = new maxPQ();
let list  = util.getRandomList(9);
let newl = [];
for( let key in list ){
    a.insert(list[key])
}

console.dir(a.list)

for( let key in list ){
    newl.push(a.delMax())
} 
console.dir(newl)
newl.reverse();
console.dir(newl)
console.log(util.isSorted(newl))

// console.dir(a.list)

// console.dir(a.list)
/*
let times = 1;
for (let i = 0; i < times; i++) {
    util.comparison( insert ,quick,10,10000)
}
*/

/*
let list  = util.getRandomList(5);
console.dir(list)
quickSort(list,0,4)
console.dir(list)
*/

// util.test( quick,10,100)
// util.test(shellSort, 1, 6)
    // util.test( insertSort,100)

// let list  = util.getRandomList(5);
// console.dir(list)
// mergeSort(list,0,4)
// console.dir(list)
// util.test( mergeSort,1,6)