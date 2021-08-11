import styles from './login.module.css'

function Login() {
  return(
    <div className={styles.wrap}>
      <div className={styles.logo_wrap}>
        <div className={styles.daelim_logo}>
          <h1 className={styles.logo}>
           <a href="../login.html">
            <img src="../images/login/logo.png" alt="대림대학교" />
          </a>
           <img src="../images/login/login_logo.png" alt="학생포털시스템로그인" />
           <img src="../images/login/login_exp.png" alt="교내 사이트에서 포털 로그인을 하면, 해당사이트로 자동 전환됩니다." style={{padding: '0px 0px 14px 10px'}} />
          </h1>
        </div> 
        <div className={styles.link}>
          <a href="../index.html" target="_blank">
            <img src="./images/login/go_homepage.png" alt="대학홈페이지 바로가기" />
          </a>
        </div>
      </div>
      <div className={styles.main_area}>
        <div className={styles.login_area}>
          <div className={styles.login}>
            <ul className={styles.browser_notice}>
              <li>
                <span>※ IE8(Windows XP 사용자 포함), IE9, IE10 사용자는 반드시 공지사항을 참조하세요..</span>
              </li>
            </ul>
            <div className={styles.login_info}>
             <a href="#">
               <img src="../images/login/login_info.png" alt="로그인 안내" />
             </a>
            </div>
            <div className={styles.login_box}>
              <ul className={styles.login_tabarea}>
                <a href="#">
                  <li className={styles.login_on}>
                    <span className={styles.blind}>로그인</span>
                  </li>
                </a>
              </ul>
              <ul className={styles.login_content_area}>
                <li className={styles.login_section}>
                  <div className={styles.login_field}>
                    <fieldset>
                      <legend>로그인</legend>
                      <form name="loginform" id="loginform" method="post" autocomplete="off">
                        <ul className={styles.login_input_area}>
                          <li className={styles.input_row}>
                            <label for="id" id="label_id_area" className={styles.blind}>학번/교번</label>
                            <input autocomplete="off" type="text" id="id" name="id" tabindex="7" accesskey="L" placeholder="학번/교번" className={styles.int} maxlength="20" />
                          </li>
                          <li className={styles.input_row}>
                            <label for="pw" id="label_pw_area" className={styles.blind}>비밀번호</label>
                            <input type="password" id="pw_fake" name="pw_fake" tabindex="8" placeholder="비밀번호" className={styles.int} maxlength="20" autocomplete="off" style={{display: 'none'}} />
                            <input type="password" id="pw" name="pw" tabindex="8" placeholder="비밀번호" className={styles.int} maxlength="20" autocomplete="off" />
                          </li>
                        </ul>
                        <ul className={styles.login_btn_area}>
                          <li>
                            <a href="#">
                              <img src="../images/login/login_btn.png" alt="로그인" />
                            </a>
                          </li>
                        </ul>       
                        <ul className={styles.forget_area}>
                          <li className={styles.area1}>
                            <img src="../images/login/forget_text1.png" alt="아이디가 기억나지 않으세요?" />
                          </li>
                          <li className={styles.area2}>
                            <img src="../images/login/forget_text2.png" alt="아이디가 기억나지 않으세요?" />
                          </li>
                          <li className={styles.area3}>
                            <a href="#">
                              <img src="/./images/login/forget_btn1.png" alt="아이디 찾기" />
                            </a>
                          </li>
                          <li className={styles.area4}>
                            <a href="#">
                              <img src="./images/login/forget_btn2.png" alt="비밀번호 변경" />
                            </a>
                          </li>
                          <li className={styles.first_pw}>- 신입생의 최초 비밀번호는 생년월일 예) 1999년 1월 1일 -&gt; 990101</li>
                          <li className={styles.change_pw}>- 신입생은 반드시 비밀번호변경 후 사용 가능(비밀번호변경 버튼 클릭)</li>
                        </ul>
                      </form>
                    </fieldset>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.board_area}>
              <ul className={styles.board_content_area}>
                <li className={styles.login_noitce}>
                  <dl> 
                    <dt>
                      <a href="#" className={styles.list_notice}>로그인 설치파일</a>
                    </dt> 
                    <dd>2015-12-14</dd>
                  </dl>
                  <dl> 
                    <dt>
                      <a href="#" className={styles.list_notice}>[IE8 사용자 필독] 공지사항</a>
                    </dt> 
                    <dd>2015-08-18</dd>
                  </dl>
                  <dl> 
                    <dt>
                      <a href="#" className={styles.list_notice}>[IE9 사용자 필독] 등록금고지서 출력 관련</a>
                    </dt> 
                    <dd>2015-08-17</dd>
                  </dl>
                  <dl> 
                    <dt>
                      <a href="#" className={styles.list_notice}>학생메일 사용자 공지사항</a>
                    </dt> 
                    <dd>2015-08-14</dd>
                  </dl>
                  <dl> 
                    <dt>
                      <a href="#" className={styles.list_notice}>오픈 공지입니다.</a>
                    </dt> 
                    <dd>2015-07-30</dd>
                  </dl>
                </li> 
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul className={styles.copyright} title="대림대학교 13916 경기도 안양시 동안구 임곡로 29 TEL. 031)467-4700 FAX. 031)446-8729">
        <li>
          <a href="#">
            <img src="../images/login/bottom_info_text.png" alt="개인정보처리방침" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Login