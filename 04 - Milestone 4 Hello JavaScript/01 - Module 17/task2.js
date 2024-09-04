let marks = [75.25, 65, 80, 35.45, 99.50];
let average;
let sum = 0;
let length = marks.length;

for (let i = 0; i < length; i++) {
    sum = marks[i] + sum;
}
console.log(sum);

average =  sum / length;
console.log(average);