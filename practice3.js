/**
 * A stack can be used to ensure 
 * that an arithmetic expression has 
 * balanced parentheses. Write a function 
 * that takes an arithmetic expression 
 * as an argument and returns true or 
 * false based on matching parenthesis. 
 * As a bonus provide a meaningful error 
 * message to the user as to what's missing. 
 * For example, you are missing a ( or missing 
 * a ")".
 */


// function parentheses(string) {
//   let stack = [];
//   let map = {
//     '(':')',
//     '{': '}',
//     '[': ']',
//   };

//   for (let i=0; i< string.length; i++) {
//     //push all the open parenthesis types into stack
//     if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
//       stack.push(string[i]);
//     }
//     //if we reach a closing bracket, we need to make sure the last parenthesis before it was an open bracket.
//     //check the last item in the stack to see if it matches the closing bracket type.
//     if (string[i] === ')' || string[i] === '}' || string[i] === ']') {
//       let last = stack.pop();
//       if(map[last] !== string.charAt(i)){
//         return `You are missing ${map[last]}`;
//       }
//     }
//   }
//   //if any extra parenthesis remain in the stack that means there is an uneven num of parenthesis and therefore
//   //we are missing a parenthesis somewhere.
//   if(stack.length !== 0){
//     let last = stack.pop();
//     return `You are missing ${map[last]}`;
//   }
// return 'You have all the parentheses';
// }

// console.log(parentheses('(){}'));
// console.log(parentheses('[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]'));
// console.log(parentheses('({(()))}}'));


//repeat drill


function parenthesis(string){
  let stack = [];
  let key = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for(let i=0; i<string.length; i++){
    if(key[string[i]]){
      stack.push(string[i]);
    }

    if(string[i] === ')' || string[i]==='}' || string[i] ===']'){
      let last = stack.pop();
      if(!last){
        return `You have an extra ${string[i]}`;
      }

      if(key[last] !== string[i]){
        return `You are missing ${key[last]}`;
      }
    }
  }

  if(stack.length !== 0){
    let last = stack.pop();
    return `You are missing ${key[last]}`;
  }

  return 'All parentheses present';
}

console.log(parenthesis('(){}]'));
console.log(parenthesis('[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]'));
console.log(parenthesis('({(()))}}'));
console.log(parenthesis(')({(()))}}('));

//find Min

function min(array){
  if(array.length === 0){
    return 'Must provide array of numbers';
  }

  let min = array[0];
  for(let i=1; i< array.length; i++){
    if(!Number(min) || !Number(array[i])){
      return 'Array must only contain numbers';
    }

    if(array[i] < min){
      min = array[i];
    }
  }
  return min;
}

// console.log(min([1, 'a', 1, 2, -10]));


// var maxProfit = function(prices) {
//   let profit=0;
//   let day=0;
//   for(let i=0; i<prices.length; i++){
//       for(let j=i+1; j<prices.length; j++){
//           if(prices[i] < prices[j]){
//               let positiveValue= prices[j]-prices[i];
//               if(positiveValue > profit){
//                   profit= positiveValue;
//                   day=[i+1];
//               }
//           }
//       }
//   }
//   return profit;
// };

// console.log(maxProfit([10,3,9,3,10,1000,1000]));

function maxProfit(prices){
  if(prices.length <2){
    return 0;
  }

  let buyPrice=prices[0];
  let maxProfit= 0;
  for(let i=1; i<prices.length; i++){
    if(buyPrice > prices[i]){
      buyPrice = prices[i];
    }
    if(maxProfit < prices[i] - buyPrice){
      maxProfit = prices[i]-buyPrice;
    }
  }
  return maxProfit;
}

// console.log(maxProfit([7,1,5,3,6,4]));




//remove duplicates from an array;

function duplicates(array){
  let values = {};

  for(let i=0; i<array.length; i++) {
    if(!values[array[i]]){
      values[array[i]]= true;
  } else {
    array.splice(i,1);
    i--;
  }
}
  return array;
}

console.log(duplicates([1,1,1,1,1,2,3,3,4,5,5,6]));

// var removeDuplicates = function(nums) {
//   let values={};
//   let prevValue=nums[0];
//   for(let i=1; i<nums.length; i++){
//       let num = nums[i];
//       if(num === prevValue){
//           nums.splice(i, 1);
//           i--;
//       }
//       prevValue=num;
//   }
//   return nums;
// };

// console.log(removeDuplicates([1,1,2]));

var removeDuplicates = function(nums) {
  let values = {};

  for(let i=0; i<nums.length; i++) {
    if(!values[nums[i]]){
      values[nums[i]]= true;
  } else {
    nums.splice(i,1);
    i--;
  }
}
  return nums;
};

console.log(removeDuplicates([1,1,2]));