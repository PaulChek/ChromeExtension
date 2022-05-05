((dark_flag) => {
    document.addEventListener("DOMContentLoaded", function () {
        let btn = document.getElementById("btn1");
        document.getElementById("btn1").addEventListener("click", _ => {
            btn.innerText = dark_flag ? "Dark" : "Light";
            btn.style.backgroundColor = !dark_flag ? "white" : "orangered";

            Messagin(dark_flag);

            dark_flag = !dark_flag;

        }
        );
    });
})(true);

function Messagin(dark_flag) {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, { dark_flag }/*,  (response) => response.farewell*/);
    });
}