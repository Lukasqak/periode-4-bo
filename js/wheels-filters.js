//WHEELS FILTER IDs
const wheels1 = document.getElementById("js--wheels1");
const wheels2 = document.getElementById("js--wheels2");
const wheels3 = document.getElementById("js--wheels3");
const wheels4 = document.getElementById("js--wheels4");
const wheelsFilterBlauw = document.getElementById("js--wheels-blauw");
const wheelsFilterGroen = document.getElementById("js--wheels-groen");
const wheelsFilterZwart = document.getElementById("js--wheels-zwart");
const wheelsFilter25 = document.getElementById("js--wheels-25");
const wheelsFilter35 = document.getElementById("js--wheels-35");
const wheelsFilter45 = document.getElementById("js--wheels-45");

//WHEELS BLAUW FILTER
let wheelsBlauwFilterOn = false;
wheelsFilterBlauw.onclick = function(){
    if(wheelsBlauwFilterOn === false){
        wheels1.style.display = "none";
        wheels3.style.display = "none";
        wheels4.style.display = "none";
        wheelsBlauwFilterOn = true;
        wheelsFilterBlauw.style.backgroundColor = "#0090e3";
    }
    else{
        wheelsBlauwFilterOn = false;
        wheels1.style.display = "flex";
        wheels3.style.display = "flex";
        wheels4.style.display = "flex";
        wheelsFilterBlauw.style.backgroundColor = "#ff6600";
    }
}

//WHEELS GROEN FILTER
let wheelsGroenFilterOn = false;
wheelsFilterGroen.onclick = function(){
    if(wheelsGroenFilterOn === false){
        wheels2.style.display = "none";
        wheels3.style.display = "none";
        wheels4.style.display = "none";
        wheelsGroenFilterOn = true;
        wheelsFilterGroen.style.backgroundColor = "#0090e3";
    }
    else{
        wheelsGroenFilterOn = false;
        wheels2.style.display = "flex";
        wheels3.style.display = "flex";
        wheels4.style.display = "flex";
        wheelsFilterGroen.style.backgroundColor = "#ff6600";
    }
}

//WHEELS ZWART FILTER
let wheelsZwartFilterOn = false;
wheelsFilterZwart.onclick = function(){
    if(wheelsZwartFilterOn === false){
        wheels1.style.display = "none";
        wheels2.style.display = "none";
        wheelsZwartFilterOn = true;
        wheelsFilterZwart.style.backgroundColor = "#0090e3";
    }
    else{
        wheelsZwartFilterOn = false;
        wheels1.style.display = "flex";
        wheels2.style.display = "flex";
        wheelsFilterZwart.style.backgroundColor = "#ff6600";
    }
}

//WHEELS FILTER 25
let wheelsFilter25On = false;
wheelsFilter25.onclick = function(){
    if(wheelsFilter25On === false){
        wheels4.style.display = "none";
        wheels2.style.display = "none";
        wheels3.style.display = "none";
        wheelsFilter25On = true;
        wheelsFilter25.style.backgroundColor = "#0090e3";
    }
    else{
        wheels4.style.display = "flex";
        wheels2.style.display = "flex";
        wheels3.style.display = "flex";
        wheelsFilter25On = false;
        wheelsFilter25.style.backgroundColor = "#ff6600";
    }
}

//WHEELS FILTER 35
let wheelsFilter35On = false;
wheelsFilter35.onclick = function(){
    if(wheelsFilter35On === false){
        wheels2.style.display = "none";
        wheels3.style.display = "none";
        wheelsFilter35On = true;
        wheelsFilter35.style.backgroundColor = "#0090e3";
    }
    else{
        wheels2.style.display = "flex";
        wheels3.style.display = "flex";
        wheelsFilter35On = false;
        wheelsFilter35.style.backgroundColor = "#ff6600";
    }
}

//WHEELS FILTER 45
let wheelsFilter45On = false;
wheelsFilter45.onclick = function(){
    if(wheelsFilter45On === false){
        wheelsFilter45On = true;
        wheelsFilter45.style.backgroundColor = "#0090e3";
    }
    else{
        wheelsFilter45On = false;
        wheelsFilter45.style.backgroundColor = "#ff6600";
    }
}