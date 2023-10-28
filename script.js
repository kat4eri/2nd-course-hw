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

4.let arr = [];
for (let i = 0; i <= 1; i++) {
	arr[i] = []; 

	for (let j = 0; j <= 1; j++) {
		arr[i].push(j + 1);
	}
}

console.log(arr);

5.const n = [1, 1, 1]
n.push (2, 2, 2.)
console.log(n);

6.let s = [9, 8, 7, 'a', 6, 5]
s.sort()
s.slice ('a')
console.log(s);

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

9.const massive1 = [1, 2, 3,];
const massive2 = [4, 5, 6];

const all = [...massive1, ...massive2]; 
console.log(all);

10.let g = [3,7,8,4,5,1];

for (let i = 0; i < g.length - 1; i++) {
    let sum = arr[i] + arr[i + 1]
	console.log(sum);
}
