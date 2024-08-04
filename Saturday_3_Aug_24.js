// Problem 1

// 1. Extracting Parts of the Date and Time
// Given the current date and time, extract and print the year, month, day, hour, minute, and
// second separately.

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1; // Months are zero-based
const day = now.getDate();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();

console.log(`Year: ${year}, Month: ${month}, Day: ${day}, Hour: ${hour}, Minute: ${minute}, Second: ${second}`);



//problem 2 

var previousDate = new Date('July 4, 2024 12:00');
var currentYear = previousDate.getFullYear();
var currentMonth = previousDate.getMonth();
var currentDate = previousDate.getDate();
var currentHours = previousDate.getHours();
var currentMinute =  previousDate.getMinutes();
console.log(previousDate.toLocaleDateString(), 'previousDate', previousDate.toLocaleTimeString());
console.log(`${currentYear} ${currentMonth} ${currentDate} ${currentHours} ${currentMinute}`);


// problem 3


var date = new Date(2024, 6, 4, 12, 0);
console.log(date);
date.setFullYear(2025);
date.setMonth(11);
date.setDate(25);
var formatted = date.toISOString().slice(0,10);
console.log(formatted);

// Problem 4 
//create a date object representing your birthdate
var birthDate = new Date('2005-04-26');
//Extract and print the day of the week
var dayOfWeek = birthDate.getDay();  //0-6
console.log("Tuesday:",dayOfWeek);

//  Prpblem 5 
 
 //Create a `Date object representing the first day of the current year at midnight (00:00:00).
// Print the date and time in the format "YYYY-MM-DD HH:MM

var currentdate = new Date('January 01,2024,00:00');
var currentYear = currentdate.getFullYear();
var currentMonth = currentdate.getMonth() ;
var currentDay = currentdate.getDay();
var currentHour = currentdate.getHours() ;
var currentMinute = currentdate.getMinutes() ;
console.log(`Year: ${currentYear}\n Month: ${currentMonth}\n Day: ${currentDay} \n Hour: ${currentHour}\n Minute: ${currentMinute}`);



//Problem 6 


//Get the current date and time 
var currentDateTime = new Date();
//Add 5 days to the current date

currentDateTime.setDate(currentDateTime.getDate() + 5);
// var days = currentDateTime.toISOString().slice(0,10);
var days = currentDateTime.toLocaleDateString();
console.log("Add 5 days to currentDay" ,days);