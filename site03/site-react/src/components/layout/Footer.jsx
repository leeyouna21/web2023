function Footer(props) {
  return (
    <footer id="footer" role="contentinfo" className={props.attr}>
      <div className="footer__inner container">
        <div className="footer__text">
          <h5>YUNA</h5>
          <p>
            안녕하세요 ! 만나서 반갑습니다 :&gt; <br />더 자세한 정보를 원하시면, <br /> 아래 메일로 연락 부탁드립니다.
            <br />
            Email :<a href="mailto:yuna5845@gmail.com">yuna5845@gmail.com</a>
          </p>
          <ul className="sns">
            <li>
              <a href="/">
                <span className="ir">인스타</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="ir">깃</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__menu">
          <div>
            <h4>책이란</h4>
            <ul>
              <li>
                <a href="/">책은 보여준다</a>
              </li>
              <li>
                <a href="/">새로운 가치</a>
              </li>
              <li>
                <a href="/">새로운 인사이트</a>
              </li>
              <li>
                <a href="/">새로운 기회</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>추천해요</h4>
            <ul>
              <li>
                <a href="/">미우나고우나</a>
              </li>
              <li>
                <a href="/">구의 증명</a>
              </li>
              <li>
                <a href="/">여덟단어</a>
              </li>
              <li>
                <a href="/">바깥은 여름</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>유명한 작가들</h4>
            <ul>
              <li>
                <a href="/">해리포터</a>
              </li>
              <li>
                <a href="/">반지의 제왕</a>
              </li>
              <li>
                <a href="/">호빗</a>
              </li>
              <li>
                <a href="/">살인자의 기억법</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>좋아하는구절</h4>
            <ul>
              <li>
                <a href="/">민경희 작가</a>
              </li>
              <li>
                <a href="/">일러스트</a>
              </li>
              <li>
                <a href="/">여덟단어</a>
              </li>
              <li>
                <a href="/">박웅현작가</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right">Copyright 2022. All Rights Reserved. - Designed by YUNA</div>
      </div>
    </footer>
  );
}

export default Footer;
