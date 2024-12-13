import { BiMenuAltRight } from "react-icons/bi";
import "../styles/Header.css";
import { useState } from "react";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const detectClickOutsideMenu = (e) => {
    if (!e.target.matches(".h-menu") && menuOpened==true) {
      setMenuOpened(false);
    }
  };

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <section className="h-wrapper" onClick={(e) => detectClickOutsideMenu(e)}>
      <div
        className="flexCenter paddings innerWidth h-container"
        
      >
        <img src="./logo.png" alt="logo" width={100} />

        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
          <a href="">Residencies</a>
          <a href="">Our value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>


        <div className="menu-icon">
          <BiMenuAltRight
            size={30}
            onClick={() => setMenuOpened(!menuOpened)}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
