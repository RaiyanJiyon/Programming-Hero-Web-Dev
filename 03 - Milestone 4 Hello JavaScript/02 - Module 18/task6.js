/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let status;
status = 'Student';
let age = 65;
let originalPrice = 800;
let discountPrice;
let discountPercentage;


if (age < 10) {
    console.log("Free");
} else if (status == 'Student') {
    discountPercentage = 50;
    discountPrice = originalPrice * (1 - (discountPercentage / 100));
    console.log("Discount Price", discountPrice);
} else if (age >= 60) {
    discountPercentage = 15;
    discountPrice = originalPrice * (1 - (discountPercentage / 100));
    console.log("Discount Price", discountPrice);
} else {
    console.log("Regular ticket fare 800 tk");
}