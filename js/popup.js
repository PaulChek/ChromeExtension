

((dark_flag) => {
    document.addEventListener("DOMContentLoaded", () => {

        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");

        btn1.addEventListener("click", _ => chrome.runtime.sendMessage({ message: "UpdateStats" }));
        

        btn2.addEventListener("click", _ => Messagin(dark_flag = !dark_flag) );

    });
})(true);

function Messagin(dark_flag) {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, { dark_flag }/*,  (response) => response.farewell*/);
    });
    chrome.runtime.sendMessage({ message: "ChangeTheme" });
}




