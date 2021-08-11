function Header(props) {
  const styles = props.styles;
  
  return (
    <header>
      <h1>
        <a href="/App.js">
          <img src="../images/logo.png" alt="대림대학교" />
        </a>
      </h1>
      <span className={styles.list}>
        <button className={styles.list_btn}>전체편성표</button>
      </span>
    </header>
  )
}

export default Header