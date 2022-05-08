import { Logic } from './shared_logic.js';

let logic = new Logic();
var DarkTheme = true;


//Codewars api
logic.changeExtensionIcon();
logic.changeBadgeColor("#3b3b3b");
logic.changeBadgeText("❤️");
logic.UptateCompletedKatas();


/*Messaging*/
chrome.runtime.onMessage.addListener(
    async (request, sender, sendResponse) => {

        if (request.message === "ChangeTheme") {

            const tabId = (await logic.getCurrentTab()).id;

            chrome.scripting.insertCSS(
                {
                    target: { tabId },
                    files: [`css/${DarkTheme ? "Light_Theme.css" : "Dark_Theme.css"}`]
                }/*,() => { ... }*/);
            DarkTheme = !DarkTheme;
        }



        if (request.message == "UpdateStats") {
            logic.changeBadgeText("...");
            logic.UptateCompletedKatas();
        }
    }


);


