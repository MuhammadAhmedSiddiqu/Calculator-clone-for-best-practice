function abc(){
    var inputElement = document.getElementById("inputToShow");
    var inputValue = inputElement.value; 
    
    if (inputValue === "") {
        inputElement.value = "0";
    } else {
        var result = eval(inputValue);
        inputElement.value = result;
    }
}


function btndelete() {

    var inp= document.getElementById("inputToShow").value;
    var  slicee =inp.slice(0,-1);
    document.getElementById("inputToShow").value=slicee


}
function btnDoubleZero(){
    var value=document.getElementById("btndoubleXero").value;
    document.getElementById("inputToShow").value +=value
}



function removeAll(){
    document.getElementById("inputToShow").value="";
}


function btnZero() {
    var value=document.getElementById("btnzero").value;
    document.getElementById("inputToShow").value +=value
    
}
function btnOne() {
    var value=document.getElementById("btnone").value;
    document.getElementById("inputToShow").value +=value
    
}

function btnTwo() {
    var value=document.getElementById("btntwo").value;
    document.getElementById("inputToShow").value +=value
    
}
function btnThree() {
    var value=document.getElementById("btnthree").value;
    document.getElementById("inputToShow").value +=value
    
}
function btnFour() {
    var value=document.getElementById("btnfour").value;
    document.getElementById("inputToShow").value +=value
    
}
function btnfive() {
    var value=document.getElementById("btnfive").value;
    document.getElementById("inputToShow").value +=value
    
}
function btnSix() {
    var value=document.getElementById("btnsix").value;
    document.getElementById("inputToShow").value +=value
    
}
function btnSeven() {
    var value=document.getElementById("btnseven").value;
    document.getElementById("inputToShow").value +=value
    
}
function btnEight() {
    var value=document.getElementById("btneight").value;
    document.getElementById("inputToShow").value +=value
    
}
function btnNine() {
    var value=document.getElementById("btnnine").value;
    document.getElementById("inputToShow").value +=value
    
}

function btnMinus() {
    var value=document.getElementById("btnminus").value;
    document.getElementById("inputToShow").value +=value
    
}

function btnPercentage() {
    var value=document.getElementById("percentage").value;
    document.getElementById("inputToShow").value +=value
    
}


function btnDivide() {
    var value=document.getElementById("divide").value;
    document.getElementById("inputToShow").value +=value
    
}

function btnPlus() {
    var value=document.getElementById("plusss").value;
    document.getElementById("inputToShow").value +=value
    
}

function btnMultiply() {
    var value=document.getElementById("multiply").value;
    document.getElementById("inputToShow").value +=value
    
}

function btnDot() {
    var value=document.getElementById("dotts").value;
    document.getElementById("inputToShow").value +=value
    
}

function btnEquelTo(){
    var con= historytwo+"="+document.getElementById("inputToShow").value;
    document.getElementById("inputToHistory").value=con
   
}

var ar=[];
 function final(){
  ar.push(document.getElementById("inputToHistory").value)
  var lastindex=ar.length-1
    var printr=(ar[lastindex]+ " ")

 }


