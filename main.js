console.log("content.js loaded");

var continueLoop = false;

function skipSong() {
  var forwardButton = document.querySelector('#player-bar-forward');
  forwardButton.click();
  console.log('Song skipped!');
}

function numTimesPlayed() {
  var playCountEl = document.querySelector('.currently-playing [data-col=play-count] span');
  if (playCountEl) {
    return parseInt(playCountEl.innerText);
  } else {
    return 0;
  }
}

function skipIfPlayed() {
  if (continueLoop) {
    setTimeout(function () {
      if (numTimesPlayed() > 0 && continueLoop) {
        skipSong();
      }

      skipIfPlayed();
    }, 2000)
  }
}

function start() {
  console.log('start');
  if (!continueLoop) {
    continueLoop = true;
    skipIfPlayed();
  }
}

function stop() {
  console.log('stop');
  continueLoop = false;
}