import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/fa/Header";
import Facebook from "../../assets/Icons/icons8-facebook-100.png";
import X from "../../assets/Icons/icons8-x-100.png";
import Instagram from "../../assets/Icons/icons8-instagram-100.png";
import Youtube from "../../assets/Icons/icons8-youtube-100.png";
import Styles from "../../Styles/Home.module.css";
import RTLStyles from "../../Styles/RTL.module.css";

function Home() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/fa/portfolio");
  };

  return (
    <div className={Styles.home} dir="rtl">
      <div>
        <Header />
      </div>
      <div className={Styles.content}>
        <div className={Styles.container}>
          <div className={Styles["About-me"]}>
            <div>- من هستم</div>
            <h1>AmirHossein Ebadi</h1>
            <div>
              <h3>طراح وب؛</h3>
              <p>این صفحه وب پیش‌نمایش من است.</p>
              <p>
                اگر می‌خواهید درباره من بیشتر بدانید، فقط روی دکمه زیر کلیک کنید
              </p>
              <button
                className={Styles["learnmore-button"]}
                onClick={handleLearnMore}
              >
                بیشتر بدانید
              </button>
            </div>
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
              اشتراک در خبرنامه:
              <form action="">
                <input type="email" placeholder="ایمیل" />
                <button className={Styles["subscribe-button"]}>اشتراک</button>
              </form>
            </div> */}
        </div>
        <div className={Styles["footer-bottom"]}>
          <div>شرکت A.E Design MediaCraft - تمامی حقوق محفوظ است</div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
