import styles from './PPS.module.css'

function PPS() {
  return (
    <div className={styles.wrap}>
      <header>
        <div className={styles.top}>
          <div className={styles.inner}>
            <h1 className={styles.logo}>
              <a href="#">
                <img src="../images/PPS/logo.png" alt="대림대학교" />
              </a>
            </h1>
            <button className={styles.btn}>MENU</button>
          </div>
        </div>
      </header>
      <section className={styles.contents}>
        <h2 className={styles.title}>
          <img src="../images/PPS/title.png" alt="Ace Delim" />
          <span className={styles.txt}>최고수준의 대한민국 대표<br />고등직업교육기관으로 도약!</span>
        </h2>
        <div className={styles.cst}>
          <div className={styles.box, styles.left}>
            <a href="#" className={styles.open_right}>
              <img src="../images/PPS/right_btn.png" alt="button" />
            </a>
            <div className={styles.box_txt}>
              <dl>
                <dt>수시합격예측</dt>
              </dl> 
            </div>
          </div>
          <div className={styles.box, styles.right}>
            <a href="#" className={styles.open_left}>
              <img src="../images/PPS/left_btn.png" alt="button" />
            </a>
            <div className={styles.box_txt}>
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