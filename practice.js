function jedi(first, last){
  return last.slice(0,3) + first.slice(0,2);
}
// console.log(jedi('Shannon', 'Lichtenwalter'));

function beyond(num){
  if(num === Infinity){
    return 'And Beyond';
  } else if(num === 0){
    return 'staying home';
  } else if (num < 0) {
    return 'To negative infinity';
  } else if (num > 0) {
    return 'To infinity';
  }
}
// console.log(beyond(Math.pow(10, 1000)));

function decode(sentence){
  let wordsArray = sentence.split(' ');
  let result = '';
  let cipher = {
    a:2,
    b:3,
    c:4,
    d:5
  };

  wordsArray.map(word => {
    let letter = cipher[word.charAt(0)];
    if(!letter){
      result += ' ';
    } else {
      result += word[letter -1];
    }
  });
  
  return result;
}

// console.log(decode('craft block argon meter bells brown croon droop'));

function daysCount(month, leapYear=false){
  let day= null;
  switch (month){
    case ('January'):
      day = 31;
      break;
    case ('March'):
      day = 31;
      break;
    case ('May'):
      day = 31;
      break;
    case ('July'):
      day = 31;
      break;
    case ('August'):
      day = 31;
      break;
    case ('October'):
      day = 31;
      break;
    case ('December'):
      day = 31;
      break;
    case('February'):
      if(leapYear){
        day = 29;
      } else {
        day = 28;
      }
      break;
    default:
      day = 30;
  }
  return `There are ${day} days in ${month}`;
}

// console.log(daysCount('February', true));

function rockPaperScissors(shoot){
  let result = null;
  let computer = Math.floor(Math.random() * 3 + 1);
  let key = {
    1: 'rock',
    2: 'paper',
    3: 'scissors'
  };
  
  if(shoot < 0 || shoot > 3){
    return 'Error: must choose a number between 1 and 3';
  }

  if(computer === shoot) {
      result = 'It\'s a tie...';
  }
  else if (computer === 1 && shoot === 2 ||
      computer === 2 && shoot === 3 || 
      computer === 3 && shoot === 1 ){
      result = 'You Win!';
  }
  else if (computer === 1 && shoot === 3 ||
      computer === 2 && shoot === 1 ||
      computer === 3 && shoot === 2){
    result = 'You Lose!';
  }

  return `You chose ${key[shoot]} and the computer chose ${key[computer]}: ${result}`;
}

// console.log(rockPaperScissors(3));


function reverser(string){
  let result = '';
  for(let i=string.length-1; i>= 0; i--){
    result += string.charAt(i);
  }
  return result;
}

console.log(reverser('hello'));