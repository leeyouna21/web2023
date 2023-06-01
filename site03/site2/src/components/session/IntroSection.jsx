function IntroSection(props) {
  return (
    <section id="introSection" className={props.attr}>
      <h3 className="blind">설명</h3>
      <div className="intro__inner container">
        <div className="intro__title">
          <span>RECOMMEND</span>
          <h3>I liked this book 📚🤎</h3>
          <p>제가 제일 재밌게 읽은 네 권을 소개해 드릴게요 !</p>
        </div>
        <div className="intro__desc">
          <div>
            <h4>📚 미우나 고우나 내 인생</h4>
            <p>
              손헌녕 작가
              <br /> 이 책은 내면의 고독함과 불완전함, 그리고 외부의 압력과 대인관계에서 찾아나가는 과정을 통해 성장하고
              변화해 나갑니다.
              <br />
              나의 내면과 삶의 여러 측면을 탐구할 수 있도록 도움을 주는
              <br /> 책입니다.
            </p>
          </div>
          <div>
            <h4>📚 구의 증명 </h4>
            <p>
              최진영 작가
              <br />
              구의 증명은 시대적 상황과 같은 작품의 배경 및 다른 인문들의 묘사를 최소화하고 , 오직 두 주인공의 이야기 ,
              그들의 관계에만 <br /> 집중해 더 몰입감이 있는 책입니다.
            </p>
          </div>
          <div>
            <h4>📚 여덟단어</h4>
            <p>
              박웅현 작가 <br />이 책은 여덟 가지 키워드는 자존, 본질, 고전, 견(見), 현재, 권위, 소통, 인생으로 이
              키워드 들을 통해 젊은 청춘들이 인생을 살아갈 때 시련 속에서도 흔들리지 않고 자기 자신을 존중할 수 있는
              힘을 주는 책입니다.
            </p>
          </div>
          <div>
            <h4>📚 바깥은 여름</h4>
            <p>
              김애란 작가 <br /> 이 책은 상실을 겪은 사람과 타인의 불행을 대하는 사람들의 온도차이이자, 한 계절에서 다른
              계절로 넘어가지 못한 사람들의 이야기입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
