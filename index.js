//comment
//printting output
console.log('hello world');
//variable delclaration
let name = 'Gaurav';
console.log(name)
let value = 1;
value =2;
console.log(value)
//constant variable declaration
const val = 3.14;
// val= 11;
 /* data types in js
 1)primitive/value types:
    a)string
    b)Number
    c)Boolean
    d)undefined
    e)null
 2)Reference types
    a)object
    b)array
    c)function
*/
 
let nameFirst = 'Gaurav'; //a)string

let no = 2; //b)Number

let willItRain = true; //c)Boolean

let color = undefined; //d)undefined

let varf= null; // e)null

//js as a dynamic language
typeof no;
no= "no";
typeof no;
//Reference type
//a)object
let person = {
    nm : 'gauravss',
    age: 19
};
console.log(person)
//accesing elements
//dot notation 
person.age=20;
//bracket notation
person['nm'] = 'gss';
//b)array
//array length is dynamic and we can store two different data type in array
let myArray = ['hell', 4, 'harrypotter']
typeof myArray //will return object
//c)function
//parameter and argument are different
function greet(){ //argument
    console.log('hello')
}
greet(); //parameter
