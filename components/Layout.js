import Header from './Header'

export default function Layout(props) {
    return (
        <div>
            <Header />
            {props.children}
            <style jsx global>{`

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
            .logo {
              text-align: center;
              margin-top: 50px;
              font-size: 40px;
            }
            .content {
              width: 700px;
              margin: 0 auto;
            }
            .content li {
              list-style: none;
              margin: 20px auto;
              border-bottom: 1px solid rgba(0,0,0,0.04);
              cursor: pointer !important;
            }

            .showContent .showTime {
              font-size: 45px;
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
            .episodeList li span {
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
              width: 150px;
              height: auto;
              border-radius: 4px;
              transition: all ease 0.3s;
              margin-bottom: 20px;
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
              @media screen and (max-width: 800px) { 
                select:focus,
                textarea:focus,
                input:focus {
                  font-size: 16px;
                }
                .inp, .inp input, .content {
                  width: calc(100% - 30px);
                }
                .inp .border {
                  width: 100%;
                }

                }
            `}</style>
        </div>
    )
}