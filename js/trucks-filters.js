//TRUCKS FILTER IDs
const trucks1 = document.getElementById("js--trucks1");
const trucks2 = document.getElementById("js--trucks2");
const trucks3 = document.getElementById("js--trucks3");
const trucks4 = document.getElementById("js--trucks4");
const trucksFilterSilver = document.getElementById("js--trucks-silver");
const trucksFilterWit = document.getElementById("js--trucks-wit");
const trucksFilterGoud = document.getElementById("js--trucks-goud");
const trucksFilter40 = document.getElementById("js--trucks-40");
const trucksFilter50 = document.getElementById("js--trucks-50");
const trucksFilter60 = document.getElementById("js--trucks-60");


//TRUCKS SILVER FILTER
let trucksSilverFilterOn = false;
trucksFilterSilver.onclick = function(){
    if(trucksSilverFilterOn === false){
        trucks2.style.display = "none";
        trucks3.style.display = "none";
        trucksSilverFilterOn = true;
        trucksFilterSilver.style.backgroundColor = "#0090e3";
    }
    else{
        trucksSilverFilterOn = false;
        trucks2.style.display = "flex";
        trucks3.style.display = "flex";
        trucksFilterSilver.style.backgroundColor = "#ff6600";
    }
}

//TRUCKS WIT FILTER
let trucksWitFilterOn = false;
trucksFilterWit.onclick = function(){
    if(trucksWitFilterOn === false){
        trucks1.style.display = "none";
        trucks3.style.display = "none";
        trucks4.style.display = "none";
        trucksWitFilterOn = true;
        trucksFilterWit.style.backgroundColor = "#0090e3";
    }
    else{
        trucksWitFilterOn = false;
        trucks1.style.display = "flex";
        trucks3.style.display = "flex";
        trucks4.style.display = "flex";
        trucksFilterWit.style.backgroundColor = "#ff6600";
    }
}

//TRUCKS GOUD FILTER
let trucksGoudFilterOn = false;
trucksFilterGoud.onclick = function(){
    if(trucksGoudFilterOn === false){
        trucks1.style.display = "none";
        trucks2.style.display = "none"
        trucks4.style.display = "none";
        trucksGoudFilterOn = true;
        trucksFilterGoud.style.backgroundColor = "#0090e3";
    }
    else{
        trucksGoudFilterOn = false;
        trucks1.style.display = "flex";
        trucks2.style.display = "flex";
        trucks4.style.display = "flex";
        trucksFilterGoud.style.backgroundColor = "#ff6600";
    }
}

//TRUCKS FILTER 40
let trucksFilter40On = false;
trucksFilter40.onclick = function(){
    if(trucksFilter40On === false){
        trucks1.style.display = "none";
        trucks2.style.display = "none";
        trucks3.style.display = "none";
        trucksFilter40On = true;
        trucksFilter40.style.backgroundColor = "#0090e3";
    }
    else{
        trucks1.style.display = "flex";
        trucks2.style.display = "flex";
        trucks3.style.display = "flex";
        trucksFilter40On = false;
        trucksFilter40.style.backgroundColor = "#ff6600";
    }
}

//TRUCKS FILTER 50
let trucksFilter50On = false;
trucksFilter50.onclick = function(){
    if(trucksFilter50On === false){
        trucks2.style.display = "none";
        trucks3.style.display = "none";
        trucksFilter50On = true;
        trucksFilter50.style.backgroundColor = "#0090e3";
    }
    else{
        trucks2.style.display = "flex";
        trucks3.style.display = "flex";
        trucksFilter50On = false;
        trucksFilter50.style.backgroundColor = "#ff6600";
    }
}

//TRUCKS FILTER 60
let trucksFilter60On = false;
trucksFilter60.onclick = function(){
    if(trucksFilter60On === false){
        trucksFilter60On = true;
        trucksFilter60.style.backgroundColor = "#0090e3";
    }
    else{
        trucksFilter60On = false;
        trucksFilter60.style.backgroundColor = "#ff6600";
    }
}