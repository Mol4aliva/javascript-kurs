/*let a;
a = 10;
let b = 20;
console.log(a);

const c = 100;
*/
/*let num = 123;
console.log(typeof num);

console.log(0.1 + 0.2); //0.30000000000000004
console.log((0.1 * 100 + 0.2 * 100) / 100);  //0.3

console.log(120 + 40); //160
console.log(120 - 40); //80
console.log(120 * 40); //4800
console.log(120 / 40); //3
console.log(120 **2); //14400
console.log(9 % 4); //4 + 4 + 1   (1)

let x = 5;
x =x + 5;
x += 5;
console.log(x++);
console.log(x);*/

/*let userName = '123';
console.log(typeof userName);
console.log(userName + ' Hello world!');

console.log(userName * 123);
console.log(123 * userName);*/

/* console.log("dfd\tfgdgf\n \\ dfdgf \"xcvdcxvd\"vvcvbb")

let text = 'hello\n';
console.log(text.length);

let name = 'Roman';
let surname = 'Kutselepa';

console.log('Name: ' + name + ' Surname: ' + surname);
console.log(`Name: ${name} Surname: ${surname}`);*/


 /*let bool = false;
 let x = Boolean(0);  // Number 0, -0 => false
console.log(x);
let a = Boolean('Hello world!'); // пустая страка '' => false
console.log(a);*/

//let fruits = 'Apple, Banana, Pear';
//console.log(fruits[0]);
//console.log(fruits.length);
//console.log(fruits[fruits.length - 1]);
//console.log(fruits.slice(0, 4));
//console.log(fruits.slice(6, fruits.length));
//fruits = fruits.slice(0, 5);
//console.log(fruits.slice);


//let x = 'hello';
//console.log(x.indexOf('ell'));

//console.log('Hello world'.repeat(10));
//console.log(x.replace('ello', 'omjak'));
//let y = 'Hello people of planet Earth!';
//let words = y.split(' ');
//console.log(words);

//console.log(y.substr(5, 7))

/*const  myCar = {
    make: 'Honda',
    'car model': 'Civic',
   // popular: true
}*/

/*console.log(myCar.make);

let status = 'popular';

console.log(myCar["car model"]);
myCar.model = 'HR-V';
myCar.color = 'red';
myCar[status] = true;
console.log(myCar);

delete myCar.color;  //удалил ключ
console.log(myCar);*/



/*let a = {
    make: 'BMW'
};
let b = a;
a.make = 'VW';
console.log(a, b);*/

/*const  myCar = {
    make: 'Honda',
    model: 'Civic',
    info: {
        year: 2000,
        color: 'red'
    }
}*/

//const myCarCopy = Object.assign({},myCar);
//const myCarCopy = { ...myCar };
/*const myCarCopy = JSON.parse(JSON.stringify(myCar));
myCarCopy.info.year = 2024;

console.log(myCarCopy);
console.log(myCar);*/


//console.log(myCar.info.year);
//console.log(myCar['info']['color']);
//console.log(myCar['info'].year);


/*const userName = 'Terminator';
const friendsQty = 10000;

const userProfile = {
    //name: userName,
    //friends: friendsQty,
    userName,
    friendsQty,
    emailVerified: false
}

console.log(userProfile);*/

/*const button = {
    width: 200,

    color: 'green'
}
const btnText = {
    text: 'Buy',
}

const redButton = {
    ...button,
    ...btnText,
    color: 'red'
}

console.log(redButton);*/

//const numArr = [1, 2, 3];
//numArr.lenght = 10;
//const arr = new Array();

//numArr[10] = 123;
//console.log(numArr);

//const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*nums.forEach(num =>{
    console.log(num ** 2);
    console.log(num ** 3);
})*/

/*nums.push(10);
console.log(nums.length);
let removed = nums.pop();
console.log(nums);
console.log(removed);

nums.unshift(0);
console.log(nums);

let x = nums.shift();
console.log(nums, x);*/


const  myCar = {
    make: 'Honda',
    model: 'Civic',
    color: 'red'
    }

console.log(Object.values(myCar));
console.log(Object.keys(myCar));
console.log(Object.entries(myCar));
