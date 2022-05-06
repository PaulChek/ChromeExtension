chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        console.log(request);
        console.log(sender);
        console.log(sendResponse);
        chrome.action.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
        chrome.action.setBadgeText({ text: request.l+"" });
    }
);