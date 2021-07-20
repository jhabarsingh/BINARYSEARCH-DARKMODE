console.log("installed successfully");
chrome.runtime.onInstalled.addListener( () => {
    chrome.storage.sync.set({ binarysearch: true }, () => { });
});
