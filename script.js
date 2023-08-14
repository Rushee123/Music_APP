let progress = document.getElementById("progress");
let song = document.getElementById("song");
console.log("song==")
let ctrlIcon = document.getElementById("ctrlIcon")
let first = 0

// if (first===0){
//     if(ctrlIcon.classList.contains("fa-play")){
//         console.log("run here")
//         song.pause()
//         first=1
//     }

// }



song.onloadedmetadata = function(){
    song.pause()
    // console.log(song.title)
    progress.max=song.duration
    progress.value=song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause()
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")

    }
    else{
        song.play()
        ctrlIcon.classList.add("fa-pause")
        ctrlIcon.classList.remove("fa-play")
        first+=1
    }

}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}
progress.onchange = function(){
    song.play();
    song.currentTime=progress.value;
    ctrlIcon.classList.add("fa-pause")
    ctrlIcon.classList.remove("fa-play")
}