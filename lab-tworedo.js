module.exports = { getDayOfTheWeek, makeCalendar }

function getDayOfTheWeek(year, month, day) { //returns day of week with user's input

    let monthCode = null; //monthCodes depending on user's month input
    if (month === "January") {
        monthCode = 1;
    } else if (month === "February") {
        monthCode = 4;
    } else if (month === "March") {
        monthCode = 4;
    } else if (month === "April") {
        monthCode = 0;
    } else if (month === "May") {
        monthCode = 2;
    } else if (month === "June") {
        monthCode = 5;
    } else if (month === "July") {
        monthCode = 0;
    } else if (month === "August") {
        monthCode = 3;
    } else if (month === "September") {
        monthCode = 6;
    } else if (month === "October") {
        monthCode = 1;
    } else if (month === "November") {
        monthCode = 4;
    } else if (month === "December") {
        monthCode = 6;
    } else {
        console.log("Please enter full name of month (eg. 'January'"); //if user inputs anything other than recognized month, then prints this
    }

    if (isLeapYear(year) && month === ["January", "February"]) { //if leap year function results in true AND month is either january or february
        monthCode = monthCode - 1; //then minus 1 from month code
    }

    var yearFirstTwoDigit = Math.trunc(year / 100); //divide year by 100 to get first two digits

    switch (yearFirstTwoDigit) {
        case 16:
            monthCode = monthCode + 6; //if first two digits are 16, then add 6 to month code
            break;
        case 17:
            monthCode = monthCode + 4;
            break;
        case 18:
            monthCode = monthCode + 2;
            break;
        case 20:
            monthCode = monthCode + 6;
            break;
        case 21:
            monthCode = monthCode + 4;
            break;
    }

        var yearLastTwoDigit = year % 100; //remainder of year divided by 100 is last two digits   
        var yearFit12 = Math.trunc((yearLastTwoDigit / 12)); //how many 12s fit in last two digits of year? truncate because do not need remainder for this value
        var yearRemainderFit12 = (yearLastTwoDigit % 12); //what is remainder when last two digits divided by 12?
        var yearRemainderFit4 = Math.trunc((yearRemainderFit12 / 4)); //how many 4s fit in 12 remainder?
        var dayOfTheWeek = Math.trunc(((yearFit12 + yearRemainderFit12 + yearRemainderFit4 + day + monthCode)) % 7); //sum of previously calculated values
        var dayOfWeekList = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        var printedDay = dayOfWeekList[dayOfTheWeek]; //result is calculated position (dayOfTheWeek) of dayOfWeekList array

        console.log(month + " " + day + " " + year + " is a " + printedDay);
}

function isLeapYear(year) { //determining leap year
    if (year % 4 !== 0) { //if year is not divisible by 4, not leap year
        return false;
    } else if (year % 100 !== 0) { //if year is not divisible by 0, leap year
        return true;
    } else if (year % 400 !== 0) { //if year is not divisible by 400, not a leap year
        return false;
    } else {
        return true; //otherwise, leap year
    }
}

function makeCalendar(year) {
    let nameOfMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (let i = 0; i < 12; i++) { //use i = position in nameOfMonth array
        for (let j = 1; j <= getLastDay(year, i); j++) { //use j = day of month that loops until last day of month
            getDayOfTheWeek(year, nameOfMonth[i], j); //use the function from above that prints MM-DD-YYYY and day of week
        }
    }
}

function getLastDay(year, month) { //gets last day of the month
    return new Date(year, month + 1, 0).getDate(); //getDate gives last day of previous month, so month + 1 to get last day of current month
}