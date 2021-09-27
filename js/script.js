

function toggleText(blogId) {
// console.log(blogId);

// find elements within the closest .travel-locations container
var parentContainer = event.target.closest(".travel-locations");

// assign variables from within the parent container
var points = parentContainer.querySelector("#points");

var showMoreText = parentContainer.querySelector("#moreText");

var buttonText = parentContainer.querySelector("#textButton");

// when button clicked within the parent container then do below...
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



