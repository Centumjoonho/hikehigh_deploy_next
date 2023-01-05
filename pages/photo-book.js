import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";

export default function Photos() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Start your development with JoeBLog landing page."
        />
        <meta name="author" content="Devcrud" />
        <title>종주중독 | 사진첩</title>
        {/* font icons */}
        <link href="./종주중독_files/icon" rel="stylesheet" />
        {/* 랍스터 구글 폰드  */}
        <link href="./종주중독_files/css2" rel="stylesheet" />
        <link href="./종주중독_files/jongjoo-style.css" rel="stylesheet" />
        <link href="./종주중독_files/fontello.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="assets/vendors/themify-icons/css/themify-icons.css"
        />
        {/* Bootstrap + JoeBLog main styles */}
        <link rel="stylesheet" href="assets/css/css.css" />
      </Head>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.slim.js"
        integrity="sha256-HwWONEZrpuoh951cQD1ov2HUK5zA5DwJ1DNUXaM6FsY="
        crossorigin="anonymous"
      ></Script>
      <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
        <>
          {/* page First Navigation */}
          <nav className="navbar navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" href="/" >
                <img src="assets/imgs/logo.png" alt="/" />
              </a>
              <div className="socials">
                <a href="https://www.facebook.com/">
                  <i className="ti-facebook" />
                </a>
                {/* <a href="javascript:void(0)"><i class="ti-twitter"></i></a>
          <a href="javascript:void(0)"><i class="ti-pinterest-alt"></i></a> */}
                <a href="https://www.instagram.com/ghwnsgkgkgk/">
                  <i className="ti-instagram" />
                </a>
              </div>
            </div>
          </nav>
          {/* End Of First Navigation */}
          {/* Page Second Navigation */}
          <nav className="navbar custom-navbar navbar-expand-md navbar-light bg-primary sticky-top">
            <div className="container">
              <button
                className="navbar-toggler ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" legacyBehavior>
                      <a className="nav-link">Home</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/photo-book" legacyBehavior>
                      <a className="nav-link">사진첩</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/note-board" legacyBehavior>
                      <a className="nav-link">게시판</a>
                    </Link>
                  </li>
                </ul>
                <div className="navbar-nav ml-auto"></div>
              </div>
            </div>
          </nav>
          <div className="container">
            <header className="header"></header>
            <section className="content">
              <main className="main">
                <div id="colums">
                  <figure>
                    <img src="./종주중독_files/1.jpg" />
                    <figcaption>부산 이기대 트레킹</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/2.jpg" />
                    <figcaption>부산 이기대 트레킹 완료 후 식사</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/3.jpg" />
                    <figcaption>부산 시민공원 수요일 러닝</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/4.jpg" />
                    <figcaption>부산 온천천 수요일 러닝</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/5.jpg" />
                    <figcaption>부산 황령산 야등</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/6.jpg" />
                    <figcaption>거제도 사량도 종주</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/7.jpg" />
                    <figcaption>부산 온천천 - 광안리 라이딩</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/8.jpg" />
                    <figcaption>부산 사직 운동장 수요일 러닝</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/9.jpg" />
                    <figcaption>창원 운영진 김지훈 회원의 눈빛</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/고헌산/1.gohun_line.jpg" />
                    <figcaption>고헌산 등산</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/10.jpg" />
                    <figcaption>거제도 사량도 종주 2</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/11.jpg" />
                    <figcaption>최우수 회원님의 상품 전달</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/12_kimhea_marathon.jpg" />
                    <figcaption>김해 마라톤 인증 샷</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/joonho_jungmo.jpg" />
                    <figcaption>2차정모 종주중독 로고 설명</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/jungmo3.jpg" />
                    <figcaption>2차정모 단체 샷</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/고헌산/2gohun_couple.jpg" />
                    <figcaption>사랑이 싹트는 고헌산</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/고헌산/3gohun_nono.jpg" />
                    <figcaption>저랑 등산이랑 안 맞는 것 같아요</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/중독/이기대.jpg" />
                    <figcaption>이기대 트레킹 출발</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/중독/이바구길.jpg" />
                    <figcaption>이바구길 트레킹</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/중독/이바구길_goback.jpg" />
                    <figcaption>이바구길 마무리 고백홈!</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/중독/이바구길2.jpg" />
                    <figcaption>이바구길 트레킹 2</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/중독/이바구길3.jpg" />
                    <figcaption>벌래 때문에 행복한 이바구길 ! </figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/중독/첫자전거라이딩_수영.jpg" />
                    <figcaption>수영강 첫 자전거 라이딩</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/고헌산/4.gohun_dog.jpg" />
                    <figcaption>소영이와 강아지_고헌산</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/중독/flowersuckjong.jpg" />
                    <figcaption>꽃 같은 류석종 모임장</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/중독/jihoondown.jpg" />
                    <figcaption>지훈이의 자체 다운펌</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/중독/gwanganli_bromanse.jpg" />
                    <figcaption>강알리 운영진 브로맨스</figcaption>
                  </figure>
                  <figure>
                    <img src="./종주중독_files/중독/황령산.jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_1.jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산3.jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_. (2).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산4.jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (10).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (11).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (12).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (13).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (14).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (15).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (16).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (17).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (18).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (19).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (20).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (2).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (21).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (22).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (23).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (24).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (25).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (26).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (27).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (28).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (29).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (3).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (30).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (32).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (31).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (33).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (34).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (35).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (36).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (37).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (38).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (39).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (4).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (40).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (41).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (5).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (6).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (7).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (8).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_ (9).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_. (2).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_. (3).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_..jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_.jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_1.jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_2.jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_5.jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_6 (2).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_6 (3).jpg" />
                    <figcaption />
                  </figure>
                  <figure>
                    <img src="./종주중독_files/지리산/지리산_6.jpg" />
                    <figcaption />
                  </figure>
                </div>
              </main>
              <nav></nav>
              <aside />
            </section>
            <footer />
          </div>
          {/* <div class ="thumnail round"style="background-image:url('image/KakaoTalk_20220514_152317011_02.jpg')"></div> */}
          <div className="wrap">
            <h1>{/* <span class="material-icons">language</span> */}</h1>
            <p id="dynamic" className="lg-text"></p>
            <p className="sm-text"></p>
          </div>
        </>

        {/* <!-- core  --> */}
        <Script src="assets/vendors/jquery/jquery-3.4.1.js"></Script>
        <Script src="assets/vendors/bootstrap/bootstrap.bundle.js"></Script>
        <Script
          src="https://code.jquery.com/jquery-3.6.0.slim.js"
          integrity="sha256-HwWONEZrpuoh951cQD1ov2HUK5zA5DwJ1DNUXaM6FsY="
          crossorigin="anonymous"
        ></Script>
        {/* <!-- JoeBLog js --> */}
        {/* <Script src="assets/js/joeblog.js"></Script> */}
        {/* <Script src="./종주중독_files/front_web_page.js"></Script> */}
      </div>
    </>
  );
}
