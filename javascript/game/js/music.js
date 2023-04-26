const allMusic = [
    {
        name : "1. 바닷가",
        artist : "darin",
        img : "music__view001",
        audio: "music_audio01"
    },
    {
        name : "2. 바닷가",
        artist : "darin",
        img : "music__view002",
        audio: "music_audio02"
    },
    {
        name : "3. 바닷가",
        artist : "darin",
        img : "music__view003",
        audio: "music_audio03"
    },
    {
        name : "4. 바닷가",
        artist : "darin",
        img : "music__view004",
        audio: "music_audio04"
    },
    {
        name : "5. 바닷가",
        artist : "darin",
        img : "music__view005",
        audio: "music_audio05"
    },
    {
        name : "6. 바닷가",
        artist : "darin",
        img : "music__view006",
        audio: "music_audio06"
    },
    {
        name : "7. 바닷가",
        artist : "darin",
        img : "music__view007",
        audio: "music_audio07"
    },
    {
        name : "8. 바닷가",
        artist : "darin",
        img : "music__view008",
        audio: "music_audio08"
    },
    {
        name : "9. 바닷가",
        artist : "darin",
        img : "music__view009",
        audio: "music_audio09"
    },    {
        name : "10. 바닷가",
        artist : "darin",
        img : "music__view010",
        audio: "music_audio10"
    },
]

const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .image img");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicPlay = musicWrap.querySelector("#control-play");

let musicIndex = 6;  //현재 음악 인덱스

//음악재생
const loadMusic = (num) => {
    musicName.innerTEXT = allMusic[num-1].name;    //뮤직 이름
    musicArtist.innerTEXT = allMusic[num-1].artist;   //뮤직아티스트
    musicView.src = `img/${allMusic[num-1].img}.png`;   //뮤직 이미지
    musicView.alt = allMusic[num-1].name;     //뮤직 이미지 alt
    musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`;
}

//플레이버튼 클릭
musicPlay.addEventListener("click",() => {

})
window.addEventListener("load", () => {
    loadMusic(musicIndex);

    musicAudio.play();
});