/**
 * Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

function addStrings(num1, num2) {
  let key = {};
  for (let i = 0; i < 10; i++) {
    key[i] = i;
  }

  let largerNum = num2;
  let smallerNum = num1;
  let result = '';
  let carry = null;
  if (num1.length > num2.length) {
    largerNum = num1;
    smallerNum = num2;
  }

  let count = 1;
  for (let i = largerNum.length - 1; i >= 0; i--) {
    let sum;
    if (count <= smallerNum.length) {
      if (carry) {
        sum = key[carry] + key[largerNum[i]] + key[smallerNum[smallerNum.length - count]];
        carry = null;
      } else {
        sum = key[largerNum[i]] + key[smallerNum[smallerNum.length - count]];
        carry = null;
      }
    } else {
      if (carry) {
        sum = key[carry] + key[largerNum[i]];
        carry = null;
      } else {
        sum = key[largerNum[i]];
        carry = null;
      }
    }

    if (sum >= 10) {
      carry = `${sum}`[0];
      sum = `${sum}`.slice(1);
    }

    result = `${sum}` + result;
    count++;
  }

  if (carry) {
    result = `${carry}` + result;
  }
  return result;
}

console.log(addStrings('9333852702227987',
'85731737104263'));

console.log(addStrings('123456789',
'987654321'));