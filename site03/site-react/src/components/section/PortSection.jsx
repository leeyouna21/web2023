import React from 'react';
import { Link } from 'react-router-dom';

const portDesc = [
  {
    title: 'I hope you like it, too !',
    link: '/',
    dessc: '📚',
  },
];

const portText = [
  {
    portImg: './assets/images/port/book02.png',
    iconImg: './assets/images/port/flower.png',
    title: '민경희 작가',
    desc: '난 너의 모든 것을 닮고 싶은 사람 中',
  },
  {
    portImg: './assets/images/port/book6.png',
    iconImg: './assets/images/port/flower.png',
    title: '민경희 작가',
    desc: '힘이 되는 민경희 작가님의 일러스트 글귀입니다.',
  },
  {
    portImg: './assets/images/port/book3.png',
    iconImg: './assets/images/port/flower.png',
    title: '민경희 작가',
    desc: '난 너의 모든 것을 닮고 싶은 사람 中',
  },
  {
    portImg: './assets/images/port/book4.png',
    iconImg: './assets/images/port/flower.png',
    title: 'Author',
    desc: '제가 제일 좋아하는 책의 저자입니다.',
  },
  {
    portImg: './assets/images/port/book01.png',
    iconImg: './assets/images/port/flower.png',
    title: '박웅현 작가',
    desc: '여덟 단어 中',
  },
  {
    portImg: './assets/images/port/book5.png',
    iconImg: './assets/images/port/flower.png',
    title: '여덟단어',
    desc: '여덟단어 표지입니다.',
  },
];

function PortSection(props) {
  return (
    <section id="portSection" className={props.attr}>
      <h3>{portDesc.title}</h3>
      <p></p>
      <div className="port__inner container">
        <div className="port__btn">
          <ul>
            <li>
              <a href={Link}>{desc}</a>
            </li>
          </ul>
        </div>
        <div className="port__cont">
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/book02.png" alt="멤버1" />
            </figure>
            <div className="port__body">
              <span>
                <img src="./assets/images/port/flower.png" alt="" />
              </span>
              <div>
                <h4>민경희 작가</h4>
                <p>난 너의 모든 것을 닮고 싶은 사람 中</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/book6.png" alt="멤버1" />
            </figure>
            <div className="port__body">
              <span>
                <img src="./assets/images/port/flower.png" alt="" />
              </span>
              <div>
                <h4>민경희 작가</h4>
                <p>힘이 되는 민경희 작가님의 일러스트 글귀입니다.</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/book3.png" alt="멤버1" />
            </figure>
            <div className="port__body">
              <span>
                <img src="./assets/images/port/flower.png" alt="" />
              </span>
              <div>
                <h4>민경희 작가</h4>
                <p>난 너의 모든 것을 닮고 싶은 사람 中</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/book4.png" alt="멤버1" />
            </figure>
            <div className="port__body">
              <span>
                <img src="./assets/images/port/flower.png" alt="" />
              </span>
              <div>
                <h4>Author</h4>
                <p>제가 제일 좋아하는 책의 저자입니다.</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/book01.png" alt="멤버1" />
            </figure>
            <div className="port__body">
              <span>
                <img src="./assets/images/port/flower.png" alt="" />
              </span>
              <div>
                <h4>박웅현 작가</h4>
                <p>여덟 단어 中</p>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/book5.png" alt="멤버1" />
            </figure>
            <div className="port__body">
              <span>
                <img src="./assets/images/port/flower.png" alt="" />
              </span>
              <div>
                <h4>여덟단어</h4>
                <p>여덟단어의 표지입니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortSection;
