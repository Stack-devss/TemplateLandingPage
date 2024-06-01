import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ContentBox.module.css";

export type ContentBoxType = {
  className?: string;
  picture?: string;
  category?: string;
  title?: string;
  picture1?: string;
  userThumb?: string;
  buttonText?: string;
  userThumb1?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const ContentBox: FunctionComponent<ContentBoxType> = ({
  className = "",
  picture,
  category,
  title,
  picture1,
  userThumb,
  buttonText,
  userThumb1,
  propMinWidth,
}) => {
  const buttonTextStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.contentBox, className].join(" ")}>
      <img className={styles.pictureIcon} loading="lazy" alt="" src={picture} />
      <div className={styles.content}>
        <div className={styles.icon}>
          <img
            className={styles.iconJamIconsOutlineL}
            alt=""
            src="/icon--jamicons--outline--logos--alarmclock.svg"
          />
        </div>
        <div className={styles.titleCategory}>
          <div className={styles.category}>{category}</div>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.badge}>
              <img
                className={styles.iconJamIconsOutlineL1}
                alt=""
                src="/icon--jamicons--outline--logos--circle1.svg"
              />
              <div className={styles.textContainer}>
                <div className={styles.buttonText}>+2,5%</div>
              </div>
              <img
                className={styles.iconIconoirStatUp}
                alt=""
                src="/icon--iconoir--statup.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL2}
              alt=""
              src="/icon--jamicons--outline--logos--pencil.svg"
            />
          </div>
        </div>
        <img className={styles.pictureIcon1} alt="" src={picture1} />
        <div className={styles.paragraph}>
          Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
        </div>
        <div className={styles.userCard}>
          <img className={styles.userThumbIcon} alt="" src={userThumb} />
          <div className={styles.details}>
            <div className={styles.category1}>Jane Doe</div>
            <div className={styles.category2}>Senior Designer</div>
          </div>
        </div>
      </div>
      <div className={styles.buttonsGroup}>
        <div className={styles.button}>
          <img
            className={styles.iconJamIconsOutlineL3}
            alt=""
            src="/icon--jamicons--outline--logos--plus.svg"
          />
          <div className={styles.textContainer1}>
            <div className={styles.buttonText1}>Buy Tickets</div>
          </div>
          <img
            className={styles.iconJamIconsOutlineL4}
            loading="lazy"
            alt=""
            src="/icon--jamicons--outline--logos--arrowright-17.svg"
          />
          <div className={styles.badge1}>
            <div className={styles.text}>9</div>
          </div>
        </div>
        <div className={styles.button1}>
          <img
            className={styles.iconJamIconsOutlineL5}
            alt=""
            src="/icon--jamicons--outline--logos--plus2.svg"
          />
          <div className={styles.textContainer2}>
            <div className={styles.buttonText2}>Event Details</div>
          </div>
          <img
            className={styles.iconJamIconsOutlineL6}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright2.svg"
          />
        </div>
      </div>
      <div className={styles.badge2}>
        <img
          className={styles.iconJamIconsOutlineL7}
          alt=""
          src="/icon--jamicons--outline--logos--circle2.svg"
        />
        <div className={styles.textContainer3}>
          <div className={styles.buttonText3} style={buttonTextStyle}>
            {buttonText}
          </div>
        </div>
        <img
          className={styles.iconIconoirCancel}
          alt=""
          src="/icon--iconoir--cancel1.svg"
        />
      </div>
      <img className={styles.userThumbIcon1} alt="" src={userThumb1} />
    </div>
  );
};

export default ContentBox;
