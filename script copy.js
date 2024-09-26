


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

////...................run Animation......................\\\\

var runimageNumber = 1;
var runworker = 0;

function run() {

  runimageNumber = runimageNumber + 1;

  if (runimageNumber == 9) {

    runimageNumber = 1;

  }
  document.getElementById("boy").src = "run (" + runimageNumber + ").png";



}

////........................background..................\\\\

var backgroundPositionX = 0;
var backgroundworker = 0;

function background() {

  backgroundPositionX = backgroundPositionX - 15;
  document.getElementById("background").style.backgroundPositionX = backgroundPositionX + "px";


}

////............................jump Animation.........................\\\\

var jumpimageNumber = 0;
var jumpworker = 0;
var boyMarginTop = 299;

function jump() {


  if (jumpimageNumber <= 6) {

    boyMarginTop = boyMarginTop - 25;
    document.getElementById("boy").style.marginTop = boyMarginTop + "px";

  }
  if (jumpimageNumber <= 7) {

    boyMarginTop = boyMarginTop + 25;
    document.getElementById("boy").style.marginTop = boyMarginTop + "px";
  }


  jumpimageNumber = jumpimageNumber + 1;

  if (jumpimageNumber == 13) {

    jumpimageNumber = 1;
    clearInterval(jumpworker);
    runworker = setInterval(run, 100);
    runsound.play();
    jumpworker = 0;


    if (backgroundworker == 0) {
      backgroundworker = setInterval(background, 100);
    }

    if (scoreworker == 0); {
      scoreworker == setInterval(updatescore, 100);
    }
    if (boxworker == 0); {
      boxworker = setInterval(moveboxes, 100);
    }

  }

  document.getElementById("boy").src = "jump (" + jumpimageNumber + ").png";
}


////......................score update.........................\\\\


var score = 0;
var scoreworker = 0;

function updatescore() {
  score = score + 1;
  document.getElementById("score").innerHTML = score;

  if (score == 270) {

    clearInterval(runworker);
    runworker = -1;
    runsound.push();

    clearInterval(jumpworker);
    jumpworker = -1;
    jumpsound.pause();

    clearInterval(backgroundworker);
    backgroundworker = -1;

    clearInterval(boxworker);
    boxworker = -1;

    clearInterval(scoreworker);
    scoreworker = -1;



    document.getElementById("winGame").style.visibility = "visible";
    document.getElementById("endscore").innerHTML = score;

  }


}




///.............................. fire balls............................\\\


var fireball = 300;

function createboxes() {
  for (var i = 0; i < 10; i++) {



    var box = document.createElement("div");
    box.className = "box";
    box.id = "box" + i;


    if (i <= 5) {
      fireball = fireball + 550;

    }




    if (i >= 6) {
      fireball = fireball + 450;
    }



    box.style.marginLeft = fireball + "px";

    document.getElementById("background").appendChild(box);
  }
}


////..................fireball...........\\\\

var boxworker = 0;

function moveboxes() {
  for (var i = 0; i < 10; i++) {
    var newbox = document.getElementById("box" + 1);
    var boxml = getComputedStyle(newbox).marginLeft;
    var newboxml = parseInt(boxml) - 20;
    newbox.style.marginLeft = newboxml + "px";

    //alert( newboxml)





    if (newboxml >= 80 & newboxml <= 200) {

      if (boyMarginTop > 270) {

        clearInterval(runworker);
        runworker = -1;
        runsound.push();

        clearInterval(jumpworker);
        jumpworker = -1;
        jumpsound.pause();

        clearInterval(backgroundworker);
        backgroundworker = -1;

        clearInterval(boxworker);
        boxworker = -1;

        clearInterval(scoreworker);
        scoreworker = -1;

        deadworker = setInterval(dead, 100);
        deadsound.play();

      }

    }
  }
}


///......................dead Animation.............................\\\

var deadimageNumber = 1;
var deadworker = 0;

function dead() {
  deadimageNumber = deadimageNumber + 1;

  if (deadimageNumber == 11) {
    deadimageNumber = 10;
    document.getElementById("boy").style.marginTop = "285px";
    document.getElementById("end").style.visibility = " visible"
    document.getElementById("endscore").innerHTML = score;

  }

  document.getElementById("boy").src = "dead (" + deadimageNumber + ").png";



}

///............replay game..............\\

function reload() {
  location.reload();

}



////................. sound................\\\\\

var runsound = new Audio("run.mp3");
var jumpsound = new Audio("jump.mp3");
var deadsound = new Audio("dead.mp3");
