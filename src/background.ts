chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        type: "normal",
        id: "copy",
        title: "Copy Notion page icon URL",
        contexts: ['image'],
        documentUrlPatterns: ['https://www.notion.so/*'],
    })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
    chrome.tabs.sendMessage(tab?.id ?? 0, "copy")
})