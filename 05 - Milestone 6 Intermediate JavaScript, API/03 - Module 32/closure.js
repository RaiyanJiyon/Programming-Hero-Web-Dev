function stopWatch() {
    let count = 0;

    return function() { //anonymous function
        count++;
        return count;
    }
}

const watch1 = stopWatch();
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());

const watch2 = stopWatch();
console.log(watch2());
console.log(watch2());
console.log(watch2());
console.log(watch2());

const watch3 = stopWatch();
console.log(watch3());
console.log(watch3());
console.log(watch3());