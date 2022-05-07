/*Shared Logic*/

export class Logic {

    DarkThemeSet = (key, value) => chrome.storage.sync.set({ key: value });

    DarkThemeGet = key => chrome.storage.sync.get(key);

    changeExtensionIcon = URL => chrome.action.setIcon({ path: URL }, () => { /* ... */ });

    changeBadgeColor = color => chrome.action.setBadgeBackgroundColor({ color });

    changeBadgeText = text => chrome.action.setBadgeText({ text });

    async getCurrentTab() {
        let queryOptions = { active: true, currentWindow: true };
        let [tab] = await chrome.tabs.query(queryOptions);
        return tab;
    }
}
