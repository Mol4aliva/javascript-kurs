/*let x = 5;

if(x === 5) {
    console.log('X is equal to 5');
}else if (x > 2) {
    console.log('X is greater than 5');
}else {
    console.log('X is less than 5');
}*/

/*const myCar = {
    make: 'Honda',
    model: 'Civic',
    popular: true
}

if ( myCar.popular) {
    console.log(`This is my ${myCar.make} ${myCar.model}. It is popular.`)
}else {
    console.log(`This is my ${myCar.make} ${myCar.model}. It is not popular.`)
}*/

/*const idcode = '38803160272';

if (idcode.length === 11) {
    console.log(idcode);
} else {
    if (idcode.length > 11) {
        console.log('Code is too long!');
    } else {
        console.log('Code is too short!');
    }
}*/
//const x = '5';

/*if (x !== 5) {
    console.log('Strict');
}
if (x != 5) {
    console.log('Not strict');
}*/

//if (!x) {
//    console.log('Hello');
//}

const age = 12;

// age < 12 - child
// 12 <= age < 18 = teenager
// age >= 18 - adult

/*if (age < 12) {
    console.log('Child');
} else if (age < 18) {
    console.log('Teenager');
} else {
    console.log('Adult');
}*/

/*if (age < 12) {
    console.log('Child');
}
if (age >= 12 || age < 18) {   //  &&- и   ,   || - или
    console.log('Teenager');
}*/
//if (18 <= age < 12) {
//    console.log('Teenager');
//}

/*function sumTwoNumbers(a, b) {
   let result = a + b;
    console.log(result);
    return result
}

console.log(sumTwoNumbers(10 , 15));

function  sayHello() {
    console.log('Hello');
}
sayHello();*/

/*function triangleArea(a, b, c) {
    const p = (a + b + c) / 2;
    const area = (p * (p - a) * (p - b) * (p - c)) ** 0.5;
    return area;
}
console.log(triangleArea(3, 4, 5));*/

function  isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    return false;

}

console.log(isEven(5));