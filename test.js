function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let multiplier=0;
  let sumTotal= 0;
  let sumInner= 0;
  
  for(let i=0; i<S.length; i++){
      if(S[i] === '('){
        if(sumInner !== 0){
          sumTotal += sumInner * multiplier;
          sumInner = 0;
        }
        multiplier++;
      }
      else if(S[i] === ')'){
          sumTotal += sumInner * multiplier;
          multiplier--;
          sumInner=0;
      }
      else if(S[i] !== ' '){
          sumInner += Number(S[i]);
      }
  }
  console.log(sumTotal);
  return sumTotal;
}

// console.log(solution('(1 2 3 4 5)'));

//refactoring using distributive math property

function solution2(string){
  let multiplier = 0;
  let total = 0;
  for(let i=0; i<string.length; i++){
    if(string[i] === '('){
      multiplier++;
    }else if(string[i] === ')'){
      multiplier--;
    } else if (string[i] !== ' '){
      total += Number(string[i]) * multiplier;
    }
  }
  return total;
}

console.log(solution2('(1 2) (3 (4 5)'));