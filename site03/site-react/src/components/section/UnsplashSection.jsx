import React from 'react';
import { Link } from 'react-router-dom';

const unsplashTitle = {
  title: '잠시 쉬는시간 !',
  desc: '책을 읽느라 피로해진 눈 , 탁 트인 풍경 보고가세요 : &gt;',
  link: '/',
};

const unsplashImages = [
  {
    images: './assets/images/unsplash/img01.png',
    title: '이미지1',
  },
  {
    images: './assets/images/unsplash/img02.png',
    title: '이미지2',
  },
  {
    images: './assets/images/unsplash/img03.png',
    title: '이미지3',
  },
  {
    images: './assets/images/unsplash/img04.png',
    title: '이미지4',
  },
];

function UnsplashImages({ images, title }) {
  return (
    <div className="unsplah__item">
      <div>
        <img src={images} alt={title} />
      </div>
    </div>
  );
}

function UnsplashSection(props) {
  return (
    <section id="unsplashSection" className={props.attr}>
      <div className="unsplash__inner container">
        <div className="unsplash__text ">
          <h3>{unsplashTitle.title}</h3>
          <p>{unsplashTitle.desc}</p>
          <Link to={Link} className="button-1">
            자세히보기
          </Link>
        </div>
      </div>
    </section>
  );
}

export default UnsplashSection;
