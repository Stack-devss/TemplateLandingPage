import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.landingPage4Inner, className].join(" ")}>
      <div className={styles.cardTwoParent}>
        <div className={styles.cardTwo}>
          <div className={styles.remote} />
          <div className={styles.sectionText}>
            <div className={styles.top}>
              <b className={styles.caption}>Customers</b>
              <h1 className={styles.mainHeadline}>
                <span>Target</span>
                <span className={styles.customersWithOur}>
                  {" "}
                  customers with our powerful AI kit
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
                Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing
                lacinia.
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
                  <div className={styles.buttonText}>
                    How Targeting Customers Works
                  </div>
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
        <div className={styles.shapesWrapper}>
          <div className={styles.shapes}>
            <div className={styles.xParent}>
              <div className={styles.x} />
              <div className={styles.deleteAll} />
            </div>
            <div className={styles.businessParent}>
              <div className={styles.business} />
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameItem} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
