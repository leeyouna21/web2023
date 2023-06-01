function MemberSection(props) {
  return (
    <section id="memberSection" className={props.attr}>
      <h3>A FAMOUS WRITER !</h3>
      <p>모두가 아는 유명작가를 소개해드릴게요.</p>
      <div className="member__inner container">
        <div className="member">
          <figure className="member__header">
            <img src="./assets/images/member/a01@2x.jpg" alt="member01" />
          </figure>
          <div className="member__body">
            <a href="/" className="btn">
              조앤 K. 롤링 - 해리포터 저자
            </a>
          </div>
        </div>
        <div className="member">
          <figure className="member__header">
            <img src="./assets/images/member/a02@2x.jpg" alt="member01" />
          </figure>
          <div className="member__body">
            <a href="/" className="btn">
              J.R.R. 톨킨 - 반지의 제왕 저자
            </a>
          </div>
        </div>
        <div className="member">
          <figure className="member__header">
            <img src="./assets/images/member/a03@2x.jpg" alt="member01" />
          </figure>
          <div className="member__body">
            <a href="/" className="btn">
              김영하 - 살인자의 기억법 저자
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MemberSection;
