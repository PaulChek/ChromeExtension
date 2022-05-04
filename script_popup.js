// JavaScript source code
let flag = true;
let btn = document.getElementById("btn1");
btn.addEventListener("click", _ => { btn.innerText = flag ? "Cliked" : "Click"; flag = !flag; });