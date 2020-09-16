var randomnumber1 = Math.floor(Math.random()*6)+1;

var randondiceimage1 = "images/dice"+randomnumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src", randondiceimage1);

var randomnumber2 = Math.floor(Math.random()*6)+1;

var randondiceimage2 = "images/dice"+randomnumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randondiceimage2);

if(randomnumber2 > randomnumber1 ){
    document.querySelector("h1").innerHTML = "Player 2 wins 💥";
	document.querySelector("h6").innerHTML = "Refresh to Play Again";

}
else if(randomnumber2 < randomnumber1 ){
    document.querySelector("h1").innerHTML = "💥 Player 1 wins";
document.querySelector("h6").innerHTML = "Refresh to Play Again";

}
else{
   document.querySelector("h1").innerHTML = "Draw!";
document.querySelector("h6").innerHTML = "Refresh to Play Again";

}