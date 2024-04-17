function showPopupDetails() {
    var popup = document.getElementById("websiteDetails");
    popup.style.display = "block";
}


function hidePopupDetails() {
    var popup = document.getElementById("websiteDetails");
    popup.style.display = "none";
}


var header = document.querySelector("header");


header.addEventListener("mouseenter", showPopupDetails);
header.addEventListener("mouseleave", hidePopupDetails);
