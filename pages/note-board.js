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
        {/* End Of Page Header */}
        <section className="container">
          <div className="page-container">
            <div className="page-content">
              <div className="card">
                <div className="card-header pt-0">
                  <h3 className="card-title mb-4" style={{ color: "gray" }}>
                    잊지 말자 종주중독 그대의 최고의 날을 함께 했으니...
                  </h3>
                  <div className="blog-media mb-4">
                    <img
                      src="assets/imgs/notepad_allofus.png"
                      alt=""
                      className="w-100"
                    />
                    <a href="#" className="badge badge-primary">
                      #설악산
                    </a>
                  </div>
                  <small className="small text-muted">
                    <a href="#" className="text-muted">
                      BY LEE JOONHO
                    </a>
                    <span className="px-2">·</span>
                    <span>July 30 2022</span>
                    <span className="px-2">·</span>
                    {/* <a href="#" class="text-muted">32 Comments</a> */}
                  </small>
                </div>
                <div className="card-body border-top">
                  <p className="my-3" />
                </div>
                <div className="card-footer">
                  <h6 className="mt-5 mb-3 text-center">
                    <a href="#" className="text-dark">
                      Comment
                    </a>
                  </h6>
                  <hr />
                  <div className="media">
                    <div className="board_wrap">
                      <div className="board_title">
                        <strong>게시판</strong>
                        <p>종주중독에 남기고 싶은 이야기들을 남겨주세요</p>
                      </div>
                      <div className="board_list_wrap">
                        <div className="board_list">
                          <div className="top">
                            <div className="num">번호</div>
                            <div className="title">제목</div>
                            <div className="writer">글쓴이</div>
                            <div className="date">작성일</div>
                            <div className="count">조회</div>
                          </div>
                          <div>
                            <div className="num">5</div>
                            <div className="title">
                              <a href="#">글 제목이들어갑니다.</a>{" "}
                            </div>
                            <div className="writer">이준호</div>
                            <div className="date">2022.09.29</div>
                            <div className="count">33</div>
                          </div>
                          <div>
                            <div className="num">4</div>
                            <div className="title">
                              <a href="#">글 제목이들어갑니다.</a>{" "}
                            </div>
                            <div className="writer">이준호</div>
                            <div className="date">2022.09.29</div>
                            <div className="count">33</div>
                          </div>
                          <div>
                            <div className="num">3</div>
                            <div className="title">
                              <a href="#">글 제목이들어갑니다.</a>{" "}
                            </div>
                            <div className="writer">이준호</div>
                            <div className="date">2022.09.29</div>
                            <div className="count">33</div>
                          </div>
                          <div>
                            <div className="num">2</div>
                            <div className="title">
                              <a href="#">글 제목이들어갑니다.</a>{" "}
                            </div>
                            <div className="writer">이준호</div>
                            <div className="date">2022.09.29</div>
                            <div className="count">33</div>
                          </div>
                          <div>
                            <div className="num">1</div>
                            <div className="title">
                              <a href="#">글 제목이들어갑니다.</a>{" "}
                            </div>
                            <div className="writer">이준호</div>
                            <div className="date">2022.09.29</div>
                            <div className="count">33</div>
                          </div>
                        </div>
                        <div className="board_page">
                          <a href="#" className="bt first">
                            &lt;&lt;
                          </a>
                          <a href="#" className="bt prev">
                            &lt;
                          </a>
                          <a href="#" className="num">
                            1
                          </a>
                          <a href="#" className="num">
                            2
                          </a>
                          <a href="#" className="num">
                            3
                          </a>
                          <a href="#" className="num">
                            4
                          </a>
                          <a href="#" className="num">
                            5
                          </a>
                          <a href="#" className="bt next">
                            &gt;
                          </a>
                          <a href="#" className="bt last">
                            &gt;&gt;
                          </a>
                        </div>
                        <div className="bt_wrap">
                          <a href="#" className="on">
                            목록
                          </a>
                          <a href="#">수정</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sidebar */}
                <div className="page-sidebar">
                  <h6 className=" ">Tags</h6>
                  <a href="#" className="badge badge-primary m-1">
                    #모임은
                  </a>
                  <a href="#" className="badge badge-primary m-1">
                    #끝났지만
                  </a>
                  <a href="#" className="badge badge-primary m-1">
                    #우리는
                  </a>
                  <a href="#" className="badge badge-primary m-1">
                    #계속된다
                  </a>
                  <a href="#" className="badge badge-primary m-1">
                    #함께
                  </a>
                  <a href="#" className="badge badge-primary m-1">
                    #불태운
                  </a>
                  <a href="#" className="badge badge-primary m-1">
                    #우리의
                  </a>
                  <a href="#" className="badge badge-primary m-1">
                    #6개월
                  </a>
                  <a href="#" className="badge badge-primary m-1">
                    #끝이 아닌
                  </a>
                  <a href="#" className="badge badge-primary m-1">
                    #시작
                  </a>
                  {/* <div class="ad-card d-flex text-center align-items-center justify-content-center mt-4">
              <span href="#" class="font-weight-bold">ADS</span>
          </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Page Footer */}
        <footer className="page-footer">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-3 text-center text-md-left mb-3 mb-md-0">
                <img src="assets/imgs/logo.png" alt="" className="logo" />
              </div>
              <div className="col-md-9 text-center text-md-right"></div>
            </div>
            <p
              className="border-top mb-0 mt-4 pt-3 small"
              style={{ color: "black" }}
            >
              © , 종주중독 Created By{" "}
              <a
                href="https://www.devcrud.com"
                className="text-muted font-weight-bold"
                target="_blank"
              >
                LEE JOONHO.
              </a>{" "}
              All rights reserved{" "}
            </p>
          </div>
        </footer>
        {/* End of Page Footer */}

        {/* <!-- core  --> */}
        <Script src="assets/vendors/jquery/jquery-3.4.1.js"></Script>
        <Script src="assets/vendors/bootstrap/bootstrap.bundle.js"></Script>

        {/* <!-- JoeBLog js --> */}
        {/* <Script src="assets/js/joeblog.js"></Script> */}
      </div>
    </>
  );
}
