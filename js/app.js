// //*eslintrc.json
let rightAnswer = 0;

let person = prompt('Please enter your name', '');

if (person !== null) {
  alert('Hello ' + person + '! How are you today?');
} else {
  alert('You didn\'t tell me your name!');
}

let response = prompt(' Do I love to Code', '');
if (response.toLowerCase() === 'y' || response.toLowerCase() === 'yes') {
  alert('True');
  rightAnswer++;
  //console.log('True')
} else {
  alert('False');
}

response = prompt(' Am I Parent?', '');
if (response.toLowerCase() === 'y' || response.toLowerCase() === 'yes') {
  alert('True');
  rightAnswer++;
  //console.log('True')
} else {
  alert('False');
}

response = prompt(' Are veggies my favorite food?', '');
if (response.toLowerCase() === 'y' || response.toLowerCase() === 'yes') {
  alert('True');
  rightAnswer++;
  //console.log('True')
} else {
  alert('False');
}

response = prompt(' Do I love Jesus?', '');
if (response.toLowerCase() === 'y' || response.toLowerCase() === 'yes') {
  alert('True');
  rightAnswer++;
  //console.log('True')
} else {
  alert('False');
}

response = prompt(' Do I love to travel?', '');
if (response.toLowerCase() === 'y' || response.toLowerCase() === 'yes') {
  alert('True');
  rightAnswer++;
  //console.log('True')
} else {
  alert('False');
}

const kids = 5;
let count = 0;
const maxattempts = 4;
while (count < maxattempts) {
  let response = +prompt(' How many kids do I have?', '');
  if (response === kids) {
    alert('You got it!');
    rightAnswer++;
    break;
  }
  else if (response < kids) {
    alert('Too Low');
  } else {
    alert('Too High');
  }
  count++;
}


alert('Your Score was ' + rightAnswer);
