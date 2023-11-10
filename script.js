1.let number = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < number.length; i++) {
    if (number[i] == 10) break;
    console.log(number[i]);
}

2.let numbers = [1, 5, 4, 10, 0, 3]
console.log(numbers.indexOf('4'));

3.let num = [1, 3, 5, 10, 20]
num = num.join(' ');
console.log(num);

4.let massive = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
console.log(Array(massive));

5.const n = [1, 1, 1]
n.push (2, 2, 2.)
console.log(n);

6.const arr = [9, 8, 7, 'a', 6, 5];
const numbs = arr.sort();
numbs.pop();
console.log(numbs);

7.const arr = [9, 8, 7, 6, 5];
let num = Number(prompt('Введите число от 1 до 10'));

if (arr.includes(num)) {
  console.log(`Число ${num} есть в массиве.`);
} else {
  console.log(`Числа ${num} нет в массиве.`);
}

8.const str = 'abcdef'; 
const result = str.split('').reverse().join('')
console.log(result);

9.let type = [[1, 2, 3,],[4, 5, 6]];
console.log(Array(type.join(',')));

10.let arr = [3,7,8,4,5,1];

for (let i = 0; i < arr.length - 1; i++) {
    let sum = arr[i] + arr[i + 1]
	console.log(sum);
}

11.let numb = [2, 4, 6, 8]
let res = numb.map (function(elem) {
  return elem ** 2;
})
console.log(res);

12.const arr12 = ["слово", "", "слог", "длинное предложение", "буква"];

const getLengthWords = function (arr) {
  let lengthArr = arr.map(el => el.length);
  return lengthArr;
};

console.log(getLengthWords(arr12));

13.function filterPositive(array) {
  let negativeArr = [];
  for (const value of array) {
    if (value < 0) negativeArr.push(value);
  };
  return negativeArr;
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));
