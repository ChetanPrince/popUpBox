const showBtn = document.getElementById("showPopUp");
const hideBtn = document.getElementById("closePopUp");
const shownContainer = document.getElementById("showContainer");
const hiddenContainer= document.getElementById("hideContainer");

showBtn.addEventListener("click", toggleContainers);
       
hideBtn.addEventListener("click", toggleContainers);

function toggleContainers(){

    shownContainer.classList.toggle("hide");
    hiddenContainer.classList.toggle("hide");
};

document.addEventListener("DOMContentLoaded", showPopUp);
function showPopUp(){
    shownContainer.classList.toggle("hide");
    hiddenContainer.classList.toggle("hide");
}
