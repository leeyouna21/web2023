function UnsplashSection(props) {
  return (
    <section id="unsplashSection" className={props.attr}>
      <div className="unsplash__inner container">
        <div className="unsplash__text ">
          <h3>잠시 쉬는시간 !</h3>
          <p>책을 읽느라 피로해진 눈 , 탁 트인 풍경 보고가세요 : &gt;</p>
          <a href="/" className="button-1">
            자세히보기
          </a>
        </div>
        <div className="unsplah__item">
          <div>
            <img src="./assets/images/unsplash/img01.png" alt="" />
          </div>
          <div>
            <img src="./assets/images/unsplash/img02.png" alt="" />
          </div>
          <div>
            <img src="./assets/images/unsplash/img03.png" alt="" />
          </div>
          <div>
            <img src="./assets/images/unsplash/img04.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UnsplashSection;
