import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.landingPage4Inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.cardContentWrapper}>
          <div className={styles.cardContent}>
            <div className={styles.cardContentChild} />
            <div className={styles.sectionText}>
              <div className={styles.top}>
                <b className={styles.caption}>Discover</b>
                <h1 className={styles.mainHeadline}>
                  <span>Unlimited</span>
                  <span className={styles.ideasForYour}>
                    {" "}
                    ideas for your next great projects
                  </span>
                </h1>
                <div className={styles.secondaryHeadline}>
                  Find all the resources you need
                </div>
              </div>
              <div className={styles.paragraph}>
                <p className={styles.scelerisqueAuctorDolor}>
                  Scelerisque auctor dolor diam tortor, fames faucibus non
                  interdum nunc.
                </p>
                <p className={styles.ultricesNibhSapien}>
                  Ultrices nibh sapien elit gravida ac, rutrum molestie
                  adipiscing lacinia.
                </p>
              </div>
              <div className={styles.buttonsGroup}>
                <div className={styles.button}>
                  <img
                    className={styles.iconJamIconsOutlineL}
                    alt=""
                    src="/icon--jamicons--outline--logos--plus.svg"
                  />
                  <div className={styles.textContainer}>
                    <div className={styles.buttonText}>Discover Ideas</div>
                  </div>
                  <img
                    className={styles.iconJamIconsOutlineL1}
                    loading="lazy"
                    alt=""
                    src="/icon--jamicons--outline--logos--arrowright1.svg"
                  />
                </div>
                <div className={styles.button2}>
                  <img
                    className={styles.iconJamIconsOutlineL2}
                    alt=""
                    src="/icon--jamicons--outline--logos--plus.svg"
                  />
                  <div className={styles.textContainer1}>
                    <div className={styles.buttonText1}>Button Text</div>
                  </div>
                  <img
                    className={styles.iconJamIconsOutlineL3}
                    alt=""
                    src="/icon--jamicons--outline--logos--arrowright.svg"
                  />
                </div>
                <div className={styles.button3}>
                  <img
                    className={styles.iconJamIconsOutlineL4}
                    alt=""
                    src="/icon--jamicons--outline--logos--plus.svg"
                  />
                  <div className={styles.textContainer2}>
                    <div className={styles.buttonText2}>Button Text</div>
                  </div>
                  <img
                    className={styles.iconJamIconsOutlineL5}
                    alt=""
                    src="/icon--jamicons--outline--logos--arrowright.svg"
                  />
                  <div className={styles.badge}>
                    <div className={styles.text}>9</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.shapesIcon}
          loading="lazy"
          alt=""
          src="/shapes.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
