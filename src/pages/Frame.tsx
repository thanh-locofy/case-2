import { FunctionComponent } from "react";
import Midle from "../components/Midle";
import NavLinks from "../components/NavLinks";
import SubscribeOurNewsletter from "../components/SubscribeOurNewsletter";
import Footer from "../components/Footer";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.dataProcessor}>
      <header className={styles.navigation}>
        <div className={styles.smallOne}>
          <div className={styles.contact}>
            <img
              className={styles.mapPinIcon}
              loading="lazy"
              alt=""
              src="/map-pin.svg"
            />
            <div className={styles.storeLocationLincoln344Wrapper}>
              <div className={styles.storeLocationLincoln}>
                Store Location: Lincoln- 344, Illinois, Chicago, USA
              </div>
            </div>
          </div>
          <div className={styles.linksWrapper}>
            <div className={styles.links}>
              <div className={styles.eng}>
                <div className={styles.eng1}>Eng</div>
                <div className={styles.groupWrapper}>
                  <img className={styles.groupIcon} alt="" src="/group.svg" />
                </div>
              </div>
              <div className={styles.usd}>
                <div className={styles.usd1}>USD</div>
                <div className={styles.groupContainer}>
                  <img className={styles.groupIcon1} alt="" src="/group.svg" />
                </div>
              </div>
              <div className={styles.devider} />
              <nav className={styles.account}>
                <div className={styles.signIn}>Sign In</div>
                <div className={styles.dataReceiver}>/</div>
                <div className={styles.signUp}>Sign Up</div>
              </nav>
            </div>
          </div>
        </div>
        <Midle />
        <NavLinks />
      </header>
      <div className={styles.breadcrumbsWrapper}>
        <div className={styles.breadcrumbs}>
          <div className={styles.location}>
            <img
              className={styles.home11Icon}
              loading="lazy"
              alt=""
              src="/home1-1.svg"
            />
            <img className={styles.groupIcon2} alt="" src="/group@2x.png" />
            <div className={styles.home}>Home</div>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <div className={styles.home1}>Home</div>
            <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
            <div className={styles.home2}>Home</div>
            <div className={styles.imageProcessorWrapper}>
              <img
                className={styles.imageProcessorIcon}
                alt=""
                src="/image-processor.svg"
              />
            </div>
            <div className={styles.home3}>Account</div>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon2} alt="" src="/vector-1.svg" />
            </div>
            <div className={styles.vegetables}>Create Account</div>
          </div>
        </div>
      </div>
      <div className={styles.createAccountWrapper}>
        <form className={styles.createAccount}>
          <h1 className={styles.createAccount1}>Create Account</h1>
          <div className={styles.field}>
            <div className={styles.field1}>
              <div className={styles.inputField}>
                <input
                  className={styles.email}
                  placeholder="Email"
                  type="text"
                />
              </div>
              <div className={styles.inputField1}>
                <input
                  className={styles.password}
                  placeholder="Password"
                  type="text"
                />
                <img
                  className={styles.eyeOpen1Icon}
                  alt=""
                  src="/eyeopen-1.svg"
                />
              </div>
              <div className={styles.inputField2}>
                <input
                  className={styles.confirmPassword}
                  placeholder="Confirm Password"
                  type="text"
                />
                <img
                  className={styles.eyeOpen1Icon1}
                  alt=""
                  src="/eyeopen-1.svg"
                />
              </div>
            </div>
            <div className={styles.remember}>
              <input className={styles.checkbox} type="checkbox" />
              <div
                className={styles.acceptAllTerms}
              >{`Accept all terms & Conditions`}</div>
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.normal}>Create Account</div>
          </button>
          <div className={styles.dontHaveAccount}>
            <div className={styles.alreadyHaveAccount}>
              Already have account
            </div>
            <div className={styles.login}> Login</div>
          </div>
        </form>
      </div>
      <SubscribeOurNewsletter />
      <Footer />
    </div>
  );
};

export default Frame;
