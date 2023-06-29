const preview1 = document.getElementById("js--preview-img-1");
const preview2 = document.getElementById("js--preview-img-2");
const preview3 = document.getElementById("js--preview-img-3");
const displayedImg = document.getElementById("js--displayed-img");

preview1.onclick = function(){
    displayedImg.src = "img/deck1.webp"
    preview1.style.border = "#0090e3 0.1rem solid";
    preview2.style.border = "black 0.1rem solid";
    preview3.style.border = "black 0.1rem solid";
}

preview2.onclick = function(){
    displayedImg.src = "img/deck1-2.webp"
    preview2.style.border = "#0090e3 0.1rem solid";
    preview1.style.border = "black 0.1rem solid";
    preview3.style.border = "black 0.1rem solid";
}

preview3.onclick = function(){
    displayedImg.src = "img/deck1-3.webp"
    preview3.style.border = "#0090e3 0.1rem solid";
    preview1.style.border = "black 0.1rem solid";
    preview2.style.border = "black 0.1rem solid";
}