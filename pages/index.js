import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";

export default function Home() {
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
        {/* page First Navigation */}
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/" s="">
              <img src="assets/imgs/logo.png" alt="" />
            </a>
            <div className="socials">
              <a href="https://www.facebook.com/">
                <i className="ti-facebook" />
              </a>
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
        {/* End Of Page Second Navigation */}
        {/* page-header */}
        <header className="page-header" />
        {/* end of page header */}
        <div className="container">
          <section>
            <div className="feature-posts">
              <a href="/photo-book" className="feature-post-item">
                <span>ALL Photos</span>
              </a>
              <a href="photos-climbing.html" className="feature-post-item">
                <img src="assets/imgs/youngnam.jpg" className="w-100" alt="" />
                <div className="feature-post-caption">Mountain climbing</div>
              </a>
              <a href="photos-running.html" className="feature-post-item">
                <img
                  src="assets/imgs/running-songjung.jpg"
                  className="w-100"
                  alt=""
                />
                <div className="feature-post-caption">Running</div>
              </a>
              <a href="photos-bike.html" className="feature-post-item">
                <img src="assets/imgs/bike-man.jpg" className="w-100" alt="" />
                <div className="feature-post-caption">Bike riding</div>
              </a>
              <a href="photos-jeju.html" className="feature-post-item">
                <img
                  src="assets/imgs/header.JPG"
                  className="w-100"
                  alt=""
                  style={{ height: "176.25px" }}
                />
                <div className="feature-post-caption">JEJU Round crossing</div>
              </a>
            </div>
          </section>
          <hr />
          <div className="page-container">
            <div className="page-content">
              <div className="card">
                <div className="card-header text-center">
                  <h5 className="card-title">종주중독이란?</h5>
                  <small className="small text-muted">
                    April ~ November 2022
                    <span className="px-2">-</span>
                    {/* <a href="#" class="text-muted">32 Comments</a> */}
                  </small>
                </div>
                <div className="card-body">
                  <div className="blog-media">
                    <img
                      src="assets/imgs/jongjoo-all.JPG"
                      alt=""
                      className="w-100"
                    />
                    <a href="#" className="badge badge-primary">
                      #영남알프스
                    </a>
                  </div>
                  <p className="my-3">
                    <br />
                    러닝 , 등산 , 자전거 라이딩 3가지 테마를 통해 체력 단련 및
                    친목도모 <br />
                    [5월] 영남알프스 5봉 종주 <br />
                    [8월] 양양 해파랑길 + 설악산 등산 <br />
                    [10월] 제주도 라이딩 종주 + 한라산 등산 <br />
                    [11월] 지리산 노고단 + 뒷풀이
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center flex-basis-0">
                  {/* <button class="btn btn-primary circle-35 mr-4"><i class="ti-back-right"></i></button> */}
                  <a href="/note-board" className="btn btn-outline-dark btn-sm">
                    READ MORE
                  </a>
                  <a
                    href="https://www.instagram.com/ghwnsgkgkgk/"
                    className="text-dark small text-muted"
                  >
                    By : LEE JOONHO
                  </a>
                </div>
              </div>
              <hr />
            </div>
            {/* Sidebar */}
            <div className="page-sidebar text-center">
              <h6 className="sidebar-title section-title mb-4 mt-3">모임장</h6>
              <img
                src="assets/imgs/ryu.png"
                alt=""
                className="circle-100 mb-3"
              />
              <div className="socials mb-3 mt-2">
                <a href="https://www.instagram.com/gend.r/">
                  <i className="ti-instagram" />
                </a>
              </div>
              <p>
                [류석종] <br />
                출생 : 경상남도 마산 <br />
                거주지 : 울산광역시
                <br />
                직장 : 현대중공 <br />키 : 179cm <br />
                여자친구 : 유
              </p>
              <h6 className="sidebar-title mt-5 mb-4">Newsletter</h6>
              <form action="">
                <div className="subscribe-wrapper">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                  <button type="submit" className="btn btn-primary">
                    <i className="ti-location-arrow" />
                  </button>
                </div>
              </form>
              <h6 className="sidebar-title mt-5 mb-4">Tags</h6>
              <a href="#" className="badge badge-primary m-1">
                #등산
              </a>
              <a href="#" className="badge badge-primary m-1">
                #러닝
              </a>
              <a href="#" className="badge badge-primary m-1">
                #부울경
              </a>
              <a href="#" className="badge badge-primary m-1">
                #자전거
              </a>
              <a href="#" className="badge badge-primary m-1">
                #종주중독
              </a>
              <a href="#" className="badge badge-primary m-1">
                #강철체력
              </a>
              <a href="#" className="badge badge-primary m-1">
                #만남은
              </a>
              <a href="#" className="badge badge-primary m-1">
                #쉽고
              </a>
              <a href="#" className="badge badge-primary m-1">
                #이별은
              </a>
              <a href="#" className="badge badge-primary m-1">
                #어려워
              </a>
              <h6 className="sidebar-title mt-5 mb-4">Instagram</h6>
              <div className="row px-3">
                <div className="col-4 p-1 figure">
                  <a href="#" className="figure-img">
                    <img
                      src="assets/imgs/hnami.png"
                      alt=""
                      style={{ width: "90px", height: "90px" }}
                    />
                  </a>
                </div>
                <div className="col-4 p-1 figure">
                  <a
                    href="https://www.instagram.com/gend.r/"
                    className="figure-img"
                  >
                    <img
                      src="assets/imgs/ryu_insta.png"
                      alt=""
                      style={{ width: "90px", height: "90px" }}
                    />
                  </a>
                </div>
                <div className="col-4 p-1 figure">
                  <a href="#" className="figure-img">
                    <img
                      src="assets/imgs/sunkyoung.png"
                      alt=""
                      style={{ width: "90px", height: "90px" }}
                    />
                  </a>
                </div>
                <div className="col-4 p-1 figure">
                  <a
                    href="https://www.instagram.com/ghwnsgkgkgk/"
                    className="figure-img"
                  >
                    <img
                      src="assets/imgs/leejoonho.jpg"
                      alt=""
                      style={{ width: "90px", height: "90px" }}
                    />
                  </a>
                </div>
                <div className="col-4 p-1 figure">
                  <a href="#" className="figure-img">
                    <img
                      src="assets/imgs/soyoung.png"
                      alt=""
                      style={{ width: "90px", height: "90px" }}
                    />
                  </a>
                </div>
                <div className="col-4 p-1 figure">
                  <a
                    href="https://www.instagram.com/harammmy/"
                    className="figure-img"
                  >
                    <img
                      src="assets/imgs/good.jpg"
                      alt=""
                      style={{ width: "90px", height: "90px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="instagram-wrapper mt-5"></div>
        {/* Page Footer */}
        <footer className="page-footer">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-3 text-center text-md-left mb-3 mb-md-0">
                <img src="assets/imgs/logo.png" alt="" className="logo" />
              </div>
              <div className="col-md-9 text-center text-md-right">
                <div className="socials"></div>
              </div>
            </div>
            <p
              className="border-top mb-0 mt-4 pt-3 small"
              style={{ color: "black" }}
            >
              © , 종주중독 Created By
              <a
                href="https://smart-factory-lee-joon-ho.tistory.com/"
                className="text-muted font-weight-bold"
                target="_blank"
              >
                LEEJOONHO.
              </a>
              All rights reserved
            </p>
          </div>
        </footer>
        {/* End of Page Footer */}

        {/* <!-- core  --> */}
        <Script src="assets/vendors/jquery/jquery-3.4.1.js"></Script>
        <Script src="assets/vendors/bootstrap/bootstrap.bundle.js"></Script>

        {/* <!-- JoeBLog js --> */}
        {/* <Script src="/hikehigh/public/assets/js/joeblog.js"></Script> */}
      </div>
    </>
  );
}
