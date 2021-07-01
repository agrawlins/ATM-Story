//Holds account options
const account = require('./account');
const wallet = require('./wallet');



//Once called, begin account menu
function getBalance(account){
    console.log(`Your current balance is ${account}`);
}
    //getBalance
        //Display total of funds in account
function makeWithdraw(){
    let request = prompt("How much would you like to withdraw?");
    if(checkOverdraft(request, account) === true && checkInterval(request) === true){
        let account = account - request;
        let wallet = wallet + request;
        console.log(`Your current balance is ${account}`);
        mainMenu();
        return account;
    } else if(checkOverdraft(request, account) === false){
        console.log("Look, buddy, here's how this works; first, you put money IN the bank, THEN you can take money OUT of it!");
        makeWithdraw(request);
    } else if(checkInterval(request) === false){
        console.log("This ain't a gas station, kid! We don't nickle and dime stuff here!");
        makeWithdraw(request);
    }
}

function makeDeposit(){
    let request = prompt("How much would you like to deposit?");
    if(checkOverdraft(request, wallet) === true){
        let account = account + request;
        let wallet = wallet - request;
        mainMenu();
        console.log(`Your current balance is ${account}`);
        return account;
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
    if(parseInt(request)%20 === true){
        return true;
    } else {
        return false;
    }
}
function verifyPIN(pin){
    if(parseInt(pin) === 1324){
        return true;
    } else {
        return false;
    }
}
    //Withdraw
        //Prompt for deposit amount to wallet.js
        //If (amount given in account.withdraw.prompt > amount in wallet.js {
            //console.log(Insufficient Funds)
            //})
            //withdraw from wallet.js, deposit to account.js
    //Deposit            
        //Prompt for withdrawal amount from wallet.js
            //If (amount given in account.withdraw.prompt > amount in wallet.js {
                //console.log(Insufficient Funds)
                //})
                //withdraw from account.js, deposit to wallet.js
module.exports = {
    balance: getBalance(),
    withdraw: makeWithdraw(),
    deposit: makeDeposit(),
    overdraft: checkOverdraft(),
    interval: checkInterval(),
    verify: verifyPIN()
}