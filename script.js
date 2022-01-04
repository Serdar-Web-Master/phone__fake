const wrapper = document.querySelector(".wrapper");
const display = document.querySelector(".display");
const footer = document.querySelector(".footer");
const ok = document.querySelector(".ok");

const call = document.querySelector(".call");
// console.log(call);
// call.onclick = f1;

function f1() {
  const audio = new Audio();
  audio.src = "Recording_3.m4a";
  audio.play();
}

call.addEventListener("click", () => {
  wrapper.classList.add("wrapper__dack");
  display.innerHTML = "";
  footer.style.display = "flex";
});

ok.addEventListener("click", () => {
  wrapper.classList.remove("wrapper__dack");
  footer.style.display = "none";
});

const numbers = document.querySelectorAll(".row__item");

// console.log(numbers);

// console.log(numbers[0]);

numbers.forEach(function (e) {
  e.addEventListener("click", f1);
  function f1() {
    console.log(e.getAttribute("value"));
    let key = e.getAttribute("value");

    console.log("key=" + key);
    display.innerHTML += key;
  }
});
