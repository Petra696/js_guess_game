// Groet aan de gebruiker
function myFunction() {
    var person = prompt("Welcome!", "What is your name?");
    if (person != null) {
        document.getElementById("demo").innerHTML =
            "Hey! " + person + " ,like to play the game?";
    }
};

// realistic chance to win random nummer tussen 0 - 25
document.getElementById("demo").innerHTML =
    Math.floor(Math.random() * 26);

// Enter number, fill in number and press enter
var input = document.getElementById("myInput");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});

//message user
const guessnumber = function (number) {
    if (number < 26) {
        return "Congratulations, you have won the game!";
    } else {
        return "Unfortunately, that is not correct";

    }
};
console.log(guessnumber(15));
console.log(guessnumber(30));

//game over
function myFunction() {
    var person1 = prompt("Game over");
    if (person1 != null) {
        document.getElementById("demo").innerHTML =
            "Hey! " + person1 + " ,see you next time!";
    }
};


