// Global Constants
//const clueHoldTime = 1000; // How long each clue's light/sound is 
//const cluePauseTime = 333; // How long a pause in between clues
const nextClueWaitTime = 1000; // How long the wait time is before sequence plays

// Global Variables
var clueHoldTime = 1000; // How long each clue's light/sound is 
var cluePauseTime = clueHoldTime/3; // How long a pause in between clues

var pattern = [2,2,4,3,2,1,2,4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // Value must be between 0.0 and 1.0
var guessCounter = 0;
var difficulty;

function startGame() {
  // initialize the game variables
  clueHoldTime = 1000;
  cluePauseTime = clueHoldTime/3;
  
  progress = 0;
  gamePlaying = true;
  
  // Swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

/************************************************************/
// Sound Synthesis Functions
const freqMap = {
  1: 600, // 261.6
  2: 400, // 329.6
  3: 500, // 392
  4: 300 // 466.2
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

/************************************************************/

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if (gamePlaying) {
    if (!document.getElementById("lightsBtn").classList.contains("pressed")) {
      lightButton(btn);
    }
    if (!document.getElementById("speedBtn").classList.contains("pressed")) {
      playTone(btn, clueHoldTime);
      setTimeout(clearButton, clueHoldTime,btn);
    } else {
      playTone(btn, clueHoldTime/3);
      setTimeout(clearButton, clueHoldTime/3,btn);
    }
      
  }
}

function playClueSequence() {
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime; // Set delay to initial wait time
  for (let i=0;i<=progress;i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]) // Set a timeout to play that clue
    if (!document.getElementById("speedBtn").classList.contains("pressed")) {
      delay += clueHoldTime;
      delay += cluePauseTime;
    } else {
      delay += clueHoldTime/2;
      delay += cluePauseTime/2;
    }
  }
  if (clueHoldTime >= 150) {
    clueHoldTime = clueHoldTime - 50;
  }
  
  cluePauseTime = clueHoldTime/3;
  console.log("clueHoldTime = " + clueHoldTime);
} 

function loseGame() {
  stopGame();
  alert("Game Over. You lose.");
}

function winGame() {
  stopGame();
  alert("You win!!! Ending game...");
}

function guess(btn) {
  console.log("User guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (btn != pattern[guessCounter]) {
    loseGame();
  } else if (btn == pattern[guessCounter]) {
    if (guessCounter == progress) {
      if (progress == pattern.length-1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  }
}

/************************************************************/
// Additional non-essential game functions

function setDifficulty(btn) {
  if (btn == 1) {
    document.getElementById("easyBtn").classList.add("pressed");
    document.getElementById("medBtn").classList.remove("pressed");
    document.getElementById("hardBtn").classList.remove("pressed");
    console.log("easy")
    difficulty = "easy";
    for (var i=0;i<8;i++) {
      pattern[i] = Math.floor(Math.random() * 4) + 1;
    }
  }
  if (btn == 2) {
    document.getElementById("easyBtn").classList.remove("pressed");
    document.getElementById("medBtn").classList.add("pressed");
    document.getElementById("hardBtn").classList.remove("pressed");
    console.log("medium")
    difficulty = "medium";
    for (var i=0;i<12;i++) {
      pattern[i] = Math.floor(Math.random() * 4) + 1;
    }
  }
  if (btn == 3) {
    document.getElementById("easyBtn").classList.remove("pressed");
    document.getElementById("medBtn").classList.remove("pressed");
    document.getElementById("hardBtn").classList.add("pressed");
    console.log("hard")
    difficulty = "hard";
    for (var i=0;i<16;i++) {
      pattern[i] = Math.floor(Math.random() * 4) + 1;
    }
  }
}

function lightsOffMode() {
  document.getElementById("lightsBtn").classList.toggle("pressed");
  if (document.getElementById("lightsBtn").classList.contains("pressed")) {
    document.getElementById("lightsBtn").innerText="Lights Off";
  } else {
    document.getElementById("lightsBtn").innerText="Lights On";
  }
}

function speedMode() {
  document.getElementById("speedBtn").classList.toggle("pressed");
  if (document.getElementById("speedBtn").classList.contains("pressed")) {
    document.getElementById("speedBtn").innerText="Faster Speed";
  } else {
    document.getElementById("speedBtn").innerText="Normal Speed";
  }
}