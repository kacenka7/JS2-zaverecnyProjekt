export const Header = (showMenu)=> {
    return (
    <header id="header">
      <div className="header__content container">
        <div className="site-logo"></div>

        <div className="navigation">
          <button className="nav-btn"></button>
          <nav className="rollout-nav nav-closed">
            <div className="nav-links">
              <a href="/">domů</a>
              <a href="#menu">menu</a>
              <a href="#gallery">galerie</a>
              <a href="#contact">kontakt</a>
            </div>
            <div className="home-btn">
            <a href="/">Hlavní stránka</a>
            </div>
            
          </nav>
        </div>


      </div>
    </header>
    )

}