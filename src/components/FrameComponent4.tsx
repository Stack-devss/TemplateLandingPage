import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.screendesktopWrapper, className].join(" ")}>
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
              loading="lazy"
              alt=""
              src="/icon--jamicons--filled--circlef-2.svg"
            />
          </div>
          <div className={styles.arrows}>
            <img
              className={styles.iconJamIconsOutlineL}
              loading="lazy"
              alt=""
              src="/icon--jamicons--outline--logos--chevronleft.svg"
            />
            <img
              className={styles.iconJamIconsOutlineL1}
              loading="lazy"
              alt=""
              src="/icon--jamicons--outline--logos--chevronright.svg"
            />
          </div>
          <div className={styles.addressBar}>
            <div className={styles.feature}>app.weeb.ai</div>
          </div>
        </div>
        <img
          className={styles.desktopAppPlaceholder1Icon}
          loading="lazy"
          alt=""
          src="/desktopappplaceholder1.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent4;
