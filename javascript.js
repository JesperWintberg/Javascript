let knapp = document.getElementById("knapp");
knapp.addEventListener("click", funk);

function funk(){
    document.getElementById("text").innerHTML = "snart är det";
}

let knapp2 = document.getElementById("knapp2");
knapp2.addEventListener("click", funk2);
function funk2(){
    alert("SOMMARLOV");
}