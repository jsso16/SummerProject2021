import './PPS.css'

function PPS() {
  return (
    <div id="wrap">
      <header>
        <div className="top">
          <div className="inner">
            <h1 className="logo">
              <a href="#">
                <img src="../images/PPS/logo.png" alt="대림대학교" />
              </a>
            </h1>
            <button className="btn">MENU</button>
          </div>
        </div>
      </header>
      <section id="contents">
        <h2 className="title">
          <img src="../images/PPS/title.png" alt="Ace Delim" />
          <span className="txt">최고수준의 대한민국 대표<br />고등직업교육기관으로 도약!</span>
        </h2>
        <div className="cst">
          <div className="box left">
            <a href="#" className="open_right">
              <img src="../images/PPS/right_btn.png" alt="button" />
            </a>
            <div className="box_txt">
              <dl>
                <dt>수시합격예측</dt>
              </dl> 
            </div>
          </div>
          <div className="box right">
            <a href="#" className="open_left">
              <img src="../images/PPS/left_btn.png" alt="button" />
            </a>
            <div className="box_txt">
              <dl>
                <dt>정시합격예측</dt>
              </dl> 
            </div>
          </div>
        </div>
      </section>
    </div> 
  )
}

export default PPS