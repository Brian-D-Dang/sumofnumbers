const numbers = [1, 2, 10];

// eslint-disable-next-line no-shadow
function sumFor(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function sumWhile(array) {
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
}

function sumTheSimpleWay(array) {
  return _.reduce(array, function (memo, num) {
    return memo + num;
  });
}

function sumRecursion(array) {
  if (array.length === 0) {
    return 0;
  }
  return array.pop() + sumRecursion(array);
}

console.log(sumFor(numbers));
console.log(sumWhile(numbers));
console.log(sumTheSimpleWay(numbers));
console.log(sumRecursion(numbers));
