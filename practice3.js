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
    if(string[i] === '(' || string[i]==='{' || string[i]==='['){
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

console.log(min([1, 'a', 1, 2, -10]));