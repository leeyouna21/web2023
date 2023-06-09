import React from 'react';

const introTitle = {
  sub: 'RECOMMEND',
  title: (
    <h3>
      I liked this
      <br /> book 📚🤎
    </h3>
  ),
  desc: (
    <p>
      제가 제일 재밌게 읽은 <br />네 권을 소개해 드릴게요 !
    </p>
  ),
};

const introText = [
  {
    title: '📚 미우나 고우나 내 인생',
    desc: '손헌녕 작가 이 책은 내면의 고독함과 불완전함, 그리고 외부의 압력과 대인관계에서 찾아나가는 과정을 통해 성장하고변화해 나갑니다.나의 내면과 삶의 여러 측면을 탐구할 수 있도록 도움을 주는 책입니다.',
  },
  {
    title: '📚 구의 증명',
    desc: '최진영 작가구의 증명은 시대적 상황과 같은 작품의 배경 및 다른 인문들의 묘사를 최소화하고 , 오직 두 주인공의 이야기 ,그들의 관계에 집중해 더 몰입감이 있는 책입니다.',
  },
  {
    title: '📚 여덟단어',
    desc: '박웅현 작가 이 책은 여덟 가지 키워드는 자존, 본질, 고전, 견(見), 현재, 권위, 소통, 인생으로 이키워드 들을 통해 젊은 청춘들이 인생을 살아갈 때 시련 속에서도 흔들리지 않고 자기 자신을 존중할 수 있는힘을 주는 책입니다.',
  },
  {
    title: '📚 바깥은 여름',
    desc: '김애란 작가 이 책은 상실을 겪은 사람과 타인의 불행을 대하는 사람들의 온도차이이자, 한 계절에서 다른계절로 넘어가지 못한 사람들의 이야기입니다.',
  },
];

function IntroDesc({ title, desc }) {
  return (
    <div>
      <h4 className="1">{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function IntroSection(props) {
  return (
    <section id="introSection" className={props.attr}>
      <h3 className="blind">설명</h3>
      <div className="intro__inner container">
        <div className="intro__title">
          <span>{introTitle.sub}</span>
          <>{introTitle.title}</>
          <>{introTitle.desc}</>
        </div>

        <div className="intro__desc">
          {introText.map((text, index) => (
            <IntroDesc key={index} title={text.title} desc={text.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
