((flag) => {
    document.addEventListener("DOMContentLoaded", function () {
        let btn = document.getElementById("btn1");
        document.getElementById("btn1").addEventListener("click", _ => {
            btn.innerText = flag ? "Cliked" : "Click";
            btn.style.backgroundColor = !flag ? "white" : "orangered";
            flag = !flag;

        });
    });
})(true);