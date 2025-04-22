// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// console.log(typeof age);
// console.log('You are ' + age +' years old');
// console.log("The price is $" + price);
// console.log("Your gpa is:" + gpa)



// let firstName = "Bro";
// let favoriteFood = "pizza";
// let email = "fake123@gmail.com";

// console.log(typeof firstName);
// console.log("Your name is " + firstName);
// console.log("you like " + favoriteFood);
// console.log("Your email is " + email);



// let online = false;
// let forSale = true;
// let isStudent = true;

// console.log("Bro is online: " + online);
// console.log("Is this car for sale: " + forSale);
// console.log("Enrolled: " + isStudent);



// let fullName = "Bro Code";
// let age = 25;
// let student = true;

// document.getElementById("p1").textContent = fullName;
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = "Enrolled: " + student;



// let students = 30;

// //+ - * / **(power of) % 


// console.log(students);



// let username;

// username = window.prompt("What's your username?"); // 让用户输入

// console.log(username);



// let username;

// document.getElementById("mySubmit").onclick = function(){
//   username = document.getElementById("myTex").value;
//   document.getElementById("myH1").textContent = "Hello " + username;
// }



// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1;

// console.log(age, typeof age);



//const = variable that can't be changed
// const pi = 3.14159;
// let redius;
// let circumference;


// document.getElementById("mySubmit").onclick = function() {
//   radius = document.getElementById("mytext").value;
//   radius = Number(radius);
//   circumference = 2 * pi * radius;
//   document.getElementById("myH3").textContent = circumference + " cm";
// }



// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function(){
//   count++;
//   countLabel.textContent = count;
// }

// decreaseBtn.onclick = function(){
//   count--;
//   countLabel.textContent = count;
// }

// resetBtn.onclick = function(){
//   count = 0;
//   countLabel.textContent = count;
// }



// let x = 3.21;
// let y = 2;
// let z;

// // z = Math.round(x); // 四舍五入
// // z = Math.floor(x); // 向下取整
// // z = Math.ceil(x); // 向上取整
// // z = Math.pow(x, y); // x的y次方
// // z = Math.sqrt(x); // x的平方根
// // z = Math.trunc(x); // 取整数部分
// // z = Math.abs(x); // 绝对值 
// // z = Math.signs(x); // 正数返回1，负数返回-1，0返回0
// // z = Math.max(x, y); // 最大值
// // z = Math.min(x, y); // 最小值
// // z = Math.PI; // 圆周率

// console.log(z);



// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() *(max - min)) + min;  

// console.log(randomNum);



// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function(){
//   randomNum1 = Math.floor(Math.random() * max) + min;
//   randomNum2 = Math.floor(Math.random() * max) + min;
//   randomNum3 = Math.floor(Math.random() * max) + min;
//   label1.textContent = randomNum1;
//   label2.textContent = randomNum2;
//   label3.textContent = randomNum3;
// }



// let age = 25;

// if(age >= 18){
//   console.log("You are old enough to enter this site.");
// }
// else{
//   console.log("You must be 18+ to enter this site.");
// }



// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const mastercardBtn = document.getElementById("mastercardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult")

// mySubmit.onclick = function(){
//   if(myCheckbox.checked){
//     subResult.textContent = "You are subscribed!";
//   }
//   else{
//     subResult.textContent = "You are NOT subscribed!";
//   }

//   if(visaBtn.checked){
//     paymentResult.textContent = "You are paying with Visa!";
//   }
//   else if(mastercardBtn.checked){
//     paymentResult.textContent = "You are paying with MasterCard!";
//   }
//   else if(payPalBtn.checked){
//     paymentResult.textContent = "You are paying with PayPal!";
//   }
//   else{
//     paymentResult.textContent = "You must select a payment type!";
//   }
// }
