/*Shared Logic*/

export class Logic {
    codewars_api = "https://www.codewars.com/api/v1/users/paul2";

    icon_path = "https://avatars.githubusercontent.com/u/49681055?s=100";

    DarkThemeSet = (key, value) => chrome.storage.sync.set({ key: value });

    DarkThemeGet = key => chrome.storage.sync.get(key);

    changeExtensionIcon = _ => chrome.action.setIcon({ path: this.icon_path }, () => { /* ... */ });

    changeBadgeColor = color => chrome.action.setBadgeBackgroundColor({ color });

    changeBadgeText = text => chrome.action.setBadgeText({ text });

    async getCurrentTab() {
        let queryOptions = { active: true, currentWindow: true };
        let [tab] = await chrome.tabs.query(queryOptions);
        return tab;
    }

    UptateCompletedKatas = _ => {
        fetch(this.codewars_api)
            .then(res => res.json())
            .then(j => this.changeBadgeText(j.codeChallenges.totalCompleted%10 + "")
        );
    };

}
