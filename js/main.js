let date = new Date();
let getDay = date.getDay();
let dayOfWeek;

if (getDay === 0) {
    dayOfWeek = 'Sunday';
} else if (getDay === 1) {
    dayOfWeek = 'Monday';
} else if (getDay === 2) {
    dayOfWeek = 'Tuesday';
} else if (getDay === 3) {
    dayOfWeek = 'Wednesday';
} else if (getDay === 4) {
    dayOfWeek = 'Thursday';
} else if (getDay === 5) {
    dayOfWeek = 'Friday';
} else if (getDay === 6) {
    dayOfWeek = 'Saturday';
}

document.querySelector('#dayOfWeek').innerHTML;
document.querySelector('#dayOfWeek').innerHTML = `day of the week: ${dayOfWeek}`;


let getHours = date.getHours();
let getMinutes = date.getMinutes();
let getTime = `${getHours}:${getMinutes}`;

document.querySelector('#time').innerHTML;
document.querySelector('#time').innerHTML = `time: ${getTime}`;
