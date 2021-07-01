//Holds account options


//Once called, begin account menu
    //getBalance
        //Display total of funds in account
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
            
    //Manage Card 
        //Temporarily Disable card
        //Permanently Cancel Card

        module.exports = {
            balance: 2500,
            deposit: deposit(),
            withdraw: withdraw()
        }