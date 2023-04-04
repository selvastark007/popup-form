import './App.css';
import ProgerssForm from "./components/progress/ProgerssForm";

// antd
import { Tooltip } from "antd";

// gif
import envelopAnimation from "./assets/envelopani.gif";

// icons
import { AiFillCloseCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { RxDiscordLogo } from "react-icons/rx";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";


  const handleButtonClick = () => {
    window.open("https://www.webdads.com", "_blank");
  };

function App() {
  return (
    <div className="App">
      <div className="message-content">
        <div className="image">
          <img src={envelopAnimation} />
        </div>
        <div className="title">
          <h2>Thank you for taking time to contact us!</h2>
          <small style={{ color: "black" }}>
            We appreciate your feedback and are committed to responding to your
            inquries in a timely manner.
          </small>
        </div>
        <div className="close-button">
          <Tooltip title="Back to home" placement="left">
            <button onClick={handleButtonClick} style={{cursor:"pointer"}}>
              <AiFillCloseCircle />
            </button>
          </Tooltip>
        </div>
      </div>
      <div className="progerss-form">
        <ProgerssForm />
      </div>
      <div className="content-details">
        <div className="social-icons">
          <i>
            <BsInstagram />
          </i>
          <i>
            <FiTwitter />
          </i>
          <i>
            <RxDiscordLogo />
          </i>
          <i>
            <FiFacebook />
          </i>
          <i>
            <FiLinkedin />
          </i>
        </div>
        <div className="content-sub-details">
          <div>
            <small>
              If you have any queries or questions,please do not hesitate to
              contact us.
            </small>
            <br />
            <small>
              Our friendly customer service team is available to help you from.
            </small>
          </div>

          <div style={{marginTop : '10px'}}>
            <small>
              9 am to 6 pm,Monday to Friday. You can reach us by phone at
              +91-8825607550 / +91-6382253490 / +91-7200742458
            </small>
            <br />
            <small>
              by email at info@webdads2u.com, or by using our contact form on
              our website.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
