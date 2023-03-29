/*
Description: This Program replicates part of a game of Yahtzee. Well, better put,
it helps you get a "Yahtzee". Overall, the goal and process is simple: 
(1) write in the input box the number Yahtzee you want to roll
(2) On clicking the button, the code will roll 5 "dice" that will 
generate random numbers until they match the number you want. When each
die matches the number, an image of a die displaying that number will show, 
and the program will list out how many rolls each die required, along with 
totalling up the number of rows.
(3) This program uses functions to do these specific tasks, making the code look quite clean :)
*/


function rollTheDie() {

    //them variables
    var userYahtzee;
    var die1; //each one of these represents the value of the roll
    var die2;
    var die3;
    var die4;
    var die5;
    var d1Count = 0; //each is the number of times it took to match userYahtzee
    var d2Count = 0;
    var d3Count = 0;
    var d4Count = 0;
    var d5Count = 0;

    //getting value of userYahtzee from the DOM
    userYahtzee = parseInt(document.getElementById("input").value);
    //alert(userYahtzee);

    //checks to see if the number selected, is indeed a number and is between 1 and 6
    //(you know, like all normal dice, none of that Scattergories nonsense)
    if (userYahtzee < 1 || userYahtzee > 6 || isNaN(userYahtzee)) {
        alert("Invalid input. Must be number between 1 and 6.");
        document.getElementById("input").focus();
        return;
    }

    //for each die, there is a do-while loop that calls all but one of the other functions:

    //roll die 1, count how many rolls it takes, display image, and display that number
    do {
        die1 = Math.floor((Math.random() * 6) + 1);
        d1Count = countRoll(d1Count);
    } while (die1 != userYahtzee);
    debugger;
    displayImage(die1, "die1");
    displayCount("d1Rolls", 1, d1Count);

    //alert(d1Count);
    //roll die 2, count how many rolls it takes, display image, and display that number
    do {
        die2 = Math.floor((Math.random() * 6) + 1);
        d2Count = countRoll(d2Count);
    } while (die2 != userYahtzee);
    displayImage(die2, "die2");
    displayCount("d2Rolls", 2, d2Count);

    //roll die 3, count how many rolls it takes, display image, and display that number
    do {
        die3 = Math.floor((Math.random() * 6) + 1);
        d3Count = countRoll(d3Count);
    } while (die3 != userYahtzee);
    displayImage(die3, "die3");
    displayCount("d3Rolls", 3, d3Count);

    //roll die 4, count how many rolls it takes, display image, and display that number
    do {
        die4 = Math.floor((Math.random() * 6) + 1);
        d4Count = countRoll(d4Count);
    } while (die4 != userYahtzee);
    displayImage(die4, "die4");
    displayCount("d4Rolls", 4, d4Count);

    //roll die 5, count how many rolls it takes, display image, and display that number
    do {
        die5 = Math.floor((Math.random() * 6) + 1);
        d5Count = countRoll(d5Count);
    } while (die5 != userYahtzee);
    displayImage(die5, "die5");
    displayCount("d5Rolls", 5, d5Count);

    //display total count in DOM
    totalCount(d1Count, d2Count, d3Count, d4Count, d5Count);
}

//increments the parameter fed into the function by 1 every time it's called
function countRoll(dCount) {
    //increments the passed in var by 1
    dCount++;
    return dCount;
}

//displays image based on what number is rolled
function displayImage(diceNum, imgID) {
    var img;
    if (diceNum === 1) {
        img = document.getElementById(imgID).src = "../img/die1.png";
    }
    else if (diceNum === 2) {
        img = document.getElementById(imgID).src = "../img/die2.png";
    }
    else if (diceNum === 3) {
        img = document.getElementById(imgID).src = "../img/die3.png";
    }
    else if (diceNum === 4) {
        img = document.getElementById(imgID).src = "../img/die4.png";
    }
    else if (diceNum === 5) {
        img = document.getElementById(imgID).src = "../img/die5.png";
    }
    else {
        img = document.getElementById(imgID).src = "../img/die6.png";
    }
    return img;
}

//displays the count of rolls per die needed (displays in DOM)
function displayCount(htmlID, dieNum, dieCount) {
    var output;
    output = document.getElementById(htmlID).innerHTML =
        "Dice " + dieNum + " Rolls = " + dieCount;
    return output;
}

//stores the totalCount variable, totals up the count, and displays it in the DOM
function totalCount(d1, d2, d3, d4, d5) {
    //keeps total count variable
    var totalCount;
    totalCount = "Total # of Rolls: " + (d1 + d2 + d3 + d4 + d5);
    document.getElementById("tCount").innerHTML = totalCount;
    return totalCount;
}