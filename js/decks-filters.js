//DECKS FILTER IDs
const deck1 = document.getElementById("js--decks1");
const deck2 = document.getElementById("js--decks2");
const deck3 = document.getElementById("js--decks3");
const deck4 = document.getElementById("js--decks4");
const decksFilterRoze = document.getElementById("js--decks-roze");
const decksFilterRood = document.getElementById("js--decks-rood");
const decksFilterZwart = document.getElementById("js--decks-zwart");
const decksFilter20 = document.getElementById("js--decks-20");
const decksFilter50 = document.getElementById("js--decks-50");
const decksFilter75 = document.getElementById("js--decks-75");

//DECKS ROZE FILTER
let decksRozeFilterOn = false;
decksFilterRoze.onclick = function(){
    if(decksRozeFilterOn === false){
        deck2.style.display = "none";
        deck3.style.display = "none";
        decksRozeFilterOn = true;
        decksFilterRoze.style.backgroundColor = "#0090e3";
    }
    else{
        decksRozeFilterOn = false;
        deck2.style.display = "flex";
        deck3.style.display = "flex";
        decksFilterRoze.style.backgroundColor = "#ff6600";
    }
}

//DECKS ROOD FILTER
let decksRoodFilterOn = false;
decksFilterRood.onclick = function(){
    if(decksRoodFilterOn === false){
        deck1.style.display = "none";
        deck3.style.display = "none";
        deck4.style.display = "none";
        decksRoodFilterOn = true;
        decksFilterRood.style.backgroundColor = "#0090e3";
    }
    else{
        decksRoodFilterOn = false;
        deck1.style.display = "flex";
        deck3.style.display = "flex";
        deck4.style.display = "flex";
        decksFilterRood.style.backgroundColor = "#ff6600";
    }
}

//DECKS ZWART FILTER
let decksZwartFilterOn = false;
decksFilterZwart.onclick = function(){
    if(decksZwartFilterOn === false){
        deck1.style.display = "none";
        deck4.style.display = "none";
        decksZwartFilterOn = true;
        decksFilterZwart.style.backgroundColor = "#0090e3";
    }
    else{
        decksZwartFilterOn = false;
        deck1.style.display = "flex";
        deck4.style.display = "flex";
        decksFilterZwart.style.backgroundColor = "#ff6600";
    }
}

//DECKS FILTER 20
let decksFilter20On = false;
decksFilter20.onclick = function(){
    if(decksFilter20On === false){
        deck1.style.display = "none";
        deck2.style.display = "none";
        deck4.style.display = "none";
        decksFilter20On = true;
        decksFilter20.style.backgroundColor = "#0090e3";
    }
    else{
        decksFilter20On = false;
        deck1.style.display = "flex";
        deck2.style.display = "flex";
        deck4.style.display = "flex";
        decksFilter20On = false;
        decksFilter20.style.backgroundColor = "#ff6600";
    }
}

//DECKS FILTER 50
let decksFilter50On = false;
decksFilter50.onclick = function(){
    if(decksFilter50On === false){
        deck1.style.display = "none";
        deck2.style.display = "none";
        decksFilter50On = true;
        decksFilter50.style.backgroundColor = "#0090e3";
    }
    else{
        decksFilter50On = false;
        deck1.style.display = "flex";
        deck2.style.display = "flex";
        decksFilter50On = false;
        decksFilter50.style.backgroundColor = "#ff6600";
    }
}

//DECKS FILTER 75
let decksFilter75On = false;
decksFilter75.onclick = function(){
    if(decksFilter75On === false){
        decksFilter75On = true;
        decksFilter75.style.backgroundColor = "#0090e3";
    }
    else{
        decksFilter75On = false;
        decksFilter75On = false;
        decksFilter75.style.backgroundColor = "#ff6600";
    }
}