import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Section2.module.css";

export type Section2Type = {
  className?: string;
  caption?: string;
  secondaryHeadline?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const Section2: FunctionComponent<Section2Type> = ({
  className = "",
  caption,
  secondaryHeadline,
  propFlex,
  propAlignSelf,
}) => {
  const sectionStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  return (
    <div className={[styles.section, className].join(" ")} style={sectionStyle}>
      <div className={styles.col}>
        <div className={styles.sectionText}>
          <div className={styles.top}>
            <b className={styles.caption}>{caption}</b>
            <div className={styles.mainHeadline}>
              Unlimited ideas for your projects
            </div>
            <h1 className={styles.secondaryHeadline}>{secondaryHeadline}</h1>
          </div>
          <div className={styles.paragraph}>
            Scelerisque auctor dolor diam tortor, fames faucibus non interdum
            nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
            adipiscing lacinia.
          </div>
          <div className={styles.buttonsGroup}>
            <div className={styles.button}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--plus1.svg"
              />
              <div className={styles.textContainer}>
                <b className={styles.buttonText}>Start For Free</b>
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
      </div>
      <div className={styles.screendesktop}>
        <div className={styles.topBar}>
          <div className={styles.circles}>
            <img
              className={styles.iconJamIconsFilledCi}
              loading="lazy"
              alt=""
              src="/icon--jamicons--filled--circlef.svg"
            />
            <img
              className={styles.iconJamIconsFilledCi1}
              loading="lazy"
              alt=""
              src="/icon--jamicons--filled--circlef-1.svg"
            />
            <img
              className={styles.iconJamIconsFilledCi2}
              alt=""
              src="/icon--jamicons--filled--circlef-2.svg"
            />
          </div>
          <div className={styles.arrows}>
            <img
              className={styles.iconJamIconsOutlineL6}
              alt=""
              src="/icon--jamicons--outline--logos--chevronleft.svg"
            />
            <img
              className={styles.iconJamIconsOutlineL7}
              alt=""
              src="/icon--jamicons--outline--logos--chevronright.svg"
            />
          </div>
          <div className={styles.addressBar}>
            <div className={styles.feature}>feature</div>
          </div>
        </div>
        <div className={styles.wrapperDesktopAppPlaceholde}>
          <img
            className={styles.desktopAppPlaceholder1Icon}
            loading="lazy"
            alt=""
            src="/desktopappplaceholder1-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
