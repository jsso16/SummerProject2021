function Contents(props) {
  const content_data = props.content_data;
  const menu_data = props.menu_data;

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
    <article className="contents">
      <div className="banner">
        <div className="top">
          <img src="../images/title.png" alt="배너 제목"/>
        </div>
        <div className="bottom">
          <div className="group">
            <a href="#">
              <img src="../images/banner01.jpeg" alt="마이스터대 선정 축하 배너"/>
            </a>
          </div>
          <img src="../images/banner02.jpeg" alt="연도별 학생 통계 배너"/>
        </div>
      </div>
      <div className="main">
        <div className="main_img">
          <img src="../images/main01.png" alt="메인 이미지"/>
        </div>
      </div>
      <div className="main_list">
        <div className="img_list">
        {content_data.map(data => {
          return (
            <div className="slide">
              <img src={data.img} alt=""/>
              <a href="#">
                <span className="cover">
                  {data.isNow?
                  <span className="mark">NOW</span> 
                  :
                  null
                  }
                  <span className="title">{data.title}</span>
                  <span className="title_on">{data.title_on}</span>
                </span>
              </a>
            </div>
          )
        })} 
        </div>
      </div>
      <div className="btn_menu">
        <ul>
          {menu_data.map(md => {
            return (
              <li>
                <a href="#">
                  <span>{md.menu}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </article>
  )
}

export default Contents