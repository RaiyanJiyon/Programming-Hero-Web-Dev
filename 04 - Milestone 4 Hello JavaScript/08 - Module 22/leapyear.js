function leapYear(year) {
    if (year % 400 === 0) {
        console.log("Leap Year");
    } else if (year % 4 === 0 && year % 100 !== 0) {
        console.log("Leap Year");
    } else {
        console.log("Not Leap Year");
    }
}

leapYear(2004);
leapYear(2013);
leapYear(2024);