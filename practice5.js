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


/**
 * Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Note:

Each of the array element will not exceed 100.
The array size will not exceed 200.
 

Example 1:

Input: [1, 5, 11, 5]

Output: true

Explanation: The array can be partitioned as [1, 5, 5] and [11].
 

Example 2:

Input: [1, 2, 3, 5]

Output: false

Explanation: The array cannot be partitioned into equal sum subsets.
 */


 //stumped on this one-- need to return to it later

function canPartition(nums) {
  let array = nums.sort((a,b) => a-b);
  let lowest = array[array.length-1];
  let sum= 0;
  let values = {};
  for(let i=0; i< array.length; i++){
    sum+= array[i];
    values[i] = [i];
  }

  if(sum % 2 !== 0){
    return false;
  }

  let mid = Math.floor(sum/2);
  for(const nums in values){

  }


}

canPartition([1, 5, 11, 5]);


const sumOf = function(list){
  if (list.length === 1){
    return list[0];
  }
  console.log('adding here: ' + (list[0] + '  ' + list.slice(1)));
  return list[0] + sumOf(list.slice(1));
};
let list = [2,3,6,7,10];
console.log(sumOf(list));