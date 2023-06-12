<template>

    <footer id="footer" :class="attr" role="heading">
      <div class="footer__inner container">
        <div class="footer__text">
          <h5>YUNA</h5>
          <p>
            안녕하세요 ! 만나서 반갑습니다 :&gt; <br />더 자세한 정보를 원하시면, <br /> 아래 메일로 연락 부탁드립니다.
            <br />
            Email :<a href="mailto:yuna5845@gmail.com">yuna5845@gmail.com</a>
          </p>
          <ul class="sns">
            <li>
              <a href="/">
                <span class="ir">인스타</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span class="ir">깃</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__menu">
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
        <div class="footer__right">Copyright 2022. All Rights Reserved. - Designed by YUNA</div>
      </div>
    </footer>

</template>

<script>
export default ({
  props: {
    attr: String
  }
})
</script>

<style lang="scss">
    // footer__inner
.footer__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .footer__text {
        width: 20%;
        h5 {
            font-size: 18px;
            margin-bottom: 20px;
        }
        p {
            font-size: 16px;
            color: #808080;
        }
        .sns {
            li {
                display: inline;
                a {
                    display: inline-block;
                    width: 45px;
                    height: 45px;
                    border-radius: 45px;
                    // background-image: url(../assets/images/);
                    // background-image: url(../../images/footer/Instagram.png);
                    background-repeat: no-repeat;
                }
                &:nth-child(2) a {
                    background-position: -45px 0;
                }
                &:nth-child(3) a {
                    background-position: -90px 0;
                }
                &:nth-child(4) a {
                    background-position: -135px 0;
                }
            }
        }
    }

    .footer__menu {
        width: 70%;
        display: flex;
        > div {
            width: 25%;
            h4 {
                font-size: 18px;
                color: #000;
                margin-bottom: 20px;
            }
            a {
                font-size: 14px;
                color: #808080;
                line-height: 1.8;
            }
        }
    }
    .footer__right {
        width: 100%;
        padding: 30px;
        text-align: center;
        border-top: 1px solid #E5E5E5;
        margin-top: 50px;
        color: #808080;
        font-size: 14px;
    }
}
</style>
