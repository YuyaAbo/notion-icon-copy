chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        type: "normal",
        id: "copy",
        title: "Copy Notion page icon URL",
        contexts: ["all"]
    })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
    chrome.tabs.sendMessage(tab?.id ?? 0, "copy")
})