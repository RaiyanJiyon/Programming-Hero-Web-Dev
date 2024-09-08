/*
Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk

Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/

function calculateElectronicsBudget(laptop, tablets, mobile) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    let totalMoney = (laptop * laptopPrice) + (tablets * tabletPrice) + (mobile * mobilePrice);
    
    return totalMoney;
}

let laptop = 2;
let tablets = 3;
let mobile = 4;

console.log(`Total budgets - ${calculateElectronicsBudget(laptop, tablets, mobile)} TK.`);