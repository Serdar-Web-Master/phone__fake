const call = document.querySelector ('.call');
console.log(call);
// call.onclick = f1;

function f1() {
const audio = new Audio();
audio.src = 'Recording_3.m4a';
audio.play();
}

call.addEventListener('click',f1);