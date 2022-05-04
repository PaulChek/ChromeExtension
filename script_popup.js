//// JavaScript source code
document.addEventListener('DOMContentLoaded', function () {
    let flag = true;
    let btn = document.getElementById("btn1");
    document.getElementById("btn1").addEventListener("click", _ => {
        btn.innerText = flag ? "Cliked" : "Click";
        btn.style.backgroundColor = !flag ? "white" : "orangered";
        flag = !flag;

    });
})