const wrapper = document.querySelector(".wrapper");
const display = document.querySelector(".display");
const footer = document.querySelector(".footer");
const ok = document.querySelector(".ok");
const pop__toogle = document.querySelector(".pop__toogle");
const pop__up = document.querySelector(".pop__up");

// Pop_Up  !!!!!!!!!!!!!!!!
const input = document.querySelector(".input");
const button = document.querySelector(".button");

pop__toogle.addEventListener("click", () => {
  pop__up.classList.add("dis__on");
});

let balans;

button.onclick = inputReding;

function inputReding() {
  balans = input.value;
  console.log(balans);
}

console.log(balans);
// let balans = 0;

// let vyvod = button.addEventListener("click", () => {
//   balans = input.value;
//   return balans;
// });

// console.log(vyvod);

// Pop Up  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const call = document.querySelector(".call");
// console.log(call);
// call.onclick = f1;

call.addEventListener("click", () => {
  wrapper.classList.add("wrapper__dack");
  display.innerHTML = "";

  setTimeout(() => {
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
