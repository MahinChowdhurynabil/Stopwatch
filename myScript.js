let ms = 0;
let s = 0;
let m = 0;
let count;
let start = document.querySelector(".start");
let end = document.querySelector(".stop");
let reload = document.querySelector(".reset");
let time = document.querySelector(".time");

function formatTime(value) {
  return value < 10 ? "0" + value : value;
}

start.addEventListener("click", function () {
  if (!count) {
    count = setInterval(run, 10);
  }
  // count = setInterval(run, 10);
  function run() {
    let formattedTime =
      formatTime(m) + ":" + formatTime(s) + ":" + formatTime(ms);
    time.textContent = formattedTime;
    ms++;

    if (ms == 100) {
      ms = 0;
      s++;
    }
    if (s == 60) {
      s = 0;
      m++;
    }
  }
});

end.addEventListener("click", function () {
  clearInterval(count);
  count = false;
});
reload.addEventListener("click", function () {
  clearInterval(count);
  count = false;
  m = 0;
  s = 0;
  ms = 0;
  let formattedTime =
    formatTime(m) + ":" + formatTime(s) + ":" + formatTime(ms);
  time.textContent = formattedTime;
});
