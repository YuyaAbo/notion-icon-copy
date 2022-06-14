chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        type: 'normal',
        id: 'copy',
        title: chrome.i18n.getMessage('ContextMenuTitle'),
        contexts: ['image'],
        documentUrlPatterns: ['https://www.notion.so/*'],
    })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
    chrome.tabs.sendMessage(tab?.id ?? 0, 'notion-icon-copy')
})