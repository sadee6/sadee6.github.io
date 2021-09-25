console.log("testing");

var points = document.getElementById("points");
    
var showMoreText = document.getElementById("moreText");

var buttonText = document.getElementById("textButton");


buttonText.addEventListener("onclick", toggleText);

function toggleText(blogId, spanClass) {
  console.log(document.getElementsByClassName(spanClass)[0]);
  console.log(document.getElementById(blogId));
  console.log(blogId, spanClass);

var showMoreText = document.getElementsByClassName(spanClass)[0];
var buttonText = document.getElementById(blogId);

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
