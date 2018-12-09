function bold() {
    document.getElementById("paragraph").style.fontWeight = "bold";
}
function normal(){
    document.getElementById("paragraph").style.fontStyle = 'normal';
    document.getElementById("paragraph").style.fontWeight = 'normal';
    document.getElementById("paragraph").style.textDecoration = 'none'; 

}
function italic() {
   
    document.getElementById("paragraph").style.fontStyle = 'italic';
}

function police() {
    var police = document.getElementById('pl').value
    document.getElementById("paragraph").style.fontFamily = police;
}

function taille() {
    var size=document.getElementById('sz').value;
    document.getElementById("paragraph").style.fontSize = size+"px";
}
function underline() {

    document.getElementById("paragraph").style.textDecoration = "underline"; 
}