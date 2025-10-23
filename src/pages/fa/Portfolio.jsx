import React, { useEffect, useRef, useState } from "react";
import Header from "../../Components/fa/Header";
import Styles from "../../Styles/Portfolio.module.css";
import Divider from "../../assets/img/Divider.png";
import Design from "../../assets/Icons/icons8-design-64.png";
import Development from "../../assets/Icons/icons8-development-64.png";
import Maintenance from "../../assets/Icons/icons8-laptop-settings-50.png";
import Iconhtml from "../../assets/Icons/HTML.png";
import Iconcss from "../../assets/Icons/CSS.png";
import Iconjs from "../../assets/Icons/JavaScript.png";
import Iconreact from "../../assets/Icons/icons8-react-24.png";
import Iconnode from "../../assets/Icons/icons8-nodejs-48.png";
import Icongit from "../../assets/Icons/icons8-git-48.png";
import Iconfig from "../../assets/Icons/icons8-figma-48.png";
import Iconblend from "../../assets/Icons/icons8-microsoft-blend-240.png";
import Iconbootstrap from "../../assets/Icons/icons8-bootstrap-240.png";
import Iconenglish from "../../assets/Icons/icons8-english-96.png";
import IconMicrosoft from "../../assets/Icons/icons8-microsoft-240.png";
import Iconcrm from "../../assets/Icons/icons8-microsoft-dynamics-365-240.png";
import Iconvm from "../../assets/Icons/icons8-vmware-100.png";
import Iconnetwork from "../../assets/Icons/icons8-networking-manager-94.png";
import Iconvoip from "../../assets/Icons/icons8-voip-100.png";
import Aboutbackgoround from "../../assets/img/dried-leaves-gray-blank-background.jpg";
import Itemport1 from "../../assets/img/screenshot-1752267044170.png";
import Itemport2 from "../../assets/img/port2.png";
import Itemport3 from "../../assets/img/port3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
// import RTLStyles from "../../Styles/RTL.module.css";

function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLearnMore = () => {
    const element = document.getElementById("About-me");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: "error",
        message:
          "Please fill in all required fields (Name, Email, and Message)."
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          type: "success",
          message: "Message sent successfully! I will get back to you soon."
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        setFormStatus({
          type: "error",
          message: data.message || "Failed to send message. Please try again."
        });
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Network error. Please check your connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // IntersectionObserver to reveal elements on view
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const setRevealRef = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(Styles.revealVisible);
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={Styles.Portfolio} dir="rtl">
      <div>
        <Header />
      </div>
      <div className={Styles.hero}>
        <div className={Styles.black}>
          <div className={Styles.backgroundimage} />
        </div>
        <div className={Styles.white}>
          <div className={Styles["Hero-container"]}>
            <div className={Styles["Hero-About-me"]}>
              <div>- من هستم</div>
              <h1>AmirHossein Ebadi</h1>
              <div>
                <h3>طراح وب؛</h3>
                <p>توسعه‌دهنده فرانت‌اند</p>
                <p>
                  اگر می‌خواهید درباره من بیشتر بدانید، فقط روی دکمه زیر کلیک
                  کنید
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
      </div>
      <div className={Styles["black-divider"]} />
      <div className={Styles.Info} id="About-me">
        <div className={Styles.container}>
          <div className={Styles["About-me-title"]}>
            <h1>درباره من</h1>
          </div>
          <p className={Styles["About-me-text"]}>
            اخیراً وارد توسعه فرانت‌اند شده‌ام و پایه محکمی در HTML، CSS، React
            و Vite ساخته‌ام—که توسط علاقه واقعی و کنجکاوی هدایت می‌شود. از طریق
            پروژه‌های الهام‌بخش و یادگیری مداوم، هدفم آوردن خلاقیت، قابلیت
            اطمینان و انرژی مثبت به هر همکاری است.
          </p>
        </div>
        <div className={Styles.container}>
          <div className={Styles["section-divider"]}>
            <img
              src={Divider}
              alt="Divider"
              className={Styles["divider-img"]}
            />
          </div>
        </div>
        <div className={Styles.container}>
          <div className={Styles.explore}>
            <div
              ref={setRevealRef}
              className={`${Styles["Explore-Header"]} ${Styles.reveal}`}
            >
              <h1>کاوش کنید</h1>
            </div>
            <div className={Styles["Explore-items-Holder"]}>
              <div
                ref={setRevealRef}
                className={`${Styles.Design} ${Styles[
                  "Explore-items"
                ]} ${Styles.reveal} Relative`}
              >
                <div className={`${Styles["Explore-item-img"]} Absolute`}>
                  <img src={Design} alt="Design" />
                </div>
                <h1 className={Styles["Explore-header"]}>طراحی</h1>
                <p className={Styles["Explore-text"]}>
                  من وب‌سایت‌های شیک و ریسپانسیو طراحی می‌کنم با تمرکز بر تصاویر
                  تمیز و چیدمان‌های کاربرپسند. هر عنصر به گونه‌ای ساخته می‌شود
                  که هم کاربردی و هم بصری جذاب باشد.
                </p>
              </div>
              <div
                ref={setRevealRef}
                className={`${Styles.Development} ${Styles[
                  "Explore-items"
                ]} ${Styles.reveal} Relative`}
              >
                <div className={`${Styles["Explore-item-img"]} Absolute`}>
                  <img src={Development} alt="Development" />
                </div>
                <h1 className={Styles["Explore-header"]}>توسعه</h1>
                <p className={Styles["Explore-text"]}>
                  من مهارت در توسعه فرانت‌اند و طراحی وب دارم، ترکیب کد تمیز با
                  UI/UX شیک برای ایجاد تجربیات دیجیتال ریسپانسیو، مدرن و
                  کاربرمحور.
                </p>
              </div>
            </div>
            <div
              ref={setRevealRef}
              className={`${Styles.Maintenance} ${Styles[
                "Explore-items"
              ]} ${Styles.reveal} Relative`}
            >
              <div className={`${Styles["Explore-item-img"]} Absolute`}>
                <img src={Maintenance} alt="Maintenance" />
              </div>
              <h1 className={Styles["Explore-header"]}>نگهداری</h1>
              <p className={Styles["Explore-text"]}>
                من در نگهداری فرانت‌اند و طراحی وب مهارت دارم، اطمینان از
                به‌روزرسانی‌های روان، UI/UX بهینه، رفع اشکالات و عملکرد سایت
                برای تجربیات کاربری بی‌نقص
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.Skills}>
        <div className={Styles.container}>
          <div className={Styles["Skills-header"]}>
            <h1>مهارت‌ها</h1>
          </div>
          <div className={`${Styles["Skills-holder"]} flex`}>
            <div className={Styles.Using}>
              <div className={Styles["Using-header"]}>
                <h1>در حال استفاده:</h1>
              </div>
              <div className={`${Styles["Using-icons"]} flex`}>
                <div className={Styles["Using-item"]}>
                  <img
                    src={Iconhtml}
                    alt="HTML"
                    className={Styles["Using-icon"]}
                  />
                  <span>HTML</span>
                </div>
                <div className={Styles["Using-item"]}>
                  <img
                    src={Iconcss}
                    alt="CSS"
                    className={Styles["Using-icon"]}
                  />
                  <span>CSS</span>
                </div>
                <div className={Styles["Using-item"]}>
                  <img
                    src={Iconjs}
                    alt="JavaScript"
                    className={Styles["Using-icon"]}
                  />
                  <span>JavaScript</span>
                </div>
                <div className={Styles["Using-item"]}>
                  <img
                    src={Iconreact}
                    alt="React"
                    className={Styles["Using-icon"]}
                  />
                  <span>React</span>
                </div>
                <div className={Styles["Using-item"]}>
                  <img
                    src={Icongit}
                    alt="Git"
                    className={Styles["Using-icon"]}
                  />
                  <span>Git</span>
                </div>
              </div>
            </div>

            <div className={Styles.Learning}>
              <div className={Styles["Learning-header"]}>
                <h1>در حال یادگیری:</h1>
              </div>
              <div className={`${Styles["Learning-icons"]} flex`}>
                <div className={Styles["Learning-item"]}>
                  <img
                    src={Iconnode}
                    alt="NodeJS"
                    className={Styles["Learning-icon"]}
                  />
                  <span>NodeJS</span>
                </div>
                <div className={Styles["Learning-item"]}>
                  <img
                    src={Iconfig}
                    alt="Figma"
                    className={Styles["Learning-icon"]}
                  />
                  <span>Figma</span>
                </div>
                <div className={Styles["Learning-item"]}>
                  <img
                    src={Iconblend}
                    alt="Microsoft Blend"
                    className={Styles["Learning-icon"]}
                  />
                  <span>Microsoft Blend</span>
                </div>
                <div className={Styles["Learning-item"]}>
                  <img
                    src={Iconbootstrap}
                    alt="Bootstrap"
                    className={Styles["Learning-icon"]}
                  />
                  <span>Bootstrap</span>
                </div>
              </div>
            </div>

            <div className={Styles["Other-skills"]}>
              <div className={Styles["Other-header"]}>
                <h1>مهارت‌های دیگر:</h1>
              </div>
              <div className={`${Styles["Other-icons"]} flex`}>
                <div className={Styles["Other-item"]}>
                  <img
                    src={Iconenglish}
                    alt="English"
                    className={Styles["Other-icon"]}
                  />
                  <span>English</span>
                </div>
                <div className={Styles["Other-item"]}>
                  <img
                    src={IconMicrosoft}
                    alt="MCSE"
                    className={Styles["Other-icon"]}
                  />
                  <span>MCSE</span>
                </div>
                <div className={Styles["Other-item"]}>
                  <img
                    src={Iconcrm}
                    alt="Microsoft Dynamics"
                    className={Styles["Other-icon"]}
                  />
                  <span>Microsoft Dynamic</span>
                </div>
                <div className={Styles["Other-item"]}>
                  <img
                    src={Iconvm}
                    alt="VMware"
                    className={Styles["Other-icon"]}
                  />
                  <span>VMware</span>
                </div>
                <div className={Styles["Other-item"]}>
                  <img
                    src={Iconnetwork}
                    alt="Networking"
                    className={Styles["Other-icon"]}
                  />
                  <span>Networking</span>
                </div>
                <div className={Styles["Other-item"]}>
                  <img
                    src={Iconvoip}
                    alt="VoIP"
                    className={Styles["Other-icon"]}
                  />
                  <span>Issabel VOIP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.Portfolio}>
        <div className={Styles["Portfolio-header"]}>
          <div className={Styles["Portfolio-title-holder"]}>
            <div className={Styles["Portfolio-title"]}>
              <h1>نمونه کارها</h1>
            </div>
          </div>
        </div>
        <div className={Styles["port-header-text"]}>
          <h1>طراحی‌های وب</h1>
        </div>
        <div className={`${Styles["Portfolio-items"]} ${Styles.flex}`}>
          <div className={`${Styles["Portfolio-item"]} ${Styles.port1}`}>
            <img src={Itemport1} alt="Portfolio Item 1" />
          </div>
          <div className={`${Styles["Portfolio-item"]} ${Styles.port2}`}>
            <img src={Itemport2} alt="Portfolio Item 2" />
          </div>
          <div className={`${Styles["Portfolio-item"]} ${Styles.port3}`}>
            <img src={Itemport3} alt="Portfolio Item 3" />
          </div>
        </div>
      </div>
      <div className={Styles["port-footer"]}>
        <h1>و بسیاری دیگر در راه است!</h1>
      </div>
      <div className={Styles["contact-holder"]} id="Contact-me">
        <div className={Styles.container}>
          <div className={`${Styles.contact} flex`}>
            <div className={Styles["contact-header"]}>
              <div className={Styles["contact-title-holder"]}>
                <div className={Styles["contact-title"]}>
                  <h1>Contact</h1>
                </div>
                <div className={Styles["contact-text"]}>
                  <p>
                    fill the form below and send your message. <br />
                    I will get back to you as soon as possible!
                  </p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className={Styles["contact-form"]}>
              {formStatus.message &&
                <div
                  className={`${Styles.formMessage} ${Styles[formStatus.type]}`}
                >
                  {formStatus.message}
                </div>}
              <input
                type="text"
                name="name"
                id="Name"
                placeholder="Enter your name *"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                id="Email"
                placeholder="Enter your Email *"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                name="phone"
                id="Phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <textarea
                name="message"
                id={Styles.Message}
                placeholder="Enter your message *"
                value={formData.message}
                onChange={handleInputChange}
                required
              />{" "}
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={Styles.footer}>
        <div className={Styles["footer-items"]}>
          <div className={Styles["footer-item"]}>
            <FontAwesomeIcon
              className={Styles["footer-up-icon"]}
              icon={faChevronUp}
            />
            <br />
            <a href="#top" className={Styles["back-to-top"]}>
              BACK TO TOP
            </a>
          </div>
          <p className={Styles["footer-item"]}>
            © 2025 Amirhossein Ebadi ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
