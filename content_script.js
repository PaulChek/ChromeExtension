chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {

        document.querySelector("body").style.backgroundColor = request.dark_flag ? "#333333" : "#3b3b3b";
        console.log(request);
    }
);