// import logo from './logo.svg'
import './App.css'
import Header from './components/header'
import Contents from './components/contents'
import Footer from './components/footer'

function App() {
  const content_data = [{
    img: "../images/main02.jpeg",
    isNow: true,
    title: "[대림대학교 ㅣ 대...",
    title_on: "대림대학교 ㅣ 대림대 공식 홍보영상(..."
  },{
    img: "../images/main03.jpeg",
    isNow: false,
    title: "대림대학교 컴퓨터...",
    title_on: "대림대학교 컴퓨터정보학부를 소개합..."
  },{
    img: "../images/main04.jpeg",
    isNow: false,
    title: "[[2020 대림 Cyber Tech-F...",
    title_on: "2020 대림 Cyber Tech-Fair] Space deffense"
  },{
    img: "../images/main05.jpeg",
    isNow: false,
    title: "[2020 대림 Cyber Tech-F...",
    title_on: "2020 대림 Cyber Tech-Fair] BlockBlock"
  },{
    img: "../images/main06.jpeg",
    isNow: false,
    title: "[[2020 대림 Cyber Tech-F...",
    title_on: "[2020 대림 Cyber Tech-Fair] 루시드드림"
  },{
    img: "../images/main07.jpeg",
    isNow: false,
    title: "[[2020 대림 Cyber Tech-F...",
    title_on: "[2020 대림 Cyber Tech-Fair] shooting shot"
  },{
    img: "../images/main08.jpeg",
    isNow: false,
    title: "[2020 대림 Cyber Tech-F...",
    title_on: "[2020 대림 Cyber Tech-Fair] 주차 관리 프로..."
  }]

  const menu_data = [{
    menu: "입학 홈페이지"
  },{
    menu: "합격예측서비스"
  },{
    menu: "대림대학교 홈페이지"
  },{
    menu: "로그인"
  }]

  return (
    <div id="wrap">
      <Header></Header>
      <Contents content_data={content_data} menu_data={menu_data}></Contents>
      <Footer></Footer>
    </div>
  );
}

export default App