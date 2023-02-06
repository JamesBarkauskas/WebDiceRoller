
// Eric Pogue's random number function
function RollDice() {
    document.getElementById("dice").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dice2").value = Math.floor(Math.random()*6) + 1;

}