const sequentialSearchST = require('./sequentialSearchST.js');
const binarySearchST = require('./binarySearchST.js');
const BST = require('./BST.js');
const util = require('../sort/util.js')


let st = new BST();

let s = util.getRandomList(3)
// s = [2,1,4,3,2.9]
console.dir(s);

for( let i of s ){
    st.put(i,i) 
}
console.dir(st);
/*
for( let i of s ){
    console.log(st.get(i))
}

for (let i = 1; i < s.length; i++) {
    for( let j = i; j>0; j-- ){
        if( s[j] > s[j-1] ){
            [s[j],s[j-1]] = [s[j-1],s[j]]
        }
    }
}
*/
console.dir(s);
console.log('===========')
st.delete(s[0])
console.dir(st);
