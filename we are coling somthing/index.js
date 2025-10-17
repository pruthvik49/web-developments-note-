console.log('Lets write JavaScript');
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
async function main() {
    // Get the list of all the songs
    let songs = await getSongs()
    console.log(songs)
   let songul = document.querySelector(".songlist").getElementsByTagName("ul")[0];
   for (const song of songs){
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

    var audio = new Audio(songs[0]);
    // audio.play();
    audio.addEventListener("loadeddata", () => {
        let duration = audio.duration;
        console.log(audio.duration, audio.currentSrc, audio.currentTime);
    }); 

}
main()  
