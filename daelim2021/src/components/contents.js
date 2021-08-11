import {Link} from 'react-router-dom'

function Contents(props) {
  const content_data = props.content_data;
  const menu_data = props.menu_data;
  const styles = props.styles;

  // const slide_content = (<div className="slide">
  //   <img src="../images/main02.jpeg" />
  //   <a href="#">
  //     <span className="cover">
  //       <span className="mark">NOW</span> 
  //       <span className="title">[대림대학교 ㅣ 대...</span>
  //       <span className="title_on">대림대학교 ㅣ 대림대 공식 홍보영상(...</span>
  //     </span>
  //   </a>
  // </div>);

  return (
    <article className={styles.contents}>
      <div className={styles.banner}>
        <div className={styles.top}>
          <img src="../images/title.png" alt="배너 제목"/>
        </div>
        <div className={styles.bottom}>
          <div className={styles.group}>
            <a href="#">
              <img src="../images/banner01.jpeg" alt="마이스터대 선정 축하 배너"/>
            </a>
          </div>
          <img src="../images/banner02.jpeg" alt="연도별 학생 통계 배너"/>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.main_img}>
          <img src="../images/main01.png" alt="메인 이미지"/>
        </div>
      </div>
      <div className={styles.main_list}>
        <div className={styles.img_list}>
        {content_data.map((data,idx) => {
          return (
            <div className={styles.slide} key={idx}>
              <img src={data.img} alt=""/>
              <a href="#">
                <span className={styles.cover}>
                  {data.isNow?
                  <span className={styles.mark}>NOW</span> 
                  :
                  null
                  }
                  <span className={styles.title}>{data.title}</span>
                  <span className={styles.title_on}>{data.title_on}</span>
                </span>
              </a>
            </div>
          )
        })} 
        </div>
      </div>
      <div className={styles.btn_menu}>
        <ul>
          {menu_data.map((md, idx) => {
            return (
              <li key={idx}>
                <Link to={md.path}>
                  {/* <a href="#"> */}
                    <span>{md.menu}</span>
                  {/* </a> */}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </article>
  )
}

export default Contents