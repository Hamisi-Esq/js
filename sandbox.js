// // let age = 25;
// // let year = 2021

// // //log things to console
// // console.log(age, year);

// // age = 30;
// // console.log(age)

// // const points = 100;
// // // points = 500
// // console.log(points)

// // var score = 75;
// // console.log(score)

// //strings
// console.log('hamisi ');

// let email = "brivahamisi@gmail.com";
// console.log(email);
// // strinf concatenation
// let firstName = "Briva";
// let lastName = "Hamisi";

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// //getting characters
// console.log(fullName[0]);

// //String length
// console.log(fullName.length);

// //string methods
// console.log(fullName.toUpperCase());

// let result = fullName.toLowerCase();
// console.log(result, fullName)

// let index = email.indexOf("@")
// console.log(index)


// common string methods
// let email = 'brivahamisi@gmail.com ';

// // let result = email.lastIndexOf('i');
// // let result = email.slice(0, 10)

// // let result = email.substr(5, 12);

// // let result = email.replace(r, m)
// console.log(result);


// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi)

// math operators +, -, /, 
// console.log(10/2);

// let result = radius % 3;

// let result = pi* radius **2;

// order of operations - BIDMAS
// let result = 5 *  (10 - 3) ** 2;

// console.log(result)
// let likes = 10;
// likes = likes + 1;

// likes++;

// likes +=10
// likes -=5;
// likes *= 2;

// likes /= 2;
// console.log(likes);

//NaN Not a number
// console.log(5/ "hello")
// console.log(5 * "hello")

// conatenate Numbers
// let result = " The Blog has " + likes + " Likes"
// console.log(result)

//template strings
// const tittle = 'Best Reads of 2021'
// const author = 'Hamisi'
// const likes = 30

//concatenation way
// let result = "The Blog called " + tittle + " by " + author + " has "  + likes + " Likes";
// console.log(result)


// //template string way
// let result = `The blog called ${tittle} by ${author} has ${likes} likes`
// console.log(result)

// //creating html templates
// let html = `
// <h2> ${tittle}</h2>
// <p> by ${author}</p>
// <span> This Blog has ${likes} likes </span>
// `;
// console.log(html);

// let ham = ['Briva', 'Victor', 'Anne'];
// console.log(ham);

// ham[1]= 'Wekesa'
// console.log(ham[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['Hamisi', 'Briva', 20 ,22]
// console.log(random);

// console.log(ham.length)

//array methods
// let result = ham.join(',');

// let result = ham.indexOf('briva');

// let result = ham.concat(['ken','crystal'])
// let result = ham.push('ken'); //destrucive method
// result = ham.pop('ken');
// console.log(result);
//   
//booleans and comparisons
// console.log(true, false ,"true", "False");


//methods can return booleans
// let email = 'brivahamisi@gmail.com'
// let names = ['mario','Luigi', 'Toad '];

//let result = email.includes('@');
// let result = names.includes('Luigi')
// console.log(result);



//comparison operators
// let age = 25;
// console.log(age == 25);
// console.log(age == '25');

// console.log(age != 25);
// console.log(age != '25');

//Script Checking/ Script comparisson
// console.log(age === 25);
// console.log(age === '25');
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25); 

// let name = 'Briva'
// console.log(name =='Briva');

// //Type Conversion
// let score = '100';

//score = Number(score);
// console.log(score + 1);

// console.log(typeof score);

// let result = Number('hello') ;
// let result = String(50);

// let result = Boolean(100); 
// let result = Boolean(0); 

// let result = Boolean('0'); 
// console.log(result, typeof result); 


// for loops
// for (let i = 0; i < 5; i++){
//     console.log('in loop', i);

// } 
// console.log('loop Finished');

// const  names= ['Shaun', 'Mario', 'Luigi'];

// for(let i = 0; i < names.length; i ++){
//     // console.log(names[i]); 

//     let html = `<div> ${names[i]}</div>`
//     console.log(html);
// };

//while loops 
// let i = 0;

// while (i < 5){
//     console.log('In Loop', i);
//     i++;
// }

// const  names= ['Shaun', 'Mario', 'Luigi'];

// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

//do while loop
// let i = 0;

// do{
//     console.log('Val of i is', i);
//     i++;
// }

// while (i < 5); 

// //If Statements
// const age = 25;

// if (age>20){
//     console.log('you are over 20 Years old')

// }

// const ham = ['Shaun','ryu','chun-li', 'Yoshi'];
// if(ham.length>3){
//     console.log("That's alot of Ninjas")
// }
//  const password = 'password123456';

// //  if (password.length >= 12){
// //      console.log("That password is Mighty Strong")
// //  }
// //  else if (password.length >= 8){
// //      console.log("That password is long enough")
// //  } else{
// //      console.log("Password is not long enough")
// //  }

// //Logical operators OR || AND
// //  const password = 'pas@ sword123456';

// //  if (password.length >= 12 && password.includes('@')){
// //      console.log("That password is Mighty Strong")
// //  }
// //  else if (password.length >= 8 || password.includes('@')){
// //      console.log("That password is long enough")
// //  } else{
// //      console.log("Password is not long enough")
// //  }

// //Logical NOT
// // let user = false;

// // if (!user){
// //     console.log("You must be logged in to Continue"); 

// // }
// // console.log(!true);
// // console.log(!false);

// // break and continue

// // const scores = [50, 25, 0, 30, 100, 20, 10];

// // for (let i = 0; i < scores.length; i++){
// //     if(scores[i]=== 0){
// //         continue;
// //     }

// //     console.log('Your Score :',scores[1]);

// //     if(scores[1] === 100){
// //         console.log("Congtrats, You got the top score! ")
// //     }
// // }


// // // Switch statements
// // const grade = 'D';

// // switch (grade){
// //     case 'A':
// //         console.log('You got an A!');
// //         break;
// //     case 'B':
// //         console.log('You got a B!');
// //         break;
// //     case 'C':
// //         console.log('You got a C!');
// //         break;
// //     case 'D':
// //         console.log('You got a D!');
// //         break;
// //     case 'E':
// //         console.log('You got an E!');
// //         break;
// //     default:
// //         console.log('Not  valid grade!');

// // }

// //variable and block scope
// // let age = 30;
// // if(true){
// //     console.log(' Inside 1st Code Block', age)

// // }
// // console.log(' Outside Code Block', age)

// //Function declaration
// // function greet(){
// //     console.log("hello there!");
// // }

// // //function expression
// // const speak = function(){
// //     console.log("Good Day!")

// // };

// // greet();
// // greet();
// // greet();

// // speak();
// // speak();
// // speak();

// //function expression
// // const speak = function(name = 'Briva', time = 'Night'){
// //     console.log(`Good ${time}! ${name}`)

// // };

// // speak();
// // speak('hamisi', 'Day')
// // speak('Janefer')

// //regulat function
// // const calcArea = function(radius){
// //     return 3.14 * radius **2;

// // }
// // //arrow function
// // const calcArea = (radius)=>{
// //     return  3.14 * radius ** 2;
// // };
// // const area = calcArea(5);
// // console.log("Area Is:",area);

// // practice legular functions
// // const greet = function(){
// //     return 'hello, word';
// // }; 
// // const greet = () => 'hello, world'

// //  const result = greet();
// //  console.log(result);

// // const bill = function(products, tax){
// //     let total = 0;
// //     for (let i =0; i < products.length; i++){
// //         total += products[i] + products[i] * tax;
// //     }
// //     return total;
// // }

// // const bill = (products, tax) => {
// //     total = 0;
// //     for (let i =0; i < products.length; i++){
// //         total += products[i] + products[i] * tax;
// //     }
// //     return total;
// // };
// // console.log(bill([10, 15, 30], 0.2))


// // const name = 'Hamisi';

// // //fuctions
// // const greet = () => 'hello';
// // let resultOne = greet();
// // console.log(resultOne)

// // //methods
// // let resultTwo = name.toUppercase()
// // console.log(resultTwo)

// //callbacks and foreach
// // const myFunc = (callbackFunc) => {
// //     //do something
// //     let value = 50;
// //     callbackFunc(value);
// // };
// // myFunc(value => {
// //     //do something
// //     console.log(value);
// // }) 
// //call back function - we call another function into another function as an argumet
// // let people = ['mario', 'luigi', 'ryu','shaun', 'chun-li'];

// // const logPerson = (person, index)=>{ 
// //     console.log(`${(index)} - hello ${person}`);
// // }

// // people.forEach(logPerson);

// // people.forEach((person, index) =>{ 
// //     console.log(index, person); 
// // })

// //get a reference to the 'ul'
// // const ul = document.querySelector('.people');

// // let people = ['mario', 'luigi', 'ryu','shaun', 'chun-li'];

// // let html = ``; 
// // people.forEach((person)=>{
// //     //create a html template for each person
// //     html += `<li style = "color: purple"> ${person}<li>.`

// // })
// // console.log(html)
// // ul.innerHTML = html;


// //OBJECTS IN JAVASCRIPT
// //Object literals

// const blogs = [
//     { tittle: ' Why mac & Cheese rules', likes: 30 },
//     { tittle: '10 things to make with marmite', likes: 5 }
// ];
// // console.log(blogs);

// let user = {
//     name: 'Crystal',
//     age: 30,
//     email: 'crystal@tenetninja.co.uk',
//     location: 'berlin',
//     blogs: [
//         { tittle: ' Why mac & Cheese rules', likes: 30 },
//         { tittle: '10 things to make with marmite', likes: 5 }
//     ],
//     login: function() {
//         console.log('User logged in');
//     },
//     logout: function() {
//         console.log('User Logged out');

//     },
//     logBlogs: function() {
//         // console.log(this.blogs) 
//         console.log('This user Has written the following blogs');
//         this.blogs.forEach(blog => {
//             console.log(blog.tittle, blog.likes);
//         })
//     }

// };

// user.logBlogs();
// // console.log(user);
// // console.log(user.name);

// // user.age = 35;
// // console.log(user.age);

// // // const key = "location";
// // // console.log(user[key]); user['location']

// // console.log(user['name']);
// // console.log(user['email']);

// // user['name'] = 'Hamisi';
// // console.log(user['name'])
// // console.log(typeof user);

// user.login();
// user.logout();
// const name = ' Mario';

// console.log(this)


// // Math Object
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);


// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));


// // random numbers
// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100));

// primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//reference Values

// const userOne = { name: 'ryu', age: 30 };
// const userTwo = userOne;
// console.log(userOne, userTwo);

// userOne.age = 40;
// console.log(userOne, userTwo);

// const para = document.querySelector('div.error');
// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// // paras.forEach(para => {
// //     console.log(para);
// // });
// // const errors = document
// console.log(errors);


// get element by ID
// const title = document.getElementById('page-title');
// console.log(title);


// get element by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// get elements by their tag name

// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'Ninjas are awesome! '

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += 'new text'

// });

// const content = document.querySelector('.comtent');
// console.log(content.innerHTML);

// content.innerHTML = '<h2> This is a new H2</h2>';

// const people = ['Mario', 'Luigi', 'Yoshi'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.hamisiesq.co.uk/');
// link.innerText = 'Hamisi Esq Website';

// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', "success");
// msg.setAttribute('style', 'color: green;');

// const title = document.querySelector('h1');

// // title.setAttribute('style', 'margin: 50px');

// console.log(title.style);
// console.log(title.style.color);


// title.style.margin = '50px';
// title.style.color = 'crimson';

// title.style.fontSize = '60px';
// title.style.margin = '';

const content = document.querySelector('p');
console.log(content.classList);
content.classList.add('error');
content.classList.remove('error');

content.classList.add('success');