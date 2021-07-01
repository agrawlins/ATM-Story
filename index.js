//const {something} = require('./somethingElse'); <== just a formula for 
const atm = require('./atm');
const prompt = require('prompt-sync')();

function mainMenu(){
    let username = prompt('(Your pin is "1-3-2-4" \n Hello, and welcome to Embezzlers (now Mafia)! Please enter your username:');
    let pin = prompt('Please enter your four-digit PIN:')
        if(verifyPIN(pin) === true){
            return subMenu(username);
        } else {
            console.log("Well, THAT wasn't it...")
    }
}

function subMenu(username){
    let selection = prompt(`Welcome back, ${username}! How can we *help* you today? \n 1) Check Account Balance \n 2) Withdrawal \n 3) Deposit \n 4) Exit`);
    switch(selection){
        case "1":
            getBalance(account);
        case "2":
            withdraw();
        case "3":
            deposit();
        case "4":
            mainMenu();
        case (selection != "1" && selection != "2" && selection != "3" && selection != "4"):
            console.log("Well, it's clear you were never tought how to follow instructions... Try again.");
            subMenu(username);
    }   
}


