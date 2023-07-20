// Your code here

// const dodger = document.getElementById("dodger")


// dodger.style.backgroundColor = "#FF69B4";



// //moves the dodger to the left by 1 pixel
// function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);
  
//     // Check if the left position is greater than 0 (not at the left-most edge)
//     if (left > 0) {
//       dodger.style.left = `${left - 1}px`;// Move the dodger to the left by 1 pixel
//     }
//   }

  
//   function moveDodgerRight(){
//     const leftNumbers = dodger.style.left.replace("px","");
//     const left = parseInt(leftNumbers,10);
    
//     if (right < 360){
//         dodger.style.left = `${left + 1}px`;
//     }
//   }

  
var dodger = document.getElementById('dodger');
      
dodger.style.backgroundColor = "#ff69b4";
      
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
        
  if ( left > 0 ) {
    dodger.style.left = `${left - 4}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);

  if ( left < 360) {
    dodger.style.left = `${left + 4}px`;
  }
}
      
document.addEventListener('keydown', function(e) {
  if ( e.which === 37 ) {
    moveDodgerLeft();
  }
  if ( e.which === 39 ) {
    moveDodgerRight();
  }
});
