
//Codewars api
chrome.action.setBadgeBackgroundColor({ color: "#88673a" });
chrome.action.setBadgeText({ text: "hi" });
fetch("https://www.codewars.com/api/v1/users/paul2")
    .then(v => v.json())
    .then(v => chrome.action.setBadgeText({ text: v.codeChallenges.totalCompleted + "" }));


chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        console.log(request);
        console.log(sender);
        console.log(sendResponse);
    }
);