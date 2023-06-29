//PREBUILT FILTER IDs
const prebuilt1 = document.getElementById("js--prebuilt1");
const prebuilt2 = document.getElementById("js--prebuilt2");
const prebuilt3 = document.getElementById("js--prebuilt3");
const prebuilt4 = document.getElementById("js--prebuilt4");
const prebuiltFilterHout = document.getElementById("js--prebuilt-hout");
const prebuiltFilterRood = document.getElementById("js--prebuilt-rood");
const prebuiltFilterWit = document.getElementById("js--prebuilt-wit");
const prebuiltFilter100 = document.getElementById("js--prebuilt-100");
const prebuiltFilter120 = document.getElementById("js--prebuilt-120");
const prebuiltFilter150 = document.getElementById("js--prebuilt-150");

//PREBUILT HOUT FILTER
let prebuiltHoutFilterOn = false;
prebuiltFilterHout.onclick = function(){
    if(prebuiltHoutFilterOn === false){
        prebuilt3.style.display = "none";
        prebuilt4.style.display = "none";
        prebuiltHoutFilterOn = true;
        prebuiltFilterHout.style.backgroundColor = "#0090e3";
    }
    else{
        prebuiltHoutFilterOn = false;
        prebuilt3.style.display = "flex";
        prebuilt4.style.display = "flex";
        prebuiltFilterHout.style.backgroundColor = "#ff6600";
    }
}

//PREBUILT ROOD FILTER
let prebuiltRoodFilterOn = false;
prebuiltFilterRood.onclick = function(){
    if(prebuiltRoodFilterOn === false){
        prebuilt1.style.display = "none";
        prebuilt3.style.display = "none";
        prebuilt4.style.display = "none";
        prebuiltRoodFilterOn = true;
        prebuiltFilterRood.style.backgroundColor = "#0090e3";
    }
    else{
        prebuiltRoodFilterOn = false;
        prebuilt1.style.display = "flex";
        prebuilt3.style.display = "flex";
        prebuilt4.style.display = "flex";
        prebuiltFilterRood.style.backgroundColor = "#ff6600";
    }
}

//PREBUILT WIT FILTER
let prebuiltWitFilterOn = false;
prebuiltFilterWit.onclick = function(){
    if(prebuiltWitFilterOn === false){
        prebuilt1.style.display = "none";
        prebuilt2.style.display = "none";
        prebuiltWitFilterOn = true;
        prebuiltFilterWit.style.backgroundColor = "#0090e3";
    }
    else{
        prebuiltWitFilterOn = false;
        prebuilt1.style.display = "flex";
        prebuilt2.style.display = "flex";
        prebuiltFilterWit.style.backgroundColor = "#ff6600";
    }
}

//PREBUILT FILTER 100
let prebuiltFilter100On = false;
prebuiltFilter100.onclick = function(){
    if(prebuiltFilter100On === false){
        prebuilt3.style.display = "none";
        prebuilt4.style.display = "none";
        prebuiltFilter100On = true;
        prebuiltFilter100.style.backgroundColor = "#0090e3";
    }
    else{
        prebuiltFilter100On = false;
        prebuilt3.style.display = "flex";
        prebuilt4.style.display = "flex";
        prebuiltFilter100.style.backgroundColor = "#ff6600";
    }
}

//PREBUILT FILTER 100
let prebuiltFilter120On = false;
prebuiltFilter120.onclick = function(){
    if(prebuiltFilter120On === false){
        prebuilt3.style.display = "none";
        prebuiltFilter120On = true;
        prebuiltFilter120.style.backgroundColor = "#0090e3";
    }
    else{
        prebuiltFilter120On = false;
        prebuilt3.style.display = "flex";
        prebuiltFilter120.style.backgroundColor = "#ff6600";
    }
}

//PREBUILT FILTER 150
let prebuiltFilter150On = false;
prebuiltFilter150.onclick = function(){
    if(prebuiltFilter150On === false){
        prebuiltFilter150On = true;
        prebuiltFilter150.style.backgroundColor = "#0090e3";
    }
    else{
        prebuiltFilter150On = false;
        prebuiltFilter150.style.backgroundColor = "#ff6600";
    }
}