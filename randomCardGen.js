let suites = ["hearts", "spades", "clubs", "diamonds"];
let royals = ["ace", "king", "queen", "jack"];
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];


let randomCard = () => {
    let randomSuite = Math.floor(Math.random() * (5 - 1)) + 1;
    let cardValue = Math.floor(Math.random() * (15 - 2)) + 1;
    console.log(randomSuite);
    console.log(cardValue);
    let topSuite = document.getElementById("topSuite");
    let botSuite = document.getElementById("botSuite");
    let inserCardValue = document.getElementById("value")
    console.log(inserCardValue);
    let hearts = "&hearts;";
    let spades = "&spades;";
    let clubs = "&clubs;";
    let diamonds = "&diams;";

    if (randomSuite === 1) {
        topSuite.innerHTML = hearts;
        topSuite.style.color = "red";
        botSuite.innerHTML = hearts;
        botSuite.style.color = "red";
    } else if (randomSuite === 2) {
        topSuite.innerHTML = spades;
        topSuite.style.color = "black";
        botSuite.innerHTML = spades;
        botSuite.style.color = "black";
    } else if (randomSuite === 3) {
        topSuite.innerHTML = clubs;
        topSuite.style.color = "black";
        botSuite.innerHTML = clubs;
        botSuite.style.color = "black";
    } else if (randomSuite === 4) {
        topSuite.innerHTML = diamonds;
        topSuite.style.color = "red";
        botSuite.style.color = "red";
        botSuite.innerHTML = diamonds;
    }

    switch(cardValue) {
        case 1:
            return inserCardValue.innerHTML = "2";
            break;
        case 2:
            return inserCardValue.innerHTML = "3";
            break;
        case  3:
            return inserCardValue.innerHTML = "4";
            break;
        case 4:
            return inserCardValue.innerHTML = "5";
            break;
        case 5:
            return inserCardValue.innerHTML = "6";
            break;
        case 6:
            return inserCardValue.innerHTML = "7";
            break;
        case 7:
            return inserCardValue.innerHTML = "8";
            break;
        case 8:
            return inserCardValue.innerHTML = "9";
            break;
        case 9:
            return inserCardValue.innerHTML = "10";
            break;
        case 10:
            return inserCardValue.innerHTML = "J";
            break;
        case 11:
            return inserCardValue.innerHTML = "Q";
            break;
        case 12:
            return inserCardValue.innerHTML = "K";
            break;
        case 13:
            return inserCardValue.innerHTML = "A";
            break;
        } 

    console.log(topSuite, botSuite, cardValue);
}
window.onload = randomCard();
