
function toggleText(blogId) {
// console.log(blogId);

var parentContainer = event.target.closest(".travel-locations");
// console.log(parentContainer);
var points = parentContainer.querySelector("#points");
// console.log(points);
var showMoreText = parentContainer.querySelector("#moreText");
// console.log(showMoreText);
var buttonText = parentContainer.querySelector("#textButton");
// console.log(buttonText);

buttonText.addEventListener("onclick", toggleText);

if (points.style.display === "none") {

  showMoreText.style.display = "none";
    
  points.style.display = "inline";
    
  buttonText.innerHTML = "Show More";
  }
    
else {

  showMoreText.style.display = "inline";
    
  points.style.display = "none";
    
  buttonText.innerHTML = "Show Less";
  }
}


