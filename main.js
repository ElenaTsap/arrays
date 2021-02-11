console.log('Hello Arrays!');

let myLastObj = {name: 'Bulent', age: 35};

console.log(myLastObj['name']); // returns string Bulent
console.log(myLastObj['age']); // returns number 35

console.log(Object.keys(myLastObj)[0]); // returns the name of the key that is the first in the object

console.log(Object.keys(myLastObj));

let myGroupObj = {
    camera1: 'Ana',
    camera2: 'Eleni',
    camera2: 'Burnan',
    camera4: 'Nicklaus',
    camera5: 'James',
    camera6: 'Antonis'
}

console.log(myGroupObj);

/* 
Arrays are based on Objects but there are some differences:
1. Objects must have keys - Arrays have numeric keys automatically starting from 0
2. Objects have { } - Arrays have []
3. We can reach Objects' numbers by key names - We can reach arrays' members by index numbers
*/

let myGroupArr = [
    'Ana',
    'Eleni',
    'Burnan',
    'Nicklaus',
    'James',
    'Antonis'
]

console.log(myGroupArr);

let emptyArr = [];

let myArr = ['audi', 'bmw', 'mercedes', 500];

console.log(myArr);
console.log(myArr[3]); // returns the 4th value of the array - 500

myArr[3] = 20; // update the value to 20
myArr[4] = 'hi' // creating a new array element in the 5th place

//We can create some new elements which are not sequential
// Array length is calculated at last element's index number +1
console.log('the length of my array is: ' + myArr.length);

myArr[100] = 'Porsche' // creating a new array element in the 100th place

console.log('the length of my array is: ' + myArr.length);
console.log(myArr);

/* 
Push is a method which gets the last element's index and sets the next element with 1 more number and the value of parameter which you set.
 */
myArr.push('Lamborghini'); // with .push you can send an element to the end of the array

myArr.unshift('Toyota'); //.unshift pushes all elements down and puts an element on top

myArr.shift(); // removes the first element of the array

myArr.pop(); //removes the last one on the array
myArr.pop(); //removes the last one on the array
myArr.pop(); //removes the last one on the array
myArr.pop(); //removes the last one on the array
// since we have created these empty spaces between element in position 4 and the other in position 100, be removing element from the bottom does not delete the array empty elements that were accidentally created

// Pop and Push are faster than shift and unshift

let classArr = [
    {
        name: 'Eleni', 
        surname: 'Tsapaki', 
        age: 35, 
        attend: {   
            monday:true, 
                tuesday: true, 
                wednesday: false, 
                thursday: false, 
                friday: true, 
                saturday: undefined, 
                sunday: undefined
        }
    },
    {
        name: 'Dario', 
        surname: 'Argento', 
        age: 35, 
        attend: {   
            monday:true, 
                tuesday: true, 
                wednesday: false, 
                thursday: false, 
                friday: true, 
                saturday: undefined, 
                sunday: undefined
        }
    },
    {
        name: 'Mario', 
        surname: 'Testino', 
        age: 35, 
        attend: {   
            monday:true, 
                tuesday: true, 
                wednesday: false, 
                thursday: false, 
                friday: true, 
                saturday: undefined, 
                sunday: undefined
        }
    },
]

console.log(classArr);

let newArr = ['1', '2', '3', '4', '5'];
console.log(newArr);

newArr.push('6');
console.log('push', newArr);
console.log('push', newArr.push('7')); //push returns the length of the array

newArr.pop();
console.log('pop',newArr);
console.log('pop',newArr.pop());

newArr.shift();
console.log('shift',newArr);

newArr.unshift('mind');
console.log('unshift',newArr);
