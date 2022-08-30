var colors = generaterandarr(6);
var sq = document.querySelectorAll(".square");
var colordisp = document.querySelector("#colordisp");
var head = document.querySelector("#head");
var a = document.querySelector("a");
var para = document.querySelector("p");
var newcol = document.querySelector("#new")
var pickedColor = colors[randomnum()];
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var dark = document.querySelector("input");
var num = 6;
colors =(generaterandarr(num));
setsqcol(colors);
pickedColor = colors[randomnum(num)];
colordisp.textContent = pickedColor;
newcol.addEventListener("click",function (){
    newcol.classList.add("selected");
    easy.classList.remove("selected");
    hard.classList.remove("selected");
    colors =(generaterandarr(num));
    setsqcol(colors);
    if(num==3){
        diss3();
    }
    pickedColor = colors[randomnum(num)];
    colordisp.textContent = pickedColor;
    para.textContent = "";

});
easy.addEventListener("click",function(){
    num = 3;
    easy.classList.add("selected");
    hard.classList.remove("selected");
    newcol.classList.remove("selected");
    colors =(generaterandarr(num));
    setsqcol(colors);
    pickedColor = colors[randomnum(num)];
    colordisp.textContent = pickedColor;
    diss3();
    para.textContent = "";
    newcol.textContent="New Color";
}
);
hard.addEventListener("click",function(){
    num = 6;
    hard.classList.add("selected");
    easy.classList.remove("selected");
    newcol.classList.remove("selected");
    colors =(generaterandarr(num));
    setsqcol(colors);
    pickedColor = colors[randomnum(num)];
    colordisp.textContent = pickedColor;
    para.textContent = "";
        newcol.textContent="New Color";
    ;}
);
setsqcol(colors);

for(var i=0;i<sq.length;i++){
    //event listener
sq[i].addEventListener("click",function (){
    var clickedcol = this.style.backgroundColor;
    if(pickedColor===clickedcol){
        head.style.backgroundColor = clickedcol;
        para.textContent = "Correct!";
        newcol.textContent="Play Again?";
        allcolor(pickedColor);
    }
    else{
        this.style.backgroundColor = "#D4F1F4";
        this.style.filter = "none";
        para.textContent = "Try Again!";
        newcol.textContent="Play Again?";
        
    }
});
}

function generaterandarr(num){
    var arr = [];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function randomnum(num){
	var x = Math.floor(Math.random() * (num));
    return x;
}

function allcolor(color){
    var x = sq.length;
    if(num==3)
        x = 3;
        for(var i=0;i<x;i++){
        sq[i].style.backgroundColor = color;
}
}

function setsqcol(colors){
for(var i=0;i<sq.length;i++){
    //initial colors
sq[i].style.backgroundColor = colors[i];}}

function diss3(){
    for(var i=3;i<6;i++){
        sq[i].style.backgroundColor = "#D4F1F4";
        sq[i].style.filter = "none";
        }
        }

