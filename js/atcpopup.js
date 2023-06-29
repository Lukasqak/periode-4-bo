const atcpopup = document.getElementById("atcpopup");
const atcbutton = document.getElementsByClassName("atcbutton");

let atcpopupOn = false;

for(let i = 0; i < atcbutton.length; i++){
    atcbutton[i].onclick = function(){
        if(atcpopupOn === false){
            atcpopup.style.display = "flex";
            atcpopupOn = true
            setTimeout(function(){
                atcpopup.style.display = "none";
                atcpopupOn = false;
            },2000);
        }
    }
}