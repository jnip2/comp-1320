let getDayOfTheWeek = require("./lab-tworedo.js").getDayOfTheWeek;
let makeCalendar = require("./lab-tworedo.js").makeCalendar;
const readline = require("readline-sync");

makeCalendar (2021); //prints 2021 calendar

var year = readline.questionInt("Please enter a year: ");
var month = readline.question("Please enter a month (eg. January): ");
var day = readline.questionInt("Please enter a day: "); //questionInt changes string to number

getDayOfTheWeek(year, month, day); //prints day of week based on user's input