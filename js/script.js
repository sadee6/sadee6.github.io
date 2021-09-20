console.log("testing");


const touringNavButton = document.getElementById('touring-nav-button');

touringNavButton.addEventListener('click', followLink);

function followLink(){
  sideMenu.classList.add('show-menu');
}





// const gridImage = document.querySelector("#grid-image")
// console.log(gridImage);

// gridImage.addEventListener("mouseover", enlargeImage);

// function enlargeImage() {
// 	// gridImage.style.height="120%";
// 	// gridImage.style.width="120%";
// 	// gridImage.style.position='relative';
// 	gridImage.style.zIndex='1';
//  }

// gridImage.addEventListener("mouseleave", resetImage);

// function resetImage() {
// 	gridImage.style.height="100%";
// 	gridImage.style.width="100%";
// 	gridImage.style.position='relative';
//  }

