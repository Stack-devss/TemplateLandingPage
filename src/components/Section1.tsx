import { FunctionComponent } from "react";
import styles from "./Section1.module.css";

export type Section1Type = {
  className?: string;
};

const Section1: FunctionComponent<Section1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.section, className].join(" ")}>
      <div className={styles.contentBlock}>
        <div className={styles.separatorParent}>
          <div className={styles.separator} />
          <div className={styles.sectionText}>
            <div className={styles.top}>
              <b className={styles.caption}>Testimonials</b>
              <div className={styles.mainHeadline}>
                Unlimited ideas for your projects
              </div>
              <h1 className={styles.secondaryHeadline}>
                Bigapp got to the next level
              </h1>
            </div>
            <div className={styles.paragraph}>
              “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
              viverra orci dui consequat turpis scelerisque faucibus.”
            </div>
            <div className={styles.buttonsGroup}>
              <div className={styles.button}>
                <img
                  className={styles.iconJamIconsOutlineL}
                  alt=""
                  src="/icon--jamicons--outline--logos--plus.svg"
                />
                <div className={styles.textContainer}>
                  <div className={styles.buttonText}>View Case Study</div>
                </div>
                <img
                  className={styles.iconJamIconsOutlineL1}
                  loading="lazy"
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright1.svg"
                />
                <div className={styles.badge}>
                  <div className={styles.text}>9</div>
                </div>
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
                <div className={styles.badge1}>
                  <div className={styles.text1}>9</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobileAppPlaceholder2}>
        <img
          className={styles.mobileAppPlaceholder2Child}
          alt=""
          src="/rectangle-1.svg"
        />
        <div className={styles.appScreen}>
          <div className={styles.screenContent}>
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
            <div className={styles.topContent}>
              <img
                className={styles.titleIcon}
                loading="lazy"
                alt=""
                src="/title.svg"
              />
              <img
                className={styles.descriptionIcon}
                loading="lazy"
                alt=""
                src="/description.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.bottomWrapper}>
          <div className={styles.bottom}>
            <img
              className={styles.titleIcon1}
              loading="lazy"
              alt=""
              src="/title-1.svg"
            />
            <img
              className={styles.rowIcon}
              loading="lazy"
              alt=""
              src="/row.svg"
            />
          </div>
        </div>
        <div className={styles.bottomMenu}>
          <img
            className={styles.iconIoniconsOutlinePu}
            loading="lazy"
            alt=""
            src="/icon--ionicons--outline--pulseoutline.svg"
          />
          <img
            className={styles.iconIoniconsOutlineSe}
            loading="lazy"
            alt=""
            src="/icon--ionicons--outline--searchoutline.svg"
          />
          <img
            className={styles.iconIoniconsOutlineMe}
            loading="lazy"
            alt=""
            src="/icon--ionicons--outline--menuoutline.svg"
          />
        </div>
      </div>
      <div className={styles.userBlock}>
        <div className={styles.col}>
          <blockquote className={styles.paragraph1}>
            “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque faucibus.”
          </blockquote>
          <div className={styles.userCard}>
            <img
              className={styles.userThumbIcon}
              loading="lazy"
              alt=""
              src="/user-thumb@2x.png"
            />
            <div className={styles.details}>
              <div className={styles.category}>Rwanda Melflor</div>
              <div className={styles.category1}>Co-founder Bigapp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
