const allMusic = [
    {
        name : "1. 바닷가",
        artist : "darin",
        img : "music__view001",
        audio: "music_audio01"
    },
    {
        name : "2. wish you are gay",
        artist : "Billie Eilish",
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
const musicPrevBtn = musicWrap.querySelector("#control-prev");
const musicNextBtn = musicWrap.querySelector("#control-next");
const musicProgress = musicWrap.querySelector(".progress");
const musicProgressBar = musicWrap.querySelector(".progress .bar");
const musicProgressCurrent = musicWrap.querySelector(".progress .timer .current");
const musicProgressduration = musicWrap.querySelector(".progress .timer .duration");



let musicIndex = 2;     // 현재 음악 인덱스


// 음악 재생
const loadMusic = (num) => {
    musicName.innerHTML = allMusic[num-1].name;             // 재생되고 있는 음악 제목 바꾸기
    musicArtist.innerHTML = allMusic[num-1].artist;         // 재생되고 있는 음악 아티스트 바꾸기
    musicView.src = `img/${allMusic[num-1].img}.png`;       // 재생되고 있는 음악 이미지 바꾸기
    musicView.alt = allMusic[num-1].name;                   // 재생되고 있는 음악 이미지(alt) 바꾸기
    musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`   // 재생되고 있는 음악 바꾸기
};


// 재생
const playMusic = () => {
    musicWrap.classList.add("paused");
    musicPlay.setAttribute("title", "정지");
    musicPlay.setAttribute("class", "stop");
    musicAudio.play();
};


// 정지
const pauseMusic = () => {
    musicWrap.classList.remove("paused");
    musicPlay.setAttribute("title", "재생");
    musicPlay.setAttribute("class", "play");
    musicAudio.pause();
};


// 이전 곡 듣기
const prevMusic = () => {
    musicIndex == 1  ? musicIndex = allMusic.length : musicIndex--; //노래를 반복적으로 재생핳기 위한 방법 삼항연산자
    console.log(musicIndex)
    loadMusic(musicIndex);
    playMusic();
};


// 다음 곡 듣기
const nextMusic = () => {
    // musicIndex++;
    // if(musicIndex == 9)  musicIndex == 1;       //노래를 반복적으로 재생핳기 위한 방법을 if문으로 사용 그 밑은 if문을 바꾼 것

    musicIndex == allMusic.length ? musicIndex = 1 : musicIndex++; //노래를 반복적으로 재생핳기 위한 방법 삼항연산자

    loadMusic(musicIndex);
    playMusic();
};

//뮤직 진행바
musicAudio.addEventListener("timeupdate", e => {
    console.log(e)
    const currentTime = e.target.currentTime;  //재생 되는 시간
    const duration = e.target.duration;    //오디오의 총 길이
    let progressWidth = (currentTime/duration) * 100;    //전체 길이에서 현재 잔향되는 시간을 백분위 단위로 나누면 됨

    console.log(progressWidth)

    musicProgressBar.style.width = `${progressWidth}%`

    //전체 시간
    musicAudio.addEventListener("loadeddata" , () => {
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10) totalSec = `0${totalSec}`;
        musicProgressduration.innerText = `${totalMin}:${totalSec}`;
    });

    //진행 시간
    let currentMin = Math.floor(currentTime / 60); 
    let currentSec = Math.floor(currentTime % 60); 
    if(currentSec < 10) currentSec = `0${currentSec}`;
    musicProgressCurrent.innerText = `${currentMin}:${currentSec}`;
});

// 진행 버튼 클릭
musicProgress.addEventListener("click", (e) => {
    let progressWidth = musicProgress.clientWidth;  //진행바 전체 길이
    let clickOffsetX = e.offsetX;   //진행바를 기준으로 측정되는 X값 좌펴
    let songDuration = musicAudio.duration;     //오디오 전체 길이

    //백분위로 나눈 숫자에 다시 전체 길이를 곱해 현재 재생값으로 바꿈
    musicAudio.currentTime = (clickOffsetX /progressWidth) * songDuration;

    console.log(songDuration)
});

// 플레이 버튼 클릭
musicPlay.addEventListener("click", () => {
    const isMusicPaused = musicWrap.classList.contains("paused");   // 음악 재생중
    isMusicPaused ? pauseMusic() : playMusic();   //toggle 사용
});


// 이전 곡 버튼 클릭
musicPrevBtn.addEventListener("click", () => {
    prevMusic();
});


// 다음 곡 버튼 클릭
musicNextBtn.addEventListener("click", () => {
    nextMusic();
});


window.addEventListener("load", () => {
    loadMusic(musicIndex);
    console.log(musicIndex)
});
