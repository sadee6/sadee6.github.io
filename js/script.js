console.log("testing");

  
  
    // <!-- Trigger toggleText() when the 
    //     button is clicked -->


function toggleText() {
  
var points = document.getElementById("points");
console.log(points);
console.log(showMoreText);
console.log(buttonText);

var showMoreText = document.getElementById("moreText");
  
var buttonText = document.getElementById("textButton");
  

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

