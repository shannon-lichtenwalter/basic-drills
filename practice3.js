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

// the following will be done without the stack/queue.

function parentheses(string) {
  let counter = 0;
  let forwards = [];
  let backwards = [];
  for (let i = string.length - 1; i >= 0; i--) {
    if (string.charAt(counter) === '(' || string.charAt(counter) === ')') {
      forwards.push(string.charAt(counter));
    }
    if (string.charAt(i) === '(' || string.charAt(i) === ')') {
      backwards.push(string.charAt(i));
    }
    counter++;
  }
  console.log(forwards);
  console.log(backwards);
  if (forwards[0] === ')'){
    return 'You are missing a \'(\'';
  }

  for (let i = 0; i < forwards.length; i++) {
    if (forwards[i] === '(' && backwards[i] !== ')') {
      return 'You are missing a \')\'';
    } else if (forwards[i] === ')' && backwards[i] !== '(') {
      return 'You are missing a \'(\'';
    }
  }
return 'You have all the parentheses';
}

console.log(parentheses('x*(x+z) + x/(y-z) + d'));