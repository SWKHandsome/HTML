let xp = 0; 
let health = 100;
let gold = 50;
let currentWeapon = 0; 
let fighting;
let monsterHealth; 
let inventory = ["stick"]; 

const button1 = document.querySelector("#button1");  
const button2 = document.querySelector("#button2"); 
const button3 = document.querySelector("#button3");   
const text = document.querySelector("#text"); 
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText"); 
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth"); 

// 评论

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;


function goTown() {
  button1.innerText = "Go to store"; // 修改按钮文本
  button2.innerText = "Go to cave";
  button3.innerText = "Fight dragon";
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  text.innerText = "You are in the town square. You see a sign that says \"store\"."; // \"\" 让系统知道在""里面显示""
}

function goStore() {
  button1.innerText = "Buy 10 health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)";
  button3.innerText = "Go to town square";
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  text.innerText = "You enter the store.";
}

function goCave() {
  console.log("Going to cave.")
}

function fightDragon() {
  console.log("Fighting dragon.")
}

function buyHealth() {

}

function buyWeapon() {

}

function goTown() {

}