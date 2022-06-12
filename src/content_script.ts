const NOTION_IMG_URL = 'https://www.notion.so/image/'
let img: HTMLImageElement | undefined;

document.addEventListener("contextmenu", (event) => {
    img = event.target as HTMLImageElement
}, false)

chrome.runtime.onMessage.addListener( async (message, sender) => {
    if (message == 'notion-icon-copy' && img?.src) {
        const imgUrl = img.src.replace(NOTION_IMG_URL, '')
        const decodedImgUrl = decodeURIComponent(imgUrl)
        await navigator.clipboard.writeText(decodedImgUrl)
    }
})
