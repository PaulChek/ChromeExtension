import { Logic } from './shared_logic.js';

var DarkTheme = true;

let logic = new Logic();
//Codewars api
logic.changeExtensionIcon("https://avatars.githubusercontent.com/u/49681055?s=100");
logic.changeBadgeColor("#3b3b3b");
logic.changeBadgeText("❤️");

fetch("https://www.codewars.com/api/v1/users/paul2")
    .then(v => v.json())
    .then(v => chrome.action.setBadgeText({ text: v.codeChallenges.totalCompleted % 10 + "" }));
//end

/*Messaging*/
chrome.runtime.onMessage.addListener(
    async (request, sender, sendResponse) => {
        fetch("https://www.codewars.com/api/v1/users/paul2")
            .then(v => v.json())
            .then(v => logic.changeBadgeText(v.codeChallenges.totalCompleted % 10 + ""));

        const tabId = (await logic.getCurrentTab()).id;
 
        chrome.scripting.insertCSS(
            {
                target: { tabId },
                files: [`css/${ DarkTheme ? "Light_Theme.css" : "Dark_Theme.css"}`]
            }/*,() => { ... }*/);
        DarkTheme = !DarkTheme;
    }

);


