import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

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
            html, body
            {
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
            .logo:hover {
              transform: scale(1.05);
            }
            .logo:active {
              transition: all ease 0.6s;
              transform: scale(1.15);
            }
            .content {
              width: 700px;
              margin: 0 auto;
              min-height: calc(100% - 150px);
            }
            .content li {
              list-style: none;
              margin: 15px auto;
              border-bottom: 1px solid rgba(0,0,0,0.04);
              cursor: pointer !important;
            }
            .showContent .showTime {
              font-size: 40px;
              font-weight: 800;
              margin: 0;
              padding: 0;
              margin-bottom: 10px;
              line-height: 1.1;
            }
            .showContent .showTitle {
              font-size: 32px;
              margin: 0;
              margin-top: 5px;
              padding: 0;
              color: #262626;
            }
            .episodeList li {
              list-style: none;
              text-align: left;
            }
            .episodeList li h4 {
              margin: 5px auto;
              text-align: left;
            }
            season-coll {
              font-size: 30px;
              margin: 20px 0;
              font-weight: 800;
              cursor: pointer;
            }
            season-coll:after {
              content: ' ↓';
            }
            season-coll:after {
              content: ' ↑';
            }
            .Collapsible__trigger {
              font-size: 25px;
              margin: 20px 0;
              font-weight: 600;
              cursor: pointer;
            }
            .is-closed:after {
              content: ' ↓';
            }
            .is-open:after {
              content: ' ↑';
            }
            .Collapsible {
              margin: 40px auto;
              text-align: center;
            }
            .Collapsible__contentInner {
              margin-top: 30px;
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
            .searchItem {
              display: flex;
            }
            .searchItem .summary {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 4; /* number of lines to show */
              line-height: 20px;        /* fallback */
              max-height: 80px;       /* fallback */
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
            .showTime br {
              display: none;
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
                background: rgba(34,50,84,0.03);
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
                  width: calc(100% - 30px);
                }
                .showContent .showItem .right {
                  width: 250px; 
                }
              }
              @media screen and (max-width: 850px) {
                .showTime br {
                  display: block;
                }
              }
              @media screen and (max-width: 800px) { 
                select:focus,
                textarea:focus,
                input:focus {
                  font-size: 16px;
                }
                
                .showContent .showItem .right {
                  width: 200px; 
                }
                .showContent .showTime {
                    font-size: 1.7rem;
                }
                .showContent .showTitle {
                    font-size: 1.5rem;
                }
                .Collapsible__contentInner li h4 {
                  font-size: 12px;
                }
                .inp, .inp input, .content {
                  width: calc(100% - 30px);
                }
                .inp .border {
                  width: 100%;
                }
                .showContent .showItem {
                  margin: 50px auto;
                }
                }
            `}</style>
        </div>
    )
}