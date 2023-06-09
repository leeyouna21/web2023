import React from 'react';

const memberTitle = {
  title: 'A FAMOUS WRITER !',
  desc: '모두가 아는 유명작가를 소개해드릴게요.',
};

const memberText = [
  {
    title: '조앤 K. 롤링 - 해리포터 저자',
    images: './assets/images/member/a01@2x.jpg',
    link: '/',
  },
  {
    title: 'J.R.R. 톨킨 - 반지의 제왕 저자',
    images: './assets/images/member/a02@2x.jpg',
    link: '/',
  },
  {
    title: '김영하 - 살인자의 기억법 저자',
    images: './assets/images/member/a03@2x.jpg',
    link: '/',
  },
];

function MemberText({ title, images, link }) {
  return (
    <div className="member">
      <figure className="member__header">
        <img src={images} alt={title} />
      </figure>
      <div className="member__body">
        <a href={link} className="btn">
          {title}
        </a>
      </div>
    </div>
  );
}

function MemberSection(props) {
  return (
    <section id="memberSection" className={props.attr}>
      <h3>{memberTitle.title}</h3>
      <p>{memberTitle.desc}</p>
      <div className="member__inner container">
        {memberText.map((text, index) => (
          <MemberText key={index} images={text.images} link={text.link} title={text.title} />
        ))}
      </div>
    </section>
  );
}

export default MemberSection;
