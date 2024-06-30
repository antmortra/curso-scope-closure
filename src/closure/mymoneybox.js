/* function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log('MoneyBox:'+ ' ' + saveCoins);
}

moneyBox(40);
moneyBox(5); */

function moneyBox() {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log('moneyBox:'+ ' ' + saveCoins);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(30);


