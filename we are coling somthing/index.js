console.log('Lets write JavaScript');
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}


let currentsong = new Audio();
async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/we%20are%20coling%20somthing/songs")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs
}
const playmusic = (track) => {
    currentsong.src = "songs/" + encodeURIComponent(track.trim());
    currentsong.play();
    play.src = "photo/pause.svg"
    document.querySelector(".songinfo").innerHTML = track.trim();
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"

};

async function main() {


    // Get the list of all the songs
    let songs = await getSongs()
    playmusic(songs[0], true)
    let songul = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songul.innerHTML = songul.innerHTML + `<li>
                            <img class="invert" src="photo/music.svg" alt="">
                            <div class="info">
                               <span>${song.replaceAll("%20", " ")}</span>
                               <span>pruthvik</span>
                            </div>
                            <div class="pnow">
                                <span>
                                    play now
                                </span>
                                <img class="invert" src="photo/play0.svg" alt="">
                            </div>
                             </li>`;
    }
    //    attach an event listenr to each song
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playmusic(e.querySelector(".info").firstElementChild.innerHTML.trim())

        });
    });
    // attach event listeners to prev, play, next buttons
    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            play.src = "photo/pause.svg"
        } else {
            currentsong.pause();
            play.src = "photo/play0.svg"
        }
    })
    // timeupdate event listener
    currentsong.addEventListener("timeupdate", () => {
        console.log(currentsong.currentTime, currentsong.duration);
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentsong.currentTime)} / ${secondsToMinutesSeconds(currentsong.duration)}`;
        document.querySelector(".circle").style.left = currentsong.currentTime/currentsong.duration*100 + "%";
        
    })
    // add event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e=>{
        let percent =(e.offsetX/e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentsong.currentTime = ((currentsong.duration)*percent)/100;
    })

}


main()  
