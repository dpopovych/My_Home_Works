var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');

var watch = new Stopwatch(timer);

function startStop() {
  if (watch.isOn) {
    watch.stop();
    toggleBtn.textContent = 'Start';
  } else {
    watch.start();
    toggleBtn.textContent = 'Stop';
  }
};

function reset() {
  watch.reset();
};

toggleBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
