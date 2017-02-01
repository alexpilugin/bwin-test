const input0 = [];
const input1 = [1];

const input2 = [
  [1,2], 
  [3,4]
];

const input3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const input4 = [
  [1, 2,  3,  4],
  [5, 6,  7,  8],
  [9, 10, 11, 12],
  [13,14, 15, 16],
];

const input5 = [
  [1,  2,  3,  4,  5],
  [6,  7,  8,  9,  10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];


function spiral(arr) {
'use strict'  
  if(arr === null || arr.length === 0) return null;
  if(arr.length === 1) return arr;

  var temp = arr.slice(); //copy
  
  var result = [];
  
    //1st step. Read a topLine
    var topLine = temp.shift(); 
    for(var i = 0; i < topLine.length; i++){
      result.push(topLine[i]);
    }
    
    if(temp.length === 0) return result;
    
    //2nd step. right side
    for(var i = 0; i < temp.length; i++){
      result.push( temp[i].pop() );
    }
         
    //3rd step. bottom line
    var bottomLine = temp.pop();
    while (bottomLine.length > 0) {
      result.push( bottomLine.pop() );
    }
    
    //4th step. left side
    var i = temp.length;
    while (i > 0){
      i--;
      result.push( temp[i].shift() )
    }

    //next itteration - 
    if(temp.length > 0){
      result.push.apply(result, spiral(temp) );
    }
    
  return result;
}
console.log('result: ' + spiral(input0));
console.log('result: ' + spiral(input1));
console.log('result: ' + spiral(input2));
console.log('result: ' + spiral(input3));
console.log('result: ' + spiral(input4));
console.log('result: ' + spiral(input5));
