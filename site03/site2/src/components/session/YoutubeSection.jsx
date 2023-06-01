function YoutubeSection(props) {
  return (
    <section id="youtubeSection" className={props.attr}>
      <div className="youtube__inner container">
        <div className="youtube__text ">
          <h3>책 읽을 때 듣기 좋은 노래</h3>
          <p>책을 읽을 때 곁들이면 좋은 노래를 추천해드릴게요 !</p>
          <a href="/" className="button-3">
            자세히보기
          </a>
        </div>
        <div className="youtube__item">
          <div>
            <img src="./assets/images/youtube/yu01.png" alt="" />
          </div>
          <div>
            <img src="./assets/images/youtube/yu02.png" alt="" />
          </div>
          <div>
            <img src="./assets/images/youtube/yu03.png" alt="" />
          </div>
          <div>
            <img src="./assets/images/youtube/yu04.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default YoutubeSection;
