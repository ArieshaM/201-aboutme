//*eslintrc.json

//let text = "yes!";
//let True = text.toUpperCase();

let person = prompt('Please enter your name', '');

if (person !== null) {
  alert('Hello ' + person + '! How are you today?');
} else {
  alert("You didn't tell me your name!")
}

let response = prompt(' Do I love to Code', '');
if (response.toLowerCase() === 'y' || response.toLowerCase() === 'yes') {
  alert('True');
  //console.log('True')
} else {
  alert ('False');
}
 
response = prompt(' Am I Parent?', '');
if (response.toLowerCase() === 'y' || response.toLowerCase() === 'yes') {
  alert('True');
    //console.log('True')
} else {
  alert ('False');
}

response = prompt(' Are veggies my favorite food?', '');
if (response.toLowerCase() === 'y' || response.toLowerCase() === 'yes') {
  alert('True');
    //console.log('True')
} else {
  alert ('False');
}

response = prompt(' Do I love Jesus?', '');
if (response.toLowerCase() === 'y' || response.toLowerCase() === 'yes') {
  alert('True');
    //console.log('True')
} else {
  alert ('False');
}

response = prompt(' Do I love to travel?', '');
if (response.toLowerCase() === 'y' || response.toLowerCase() === 'yes') {
  alert('True');
    //console.log('True')
} else {
  alert ('False');
}

