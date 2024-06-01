import { FunctionComponent } from "react";
import ContentBox from "./ContentBox";
import styles from "./Section.module.css";

export type SectionType = {
  className?: string;
};

const Section: FunctionComponent<SectionType> = ({ className = "" }) => {
  return (
    <section className={[styles.section, className].join(" ")}>
      <div className={styles.row}>
        <div className={styles.sectionText}>
          <div className={styles.top}>
            <b className={styles.caption}>Caption</b>
            <div className={styles.mainHeadline}>
              Building apps just got easier
            </div>
            <h1 className={styles.secondaryHeadline}>
              Design events near your
            </h1>
          </div>
          <div className={styles.paragraph}>
            Ac urna elementum purus vulputate tincidunt. Quam maecenas feugiat
            congue orci, eget tellus pellentesque aliquet. Felis fringilla morbi
            dui ac consequat risus pharetra odio pulvinar. Id pellentesque in
            tortor nec nulla cras sapien. Adipiscing nisi tellus quisque aliquet
            sit risus elementum scelerisque.
          </div>
          <div className={styles.buttonsGroup}>
            <div className={styles.button}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--plus1.svg"
              />
              <div className={styles.textContainer}>
                <b className={styles.buttonText}>Get Started</b>
              </div>
              <img
                className={styles.iconJamIconsOutlineL1}
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
        <div className={styles.button1}>
          <img
            className={styles.iconJamIconsOutlineL6}
            alt=""
            src="/icon--jamicons--outline--logos--plus.svg"
          />
          <div className={styles.textContainer3}>
            <div className={styles.buttonText3}>Explore Events</div>
          </div>
          <img
            className={styles.iconJamIconsOutlineL7}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright-17.svg"
          />
          <div className={styles.badge1}>
            <div className={styles.text1}>9</div>
          </div>
        </div>
      </div>
      <div className={styles.row1}>
        <ContentBox
          picture="/picture@2x.png"
          category="Design Thinking"
          title="Wild Horse Event"
          picture1="/picture@2x.png"
          userThumb="/user-thumb-1@2x.png"
          buttonText="Design Thinking"
          userThumb1="/user-thumb@2x.png"
        />
        <ContentBox
          picture="/picture-1@2x.png"
          category="Festival"
          title={`Music & Colors`}
          picture1="/picture@2x.png"
          userThumb="/user-thumb-2@2x.png"
          buttonText="Festival"
          userThumb1="/user-thumb@2x.png"
          propMinWidth="48px"
        />
        <ContentBox
          picture="/picture-2@2x.png"
          category="Bootcamp"
          title="Happy Father’s Day"
          picture1="/picture@2x.png"
          userThumb="/user-thumb-3@2x.png"
          buttonText="Bootcamp"
          userThumb1="/user-thumb@2x.png"
          propMinWidth="65px"
        />
      </div>
    </section>
  );
};

export default Section;
