
var num1=Math.floor(Math.random()*6) + 1;
var num2=Math.floor(Math.random()*6)+ 1;



if(num1===num2)
{
    document.querySelector("h2").innerHTML="<em>It's draw !!</em>";
}
else if(num2 < num1)
{
    document.querySelector("h2").innerHTML="<em>Player 1 Wins !!</em>";
}
else
{
    document.querySelector("h2").innerHTML="<em>Player 2 Wins !!</em>";
}
document.querySelector(".img1").setAttribute("src","images/dice"+ num1 +".png");


document.querySelector(".img2").setAttribute("src","images/dice"+num2+".png");

console.log("images/dice"+ num1 +".png");