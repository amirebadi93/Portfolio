import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/en/Header";
import Facebook from "../../assets/Icons/icons8-facebook-100.png";
import X from "../../assets/Icons/icons8-x-100.png";
import Instagram from "../../assets/Icons/icons8-instagram-100.png";
import Youtube from "../../assets/Icons/icons8-youtube-100.png";
import Styles from "../../Styles/Home.module.css";

function Home() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/en/portfolio");
  };

  return (
    <div className={Styles.home}>
      <div>
        <Header />
      </div>
      <div className={Styles.container}>
        <div className={Styles["About-me"]}>
          <div>- I Am</div>
          <h1>AmirHossein Ebadi</h1>
          <div>
            <h3>Web Designer;</h3>
            <p>This is my preview web page.</p>
            <p>if you want to learn more about me, just click below</p>
            <button
              className={Styles["learnmore-button"]}
              onClick={handleLearnMore}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <footer className={Styles.footer}>
        <div className={`${Styles.social} ${Styles.inline}`}>
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={X} alt="X" />
          <img src={Youtube} alt="Youtube" />
        </div>
        <div
          className={`${Styles[
            "form-container"
          ]} ${Styles.right} ${Styles.inline} ${Styles.width50}`}
        >
          {/* <div
            className={`${Styles.subscribe} ${Styles.inline} ${Styles.center}`}
          >
            Subscribe to newsletter:
            <form action="">
              <input type="email" placeholder="E-Mail" />
              <button className={Styles["subscribe-button"]}>subscribe</button>
            </form>
          </div> */}
        </div>
        <div className={Styles["footer-bottom"]}>
          <div>A.E Design MediaCraft Company - All Rights Reserved</div>
        </div>
      </footer>
    </div>
  );
}

export default Home;