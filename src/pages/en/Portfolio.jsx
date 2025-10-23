import React, { useEffect, useRef, useState } from "react";
import Header from "../../Components/en/Header";
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

function Portfolio() {
  const handleLearnMore = () => {
    const element = document.getElementById("About-me");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: "error",
        message: "Please fill in all required fields (Name, Email, and Message)."
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
        message: "Error sending message. Please check your connection."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={Styles.Portfolio}>
      <div>
        <Header />
      </div>
      <div className={Styles.hero}>
        <div className={Styles.white}>
          <div className={Styles["Hero-container"]}>
            <div className={Styles["Hero-About-me"]}>
              <div>- I Am</div>
              <h1>AmirHossein Ebadi</h1>
              <div>
                <h3>Web Designer;</h3>
                <p>Front-End Developer</p>
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
        </div>
        <div className={Styles.black}>
          <div className={Styles.backgroundimage} />
        </div>
      </div>
      <div className={Styles["black-divider"]} />
      <div className={Styles.Info} id="About-me">
        <div className={Styles.container}>
          <div className={Styles["About-me-title"]}>
            <h1>ABOUT ME</h1>
          </div>
          <p className={Styles["About-me-text"]}>
            Recently diving into front-end development, I've built a solid
            foundation in HTML, CSS, React, and Vite—driven by genuine passion
            and curiosity. Through inspiring projects and continuous learning, I
            aim to bring creativity, reliability, and positive energy to every
            collaboration.
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
              <h1>Explore</h1>
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
                <h1 className={Styles["Explore-header"]}>Design</h1>
                <p className={Styles["Explore-text"]}>
                  I design sleek, responsive websites with a focus on clean
                  visuals and user-friendly layouts. Every element is crafted to
                  be both functional and visually engaging.
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
                <h1 className={Styles["Explore-header"]}>Development</h1>
                <p className={Styles["Explore-text"]}>
                  I'm skilled in front-end development and web design, blending
                  clean code with sleek UI/UX to craft responsive, modern, and
                  user-focused digital experiences.
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
              <h1 className={Styles["Explore-header"]}>Maintenance</h1>
              <p className={Styles["Explore-text"]}>
                I'm proficient in front-end and web design maintenance, ensuring
                smooth updates, optimal UI/UX, bug fixes, and site performance
                for seamless user experiences
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.Skills}>
        <div className={Styles.container}>
          <div className={Styles["Skills-header"]}>
            <h1>Skills</h1>
          </div>
          <div className={`${Styles["Skills-holder"]} flex`}>
            <div className={Styles.Using}>
              <div className={Styles["Using-header"]}>
                <h1>using now:</h1>
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
                <h1>LEARNING:</h1>
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
                <h1>OTHER SKILLS:</h1>
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
              <h1>PORTFOLIO</h1>
            </div>
          </div>
        </div>
        <div className={Styles["port-header-text"]}>
          <h1>WEB DESIGNS</h1>
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
        <h1>And many more to come!</h1>
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
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <textarea
                className={Styles.Message}
                name="message"
                id="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              {formStatus.message && (
                <p className={`${Styles["form-message"]} ${Styles[formStatus.type]}`}>
                  {formStatus.message}
                </p>
              )}
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
