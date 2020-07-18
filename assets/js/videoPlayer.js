const videoPlayer = document.getElementById("jsVideoPlayer")
const playBtn = document.getElementById('playBtn')
const videoPreview = document.getElementById("jsVideoPlayerPreview")


const handlePlayClick = () => {
    if (videoPreview.paused) {
        videoPreview.play()
        playBtn.className.replace('fa-pause')
    } else {
        videoPreview.pause()
        playBtn.className.replace('fa-play')
    }
}

function init() {
    playBtn.addEventListener('click',handlePlayClick)
}

if (videoPlayer) {
    init()
}