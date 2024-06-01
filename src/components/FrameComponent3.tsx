import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.sectionWrapper, className].join(" ")}>
      <div className={styles.section}>
        <div className={styles.sectionText}>
          <div className={styles.top}>
            <b className={styles.caption}>Caption</b>
            <div className={styles.mainHeadline}>Make Better Designs</div>
            <h1 className={styles.secondaryHeadline}>Join Leading Companies</h1>
          </div>
          <div className={styles.paragraph}>
            <p className={styles.sitElitFeugiat}>
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris.
            </p>
            <p className={styles.pharetraEuImperdiet}>
              Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
            </p>
          </div>
          <div className={styles.buttonsGroup}>
            <div className={styles.button}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--plus1.svg"
              />
              <div className={styles.textContainer}>
                <div className={styles.buttonText}>Button Text</div>
              </div>
              <img
                className={styles.iconJamIconsOutlineL1}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright1.svg"
              />
            </div>
            <div className={styles.button1}>
              <img
                className={styles.iconJamIconsOutlineL2}
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className={styles.textContainer1}>
                <div className={styles.buttonText1}>Join Now</div>
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
        <div className={styles.section1}>
          <div className={styles.logoGrey}>
            <img
              className={styles.logoGreyChild}
              loading="lazy"
              alt=""
              src="/group-45.svg"
            />
            <b className={styles.smartfinder}>SmartFinder</b>
          </div>
          <div className={styles.logoGrey1}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <b className={styles.zoomerr}>Zoomerr</b>
          </div>
          <div className={styles.logoGrey2}>
            <img
              className={styles.vectorIcon1}
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
            <b className={styles.shells}>SHELLS</b>
          </div>
          <div className={styles.logoGrey3}>
            <img
              className={styles.vectorIcon2}
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
            <b className={styles.waves}>WAVES</b>
          </div>
          <div className={styles.logoGrey4}>
            <img
              className={styles.logoGreyItem}
              loading="lazy"
              alt=""
              src="/group-46.svg"
            />
            <b className={styles.artvenue}>ArtVenue</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
