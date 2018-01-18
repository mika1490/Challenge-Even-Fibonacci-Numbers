/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var previous = 0;
  var current = 1;
  var sum = 0;
  var next;
  for(let i = 1; i <maxFibValue; i++) {
  next = current + previous;
  previous = current;
  current = next;
  if(current % 2 === 0 && current <= maxFibValue) {
    sum += current;
  }
}
  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;
  
  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};