
let fullName = 'Tameka Hannah';
//kitchen sink 4
const usStates = '50';
//kitchen sink 5 
let compute = 5 + 4;

//if the first letter of yourname is comes after L Back of line, if not Next
let yourname = 'tngel';
    
if (yourname.charCodeAt(0) > '76') {
    alert('Back of the line!');
} else {
    alert('Next!');
}


    //shows error message
function myFunction() {
    alert('Hello World!');
}
    //call the function Hello World
myFunction()


    //check age function
function checkAge(name, age) {
if (age < 21) 
        output = 'Sorry ' + name + ' you are not old enough to view this page!';
    else output = 'Thank You';
return output
}
checkAge('Charles', 21)
checkAge('Abby', 21)
checkAge('James', 18)
checkAge('John', 17)



// Fav vegetables array
let veges = ['Broccoli', 'Green Beans', 'Cabbage']
for (let i = 0; i < veges.length; i++) {
    console.log(veges[i]);
}
//array to call function checkAge
let clients = [
    {name: 'Geneva', age: 28},
    {name: 'Victor', age: 23},
    {name: 'Rose', age: 17},
    {name: 'Franklin', age: 21},
    {name: 'Angela', age: 16}
]
for (var a = 0; a < clients.length; a++){
    checkAge(clients.name,clients.age);
}

//function for length
function getLength(string) {
    return string.length
}
let length = getLength('Hello World')
console.log(length)

if (length % 2 == 0)
 {alert('The world is nice and even')
} else  {alert ('The world is an odd place!')}

