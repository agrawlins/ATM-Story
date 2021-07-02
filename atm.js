//Holds account options
const {balance, pin,} = require('./account');
const {wallet} = require('./wallet');



//Once called, begin account menu
function getBalance(balance){
    console.log(`Your current balance is ${balance}`);
}

function makeWithdraw(){
    let request = prompt("How much would you like to withdraw?");
    if(checkOverdraft(request, balance) === true && checkInterval(request) === true){
        let balance = balance - request;
        let wallet = wallet + request;
        console.log(`Your current balance is ${balance}`);
        return balance && wallet;
    } else if(checkOverdraft(request, balance) === false){
        console.log("Look, buddy, here's how this works; first, you put money IN the bank, THEN you can take money OUT of it!");
        makeWithdraw(request);
    } else if(checkInterval(request) === false){
        console.log("This ain't a gas station, kid! We don't nickle and dime stuff here!");
        makeWithdraw(request);
    }
}

function makeDeposit(){
    let request = prompt("How much would you like to deposit?");
    if(checkOverdraft(request, balance) === true){
        let balance = balance + request;
        let wallet = wallet - request;
        console.log(`Your current balance is ${balance}`);
        return account && wallet;
    }else{
        console.log("Oof, you don't even have THAT much?! You should really think about a career change...");
    }
}

function checkOverdraft(request, depositor){
    if(parseInt(request) > parseInt(depositor)){
        return true;
    } else {
        return false;
    }
}

function checkInterval(request){
    if(parseInt(request) % 20 === 0){
        return true;
    } else {
        return false;
    }
}
function verifyPIN(string){
    if(parseInt(string) === 1324){
        return true;
    } else {
        return false;
    }
}

module.exports = {
    balance: getBalance,
    withdraw: makeWithdraw,
    deposit: makeDeposit,
    overdraft: checkOverdraft,
    interval: checkInterval,
    verify: verifyPIN
}