var runSound = new Audio("run.mp3");
var jumpSound = new Audio("jump.mp3");
var deadSound = new Audio("dead.mp3");
var winSound = new Audio("win.mp3");


////..........................keyCheck............. \\\\

function keyCheck(event) {
  var keycode = event.which;

  // alert (keycode);

  if (keycode == 13) {

    if (runWorker == 0) {

      document.getElementById("start").style.visibility = "hidden";
      runWorker = setInterval(run, 100);
      runSound.play();


      backgroundWorker = setInterval(background, 100);
      scoreWorker = setInterval(updateScore, 100);
      boxWorker = setInterval(moveBoxes, 100);


    }
  }


  if (keycode == 32) {

    if (jumpWorker == 0) {

      document.getElementById("start").style.visibility = "hidden";
      clearInterval(runWorker);
      runSound.pause();
      jumpWorker = setInterval(jump, 100);
      jumpSound.play();


    }

  }



}

////...................run Animation......................\\\\

var runimageNumber = 1;
var runWorker = 0;

function run() {
  //alert(runWorker)
  runimageNumber = runimageNumber + 1;

  if (runimageNumber == 9) {

    runimageNumber = 1;

  }
  document.getElementById("boy").src = "run" + runimageNumber + ".png";



}

////........................background..................\\\\

var backgroundPositionX = 0;
var backgroundWorker = 0;

function background() {

  backgroundPositionX = backgroundPositionX - 15;
  document.getElementById("background").style.backgroundPositionX = backgroundPositionX + "px";


}

////............................jump Animation.........................\\\\

var jumpImageNumber = 0;
var jumpWorker = 0;
var boyMarginTop = 330;

function jump() {


  if (jumpImageNumber <= 6) {

    boyMarginTop = boyMarginTop - 25;
    document.getElementById("boy").style.marginTop = boyMarginTop + "px";

  }
  if (jumpImageNumber >= 7) {

    boyMarginTop = boyMarginTop + 25;
    document.getElementById("boy").style.marginTop = boyMarginTop + "px";
  }


  jumpImageNumber = jumpImageNumber + 1;

  if (jumpImageNumber == 13) {

    jumpImageNumber = 1;
    clearInterval(jumpWorker);
    runWorker = setInterval(run, 100);
    runSound.play();
    jumpWorker = 0;


    if (backgroundWorker == 0) {
      backgroundWorker = setInterval(background, 100);
    }

    if (scoreWorker == 0); {
      scoreWorker == setInterval(updateScore, 150);
    }
    if (boxWorker == 0); {
      boxWorker = setInterval(moveBoxes, 100);
    }

  }

  document.getElementById("boy").src = "jump"+ jumpImageNumber +".png";
}


////......................score update.........................\\\\


var Score = 0;
var scoreWorker = 0;

function updateScore() {
  //alert("hi")
  score = score + 1;
  document.getElementById("Score").innerHTML = Score;

  if (Score == 270) {

    clearInterval(runWorker);
    runWorker = -1;
    runSound.push();

    clearInterval(jumpWorker);
    jumpWorker = -1;
    jumpSound.pause();

    clearInterval(backgroundWorker);
    backgroundWorker = -1;

    clearInterval(boxWorker);
    boxWorker = -1;

    clearInterval(scoreWorker);
    scoreWorker = -1;

    document.getElementById("winGame").style.visibility = "visible";
    document.getElementById("endScore").innerHTML = Score;

  }


}




///.............................. fire balls............................\\\


var bwl = 300;

function CreateBoxes() {
  for (var i = 0; i < 10; i++) {

    var box = document.createElement("div");
    box.className = "box";
    box.id = "box" + i;


    if (i <= 5) {
      bwl = bwl + 550;

    }

    if (i >= 6) {
      bwl = bwl + 450;
    }

    box.style.marginLeft = bwl + "px";

    document.getElementById("background").appendChild(box);
  }
}


////..................fireball...........\\\\

var boxWorker = 0;

function moveBoxes() {
  for (var i = 0; i < 10; i++) {
    var newBox = document.getElementById("box" + 1);
    var BoxMl = getComputedStyle(newBox).marginLeft;
    var newBoxMl = parseInt(BoxMl) - 20;
    newBox.style.marginLeft = newBoxMl + "px";

    //alert( newBoxMl)


    if (newBoxMl >= 80 & newBoxMl <= 200) {

      if (boyMarginTop > 270) {

        clearInterval(runWorker);
        runWorker = -1;
        runSound.pause();

        clearInterval(jumpWorker);
        jumpWorker = -1;
        jumpSound.pause();

        clearInterval(backgroundWorker);
        backgroundWorker = -1;

        clearInterval(boxWorker);
        boxWorker = -1;

        clearInterval(scoreWorker);
        scoreWorker = -1;

        deadWorker = setInterval(dead, 100);
        deadSound.play();

      }

    }
  }
}


///......................dead Animation.............................\\\

var deadImageNumber = 1;
var deadWorker = 0;

function dead() {
  //alert("no")
  deadImageNumber = deadImageNumber + 1;

  if (deadImageNumber == 11) {
    deadImageNumber = 10;
    document.getElementById("boy").style.marginTop = "285px";
    document.getElementById("end").style.visibility = "visible";
    document.getElementById("endScore").innerHTML = Score;

  }

  document.getElementById("boy").src = "dead"+ deadImageNumber +".png";



}

///............replay game..............\\

function reload() {
  location.reload();

}







// var runimageNumber = 1 ;
// var runworker = 0 ;
  
// function run() {
//   alert(runworker)
//   runimageNumber = runimageNumber + 1;

//   if (runimageNumber == 9) {

//     runimageNumber = 1;

//   }
//   document.getElementById("boy").src = "run" + runimageNumber +".png";



// }


// ////..........................keycheck............. \\\\

// function keyCheck(event) {
//     var keycode = event.which;
  
//     if (keycode == 13) {
  
//       if (runworker == 0) {
  
//         document.getElementById("start").style.visibility = "hidden";
//         runworker = setInterval(run, 100);
//         runsound.play();
  
  
//         backgroundworker = setInterval(background, 100);
//         scoreworker = setInterval(updatescore, 100);
//         boxworker = setInterval(moveboxes, 100); // boxworker = fire ball worker \\
  
  
//       }
//     }
  
  
//     if (keycode == 32) {
  
//       if (jumpworker == 0) {
  
//         document.getElementById("start").style.visibility = "hidden";
//         clearInterval(runworker);
//         runsound.pause();
  
  
//         jumpworker = setInterval(jump, 100);
//         jumpsound.play();
  
  
//       }
  
//     }
  
  
  
//   }
