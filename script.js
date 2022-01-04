const wrapper = document.querySelector(".wrapper");
const display = document.querySelector(".display");
const footer = document.querySelector(".footer");
const ok = document.querySelector(".ok");

const call = document.querySelector(".call");
// console.log(call);
// call.onclick = f1;

call.addEventListener("click", () => {
  wrapper.classList.add("wrapper__dack");
  display.innerHTML = "";

  setTimeout(function () {
    footer.style.display = "flex";
  }, 2000);
});

ok.addEventListener("click", () => {
  wrapper.classList.remove("wrapper__dack");
  footer.style.display = "none";
});

const numbers = document.querySelectorAll(".row__item");

// console.log(numbers);

// console.log(numbers[0]);

const audio = new Audio();
audio.src = "audio_p.mp3";

function play() {
  audio.play();
}

numbers.forEach(function (e) {
  e.addEventListener("click", f1);

  function f1() {
    play();
    let key = e.getAttribute("value");
    display.innerHTML += key;
  }
});

// var intervalID = setTimeout(function() { myFunc("one", "two", "three"); }, 1000);
