import { FunctionComponent } from "react";
import styles from "./Hero.module.css";

export type HeroType = {
  className?: string;
};

const Hero: FunctionComponent<HeroType> = ({ className = "" }) => {
  return (
    <div className={[styles.hero, className].join(" ")}>
      <div className={styles.heroChild} />
      <div className={styles.sectionText}>
        <div className={styles.top}>
          <b className={styles.caption}>Caption</b>
          <h1 className={styles.mainHeadline}>
            <span>{`Design Faster `}</span>
            <span className={styles.span}>{`&`}</span>
            <span> Better</span>
          </h1>
          <div className={styles.secondaryHeadline}>Headline Two</div>
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
              <div className={styles.buttonText}>Join Now</div>
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
              <div className={styles.buttonText1}>View Demo</div>
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
      <div className={styles.explorer} />
    </div>
  );
};

export default Hero;
