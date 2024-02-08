//programa de calculo

const display = document.getElementById("display");

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value ="Error";
    }
 }

 function appendToDisplay(input){
    display.value += input;
 }
 function clearDisplay(){
    display.value = "";
 }
