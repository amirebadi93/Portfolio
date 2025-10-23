import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";
import Styles from "../../Styles/Header.module.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = sectionId => {
    // If we're already on the portfolio page, just scroll to the section
    if (location.pathname === "/en/portfolio") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to portfolio page first, then scroll to section
      navigate("/en/portfolio");
      // Use setTimeout to ensure the page has loaded before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header className={Styles.header}>
      <div className={Styles["header-logo"]}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={Styles["header-menu"]}>
        <ul>
          <li className={`${Styles["menu-item"]} `} onClick={ () =>navigate("/en")}>
            Main Page
          </li>
          <li
            className={`${Styles["menu-item"]} ${Styles[
              "menu-item-portfolio"
            ]}`}
            onClick={() => navigate("/en/portfolio")}
          >
            Portfolio
          </li>
          <li
            className={`${Styles["menu-item"]} ${Styles["menu-item-aboutme"]}`}
            onClick={() => handleScrollToSection("About-me")}
            style={{ cursor: "pointer" }}
          >
            About Me
          </li>
          <li
            className={`${Styles["menu-item"]} ${Styles[
              "menu-item-contactme"
            ]}`}
            onClick={() => handleScrollToSection("Contact-me")}
            style={{ cursor: "pointer" }}
          >
            Contact Me
          </li>
          <li
            className={`${Styles["menu-item"]} ${Styles["language-switch"]}`}
            onClick={() => navigate("/fa")}
          >
            فارسی
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
