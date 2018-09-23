//button modal
var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");
var openButton = document.querySelector("#open-button");

modal.classList.toggle("closed");
modalOverlay.classList.toggle("closed");

closeButton.addEventListener("click", function() {
modal.classList.toggle("closed");
modalOverlay.classList.toggle("closed");
});

openButton.addEventListener("click", function() {
modal.classList.toggle("closed");
modalOverlay.classList.toggle("closed");
});

//Tabs
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(cityName).style.display = "block";
    if (evt) {evt.currentTarget.classList.add("active");}
}