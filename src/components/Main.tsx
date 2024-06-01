import { FunctionComponent } from "react";
import styles from "./Main.module.css";

export type MainType = {
  className?: string;
};

const Main: FunctionComponent<MainType> = ({ className = "" }) => {
  return (
    <section className={[styles.main, className].join(" ")}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.left}>
            <b className={styles.weeb}>weeb</b>
            <nav className={styles.buttonsGroup}>
              <div className={styles.menuItem}>
                <img
                  className={styles.iconJamIconsOutlineL}
                  alt=""
                  src="/icon--jamicons--outline--logos--home.svg"
                />
                <a className={styles.menuItem1}>About Us</a>
                <div className={styles.badge}>
                  <img
                    className={styles.iconJamIconsOutlineL1}
                    alt=""
                    src="/icon--jamicons--outline--logos--circle.svg"
                  />
                  <div className={styles.textContainer}>
                    <div className={styles.buttonText}>99+</div>
                  </div>
                  <img
                    className={styles.iconIconoirCancel}
                    alt=""
                    src="/icon--iconoir--cancel.svg"
                  />
                </div>
                <img
                  className={styles.iconJamIconsOutlineL2}
                  alt=""
                  src="/icon--jamicons--outline--logos--chevrondown.svg"
                />
              </div>
              <div className={styles.menuItem2}>
                <img
                  className={styles.iconJamIconsOutlineL3}
                  alt=""
                  src="/icon--jamicons--outline--logos--home.svg"
                />
                <a className={styles.menuItem3}>Solutions</a>
                <div className={styles.badge1}>
                  <img
                    className={styles.iconJamIconsOutlineL4}
                    alt=""
                    src="/icon--jamicons--outline--logos--circle.svg"
                  />
                  <div className={styles.textContainer1}>
                    <div className={styles.buttonText1}>99+</div>
                  </div>
                  <img
                    className={styles.iconIconoirCancel1}
                    alt=""
                    src="/icon--iconoir--cancel.svg"
                  />
                </div>
                <img
                  className={styles.iconJamIconsOutlineL5}
                  alt=""
                  src="/icon--jamicons--outline--logos--chevrondown.svg"
                />
              </div>
              <div className={styles.menuItem4}>
                <img
                  className={styles.iconJamIconsOutlineL6}
                  alt=""
                  src="/icon--jamicons--outline--logos--home.svg"
                />
                <a className={styles.menuItem5}>Pricing</a>
                <div className={styles.badge2}>
                  <img
                    className={styles.iconJamIconsOutlineL7}
                    alt=""
                    src="/icon--jamicons--outline--logos--circle.svg"
                  />
                  <div className={styles.textContainer2}>
                    <div className={styles.buttonText2}>99+</div>
                  </div>
                  <img
                    className={styles.iconIconoirCancel2}
                    alt=""
                    src="/icon--iconoir--cancel.svg"
                  />
                </div>
                <img
                  className={styles.iconJamIconsOutlineL8}
                  alt=""
                  src="/icon--jamicons--outline--logos--chevrondown.svg"
                />
              </div>
              <div className={styles.menuItem6}>
                <img
                  className={styles.iconJamIconsOutlineL9}
                  alt=""
                  src="/icon--jamicons--outline--logos--home.svg"
                />
                <a className={styles.menuItem7}>Resources</a>
                <div className={styles.badge3}>
                  <img
                    className={styles.iconJamIconsOutlineL10}
                    alt=""
                    src="/icon--jamicons--outline--logos--circle.svg"
                  />
                  <div className={styles.textContainer3}>
                    <div className={styles.buttonText3}>99+</div>
                  </div>
                  <img
                    className={styles.iconIconoirCancel3}
                    alt=""
                    src="/icon--iconoir--cancel.svg"
                  />
                </div>
                <img
                  className={styles.iconJamIconsOutlineL11}
                  alt=""
                  src="/icon--jamicons--outline--logos--chevrondown.svg"
                />
              </div>
            </nav>
          </div>
          <div className={styles.buttonsGroup1}>
            <div className={styles.button}>
              <img
                className={styles.iconJamIconsOutlineL12}
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className={styles.textContainer4}>
                <a className={styles.buttonText4}>Log In</a>
              </div>
              <img
                className={styles.iconJamIconsOutlineL13}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
              <div className={styles.badge4}>
                <div className={styles.text}>9</div>
              </div>
            </div>
            <div className={styles.button1}>
              <img
                className={styles.iconJamIconsOutlineL14}
                alt=""
                src="/icon--jamicons--outline--logos--plus1.svg"
              />
              <div className={styles.textContainer5}>
                <a className={styles.buttonText5}>Join Now</a>
              </div>
              <img
                className={styles.iconJamIconsOutlineL15}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright1.svg"
              />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Main;
