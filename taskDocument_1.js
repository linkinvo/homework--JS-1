//Task #1
const array1 = ["a", "b", "c"];
const array2 = [1, 2, 3];
const array3 = array1.concat(array2);

// console.log(array3)

//Task #2

const arrayElement = ["a", "b", "c"];
const newArrElement = arrayElement.push(1, 2, 3);

// console.log(arrayElement)

//Task #3

const arraySort = [3, 4, 1, 2, 7];
arraySort.sort();

// console.log(arraySort)

//Task #4

function arrReverse() {
  let elementObj = ["a", "b", "c", "d", "e", "f"];
    let b = []
  for (let i = elementObj.length - 1; i >= 0; i--) { 
    b.push(elementObj[i])
  }
    // console.log(b)
    return b;
  }
  arrReverse();


//Task #5
("use strict");
const a = null;

// console.log(typeof a); 