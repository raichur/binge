import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>BingeWatch</title>
      </Head>
      <Header />
      {props.children}
      <Footer />
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
        }
        body {
          display: grid;

          -webkit-text-size-adjust: 100%;
          -webkit-font-smoothing: antialiased;
        }
        * {
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }
        a {
          text-decoration: none;
          font-weight: bold;
          color: black;
        }
        footer {
          margin: 50px auto;
          text-align: center;
        }
        .logo {
          text-align: center;
          margin: 0 auto;
          margin-top: 40px;
          margin-bottom: 50px;
          width: 100px;
          height: auto;
          cursor: pointer;
          transition: all ease 0.4s;
        }
        .logo img {
          margin: 0 auto;
        }
        .logo:hover .logotext {
          fill: #3090ff !important;
          transition: all ease 0.2s;
        }
        .logotext {
          transition: all ease 0.2s;
        }
        .logo:hover {
          transform: scale(1.05);
        }
        .logo:active {
          transition: all ease 0.15s;
          transform: scale(1.15);
        }
        .content {
          width: 700px;
          margin: 0 auto;
          min-height: calc(100% - 150px);

          -webkit-animation: fadeInUp 0.3s; /* Safari, Chrome and Opera > 12.1 */
          -moz-animation: fadeInUp 0.3s; /* Firefox < 16 */
          -ms-animation: fadeInUp 0.3s; /* Internet Explorer */
          -o-animation: fadeInUp 0.3s; /* Opera < 12.1 */
          animation: fadeInUp 0.3s;
          animation-duration: 0.3s;
          animation-fill-mode: both;
          -webkit-animation-duration: 0.3s;
          -webkit-animation-fill-mode: both;
          opacity: 0;
        }
        .showContent .left, .showContent .right, .showContent .Collapsible {
          -webkit-animation: fadeInUp 0.3s; /* Safari, Chrome and Opera > 12.1 */
          -moz-animation: fadeInUp 0.3s; /* Firefox < 16 */
          -ms-animation: fadeInUp 0.3s; /* Internet Explorer */
          -o-animation: fadeInUp 0.3s; /* Opera < 12.1 */
          animation: fadeInUp 0.3s;
          animation-duration: 0.3s;
          animation-fill-mode: both;
          -webkit-animation-duration: 0.4s;
          -webkit-animation-fill-mode: both;
          opacity: 0;
        }
        .showContent .right {
          animation-delay: 0.2s;
        }
        .showContent .Collapsible {
          animation-delay: 0.4s;
        }
        @keyframes fadeInUp {
          from {
            transform: translate3d(0, 10px, 0);
          }

          to {
            transform: translate3d(0, 0, 0);
            opacity: 1;
          }
        }

        @-webkit-keyframes fadeInUp {
          from {
            transform: translate3d(0, 10px, 0);
          }

          to {
            transform: translate3d(0, 0, 0);
            opacity: 1;
          }
        }
        .content li {
          list-style: none;
          margin: 15px auto;
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
          cursor: pointer !important;
        }
        .searchItem {
          transition: all ease 0.4s;
        }
        
        .form {
          -webkit-animation: fadeInUp 0.3s; /* Safari, Chrome and Opera > 12.1 */
          -moz-animation: fadeInUp 0.3s; /* Firefox < 16 */
          -ms-animation: fadeInUp 0.3s; /* Internet Explorer */
          -o-animation: fadeInUp 0.3s; /* Opera < 12.1 */
          animation: fadeInUp 0.3s;
          animation-duration: 0.3s;
          animation-fill-mode: both;
          animation-delay: 0.2s;
          -webkit-animation-duration: 0.3s;
          -webkit-animation-fill-mode: both;
          opacity: 0;
        }
        .showContent .showTime {
          font-size: 50px;
          font-weight: 800;
          margin: 0;
          padding: 0;
          margin-bottom: 10px;
          line-height: 1.1;
        }
        .showTime div {
          font-size: 50px;
        }
        .showContent .showTitle {
          font-size: 29px;
          padding: 0;
          margin: 4px auto;
          color: #565656;
        }
        .first {
          font-size: 24px !important;
          margin: 7px auto !important;
        }
        .episodeList li {
          list-style: none;
          text-align: left;
        }
        .episodeList li h4 {
          margin: 5px auto;
          text-align: left;
        }
        Seasoncol {
          font-size: 27px !important;
          margin: 20px 0;
          font-weight: 800 !important;
          cursor: pointer;
          color: #07f;
        }
        .is-closed:after {
          content: " ↓" !important;
        }
        .is-open:after {
          content: " ↑" !important;
        }
        .Collapsible__trigger {
          font-size: 23px;
          margin: 10px 0;
          font-weight: 700;
          cursor: pointer;
        }
        .is-closed:after {
          content: " ↓";
        }
        .is-open:after {
          content: " ↑";
        }
        .Collapsible {
          margin: 15px auto;
          text-align: center;
        }
        .Collapsible__contentInner {
          margin-top: 15px;
          margin-bottom: 20px;
        }
        .Collapsible__contentInner li span {
          font-weight: 400;
          color: #4f4f4f;
        }
        .showContent .seasons {
          margin-top: 10px;
          color: #4f4f4f;
        }
        .showContent .showItem {
          display: flex;
          margin: 70px auto;
        }
        .showContent .showItem .right img {
          width: 100%;
          height: auto;
          border-radius: 5px;
        }
        .content h3 {
          margin: 0;
          padding: 0;
          margin-bottom: 15px;
        }
        .content p {
          margin: 0;
        }
        .Collapsible__contentInner li {
          list-style: none;
          margin: 0;
        }
        .Collapsible__contentInner h4 {
          margin: 6px 0;
        }
        .showContent h3 {
          margin: 0;
          padding: 0;
          font-size: 1.4rem;
        }
        .content li:hover img {
          transform: scale(1.05);
        }
        .content li:hover h3,
        .content li:hover p {
          color: #07f;
        }
        .searchItem {
          display: flex;
        }
        .searchItem .summary {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4; /* number of lines to show */
          line-height: 20px; /* fallback */
          max-height: 80px; /* fallback */
        }
        .showContent {
          width: 900px;
          margin: 0 auto;
        }
        .showItem .left {
          margin-right: 30px;
          flex-grow: 2;
        }
        .showItem .right {
          margin: 0;
          width: 350px;
        }
        .left {
          margin-right: 15px;
        }
        .right {
          margin-left: 15px;
        }
        .searchImage {
          width: 100px;
          height: auto;
          border-radius: 4px;
          transition: all ease 0.3s;
          margin-bottom: 15px;
        }
        form {
          margin: 40px auto;
          text-align: center;
        }
        .inp {
          position: relative;
          width: 700px;
        }
        .inp .label {
          position: absolute;
          top: 0;
          left: 10px;
          font-size: 16px;
          color: #9098a9;
          font-weight: 500;
          transform-origin: 0 0;
          transition: all 0.2s ease;
        }
        .inp .border {
          position: absolute;
          bottom: -12px;
          left: 0;
          height: 2px;
          width: 700px;
          background: #07f;
          transform: scaleX(0);
          transform-origin: 0 0;
          transition: all 0.15s ease;
        }
        .inp input {
          -webkit-appearance: none;
          width: 700px;
          
          border: 0;
          font-family: inherit;
          padding: 8px 0;
          height: 40px;
          font-size: 16px;
          font-weight: 500;
          border-bottom: 2px solid #c8ccd4;
          background: none;
          border-radius: 0;
          color: #223254;
          transition: all 0.15s ease;
        }
        .inp input:hover {
          background: rgba(34, 50, 84, 0.03);
        }
        .inp input:not(:placeholder-shown) + span {
          color: #5a667f;
          transform: translateY(-30px) translateX(-10px) scale(0.75);
        }
        .inp input:focus {
          background: none;
          outline: none;
        }
        .inp input:focus + span {
          color: #07f;
          transform: translateY(-30px) translateX(-10px) scale(0.75);
        }
        .inp input:focus + span + .border {
          transform: scaleX(1);
        }
        @media screen and (max-width: 950px) {
          .showContent {
            width: 700px;
          }
          .showContent .showItem .right {
            width: 250px;
          }
        }
        @media screen and (max-width: 800px) {
          select:focus,
          textarea:focus,
          input:focus {
            font-size: 16px;
          }
          .Collapsible {
            margin: 10px auto;
          }
          .Collapsible__trigger {
            font-size: 18px;
          }
          .Collapsible__contentInner {
            margin-top: 10px;
            margin-bottom: 20px;
          }
          .showContent .showItem .right {
            width: 200px;
          }
          .showContent .showTitle {
            font-size: 1.2rem !important;
          }
          .showContent .first {
            font-size: 1.1rem !important;
          }
          .Collapsible__contentInner li h4 {
            font-size: 12px;
          }
          .inp,
          .inp input,
          .content {
            width: calc(100% - 30px);
          }
          .inp .border {
            width: 100%;
          }
          .showContent .showItem {
            margin: 50px auto;
          }
          Seasoncol {
            font-size: 24px !important;
          }
        }
        @media screen and (max-width: 700px) {
          .showContent {
            width: calc(100% - 30px);
          }
        }
        @media screen and (max-width: 600px) {
          .showContent .showTime div {
            font-size: 1.9rem;
          }
          .showTime div {
            font-size: 29px !important;
          }
          .showContent .showItem .right {
            width: 130px;
          }
        }
      `}</style>
    </div>
  );
}
