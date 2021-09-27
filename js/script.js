

function toggleText(blogId) {

var parentContainer = event.target.closest(".travel-locations");

var points = parentContainer.querySelector("#points");

var showMoreText = parentContainer.querySelector("#moreText");

var buttonText = parentContainer.querySelector("#textButton");

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



