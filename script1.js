var runimageNumber = 1 ;
var runworker = 0 ;
  
function run() {
  alert(runworker)
  runimageNumber = runimageNumber + 1;

  if (runimageNumber == 9) {

    runimageNumber = 1;

  }
  document.getElementById("boy").src = "run" + runimageNumber +".png";



}


////..........................keycheck............. \\\\

function keyCheck(event) {
    var keycode = event.which;
  
    if (keycode == 13) {
  
      if (runworker == 0) {
  
        document.getElementById("start").style.visibility = "hidden";
        runworker = setInterval(run, 100);
        runsound.play();
  
  
        backgroundworker = setInterval(background, 100);
        scoreworker = setInterval(updatescore, 100);
        boxworker = setInterval(moveboxes, 100); // boxworker = fire ball worker \\
  
  
      }
    }
  
  
    if (keycode == 32) {
  
      if (jumpworker == 0) {
  
        document.getElementById("start").style.visibility = "hidden";
        clearInterval(runworker);
        runsound.pause();
  
  
        jumpworker = setInterval(jump, 100);
        jumpsound.play();
  
  
      }
  
    }
  
  
  
  }