let img: HTMLImageElement | undefined;

document.addEventListener('contextmenu', (event) => {
    img = event.target as HTMLImageElement
}, false)

chrome.runtime.onMessage.addListener( async (message, sender) => {
    if (message == 'notion-icon-copy' && img?.src) {
        const imgUrl = img.src.replace('https://www.notion.so/image/', '')
        const decodedImgUrl = decodeURIComponent(imgUrl)
        await navigator.clipboard.writeText(decodedImgUrl)
    }
})
