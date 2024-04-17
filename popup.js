function openPopup() {
    var popup = document.getElementById("locationPopup");
    popup.style.display = "block";
}


function closePopup() {
    var popup = document.getElementById("locationPopup");
    popup.style.display = "none";
}


window.onload = function() {
    openPopup();
};
