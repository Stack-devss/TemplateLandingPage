import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FooterComponentsColumn.module.css";

export type FooterComponentsColumnType = {
  className?: string;
  linkName?: string;
  linkName1?: string;
  linkName2?: string;
  linkName3?: string;
  linkName4?: string;
  linkName5?: string;
  linkName6?: string;
  showFooterComponentsLinkFoote?: boolean;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
  propMinWidth3?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propMinWidth4?: CSSProperties["minWidth"];
  propColor?: CSSProperties["color"];
  propDisplay?: CSSProperties["display"];
};

const FooterComponentsColumn: FunctionComponent<FooterComponentsColumnType> = ({
  className = "",
  linkName,
  linkName1,
  linkName2,
  linkName3,
  linkName4,
  linkName5,
  linkName6,
  showFooterComponentsLinkFoote,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
  propMinWidth3,
  propAlignSelf,
  propWidth,
  propMinWidth4,
  propColor,
  propDisplay,
}) => {
  const linkNameStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const linkName1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const linkName2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const linkName3Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  const footerComponentsLinkFooterStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const linkName4Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth4,
      color: propColor,
      display: propDisplay,
    };
  }, [propMinWidth4, propColor, propDisplay]);

  return (
    <div className={[styles.footerComponentscolumn, className].join(" ")}>
      <div className={styles.footerComponentslinkfooter}>
        <img
          className={styles.iconJamIconsOutlineL}
          alt=""
          src="/icon--jamicons--outline--logos--world.svg"
        />
        <div className={styles.linkName} style={linkNameStyle}>
          {linkName}
        </div>
        <div className={styles.badge}>
          <img
            className={styles.iconJamIconsOutlineL1}
            alt=""
            src="/icon--jamicons--outline--logos--circle2.svg"
          />
          <div className={styles.textContainer}>
            <div className={styles.buttonText}>BETA</div>
          </div>
          <img
            className={styles.iconIconoirCancel}
            alt=""
            src="/icon--iconoir--cancel1.svg"
          />
        </div>
        <img
          className={styles.iconJamIconsOutlineL2}
          alt=""
          src="/icon--jamicons--outline--logos--arrowright3.svg"
        />
      </div>
      <div className={styles.links}>
        <div className={styles.footerComponentslinkfooter1}>
          <img
            className={styles.iconJamIconsOutlineL3}
            alt=""
            src="/icon--jamicons--outline--logos--world.svg"
          />
          <div className={styles.linkName1} style={linkName1Style}>
            {linkName1}
          </div>
          <div className={styles.badge1}>
            <img
              className={styles.iconJamIconsOutlineL4}
              alt=""
              src="/icon--jamicons--outline--logos--circle2.svg"
            />
            <div className={styles.textContainer1}>
              <div className={styles.buttonText1}>BETA</div>
            </div>
            <img
              className={styles.iconIconoirCancel1}
              alt=""
              src="/icon--iconoir--cancel1.svg"
            />
          </div>
          <img
            className={styles.iconJamIconsOutlineL5}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright3.svg"
          />
        </div>
        <div className={styles.footerComponentslinkfooter2}>
          <img
            className={styles.iconJamIconsOutlineL6}
            alt=""
            src="/icon--jamicons--outline--logos--world.svg"
          />
          <div className={styles.linkName2} style={linkName2Style}>
            {linkName2}
          </div>
          <div className={styles.badge2}>
            <img
              className={styles.iconJamIconsOutlineL7}
              alt=""
              src="/icon--jamicons--outline--logos--circle2.svg"
            />
            <div className={styles.textContainer2}>
              <div className={styles.buttonText2}>BETA</div>
            </div>
            <img
              className={styles.iconIconoirCancel2}
              alt=""
              src="/icon--iconoir--cancel1.svg"
            />
          </div>
          <img
            className={styles.iconJamIconsOutlineL8}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright3.svg"
          />
        </div>
        <div className={styles.footerComponentslinkfooter3}>
          <img
            className={styles.iconJamIconsOutlineL9}
            alt=""
            src="/icon--jamicons--outline--logos--world.svg"
          />
          <div className={styles.linkName3} style={linkName3Style}>
            {linkName3}
          </div>
          <div className={styles.badge3}>
            <img
              className={styles.iconJamIconsOutlineL10}
              alt=""
              src="/icon--jamicons--outline--logos--circle2.svg"
            />
            <div className={styles.textContainer3}>
              <div className={styles.buttonText3}>BETA</div>
            </div>
            <img
              className={styles.iconIconoirCancel3}
              alt=""
              src="/icon--iconoir--cancel1.svg"
            />
          </div>
          <img
            className={styles.iconJamIconsOutlineL11}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright3.svg"
          />
        </div>
        {showFooterComponentsLinkFoote && (
          <div
            className={styles.footerComponentslinkfooter4}
            style={footerComponentsLinkFooterStyle}
          >
            <img
              className={styles.iconJamIconsOutlineL12}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName4} style={linkName4Style}>
              {linkName4}
            </div>
            <div className={styles.badge4}>
              <img
                className={styles.iconJamIconsOutlineL13}
                alt=""
                src="/icon--jamicons--outline--logos--circle2.svg"
              />
              <div className={styles.textContainer4}>
                <div className={styles.buttonText4}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel4}
                alt=""
                src="/icon--iconoir--cancel1.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL14}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
        )}
        <div className={styles.footerComponentslinkfooter5}>
          <img
            className={styles.iconJamIconsOutlineL15}
            alt=""
            src="/icon--jamicons--outline--logos--world.svg"
          />
          <div className={styles.linkName5}>{linkName5}</div>
          <div className={styles.badge5}>
            <img
              className={styles.iconJamIconsOutlineL16}
              alt=""
              src="/icon--jamicons--outline--logos--circle2.svg"
            />
            <div className={styles.textContainer5}>
              <div className={styles.buttonText5}>BETA</div>
            </div>
            <img
              className={styles.iconIconoirCancel5}
              alt=""
              src="/icon--iconoir--cancel1.svg"
            />
          </div>
          <img
            className={styles.iconJamIconsOutlineL17}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright3.svg"
          />
        </div>
        <div className={styles.footerComponentslinkfooter6}>
          <img
            className={styles.iconJamIconsOutlineL18}
            alt=""
            src="/icon--jamicons--outline--logos--world.svg"
          />
          <div className={styles.linkName6}>{linkName6}</div>
          <div className={styles.badge6}>
            <img
              className={styles.iconJamIconsOutlineL19}
              alt=""
              src="/icon--jamicons--outline--logos--circle2.svg"
            />
            <div className={styles.textContainer6}>
              <div className={styles.buttonText6}>BETA</div>
            </div>
            <img
              className={styles.iconIconoirCancel6}
              alt=""
              src="/icon--iconoir--cancel1.svg"
            />
          </div>
          <img
            className={styles.iconJamIconsOutlineL20}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright3.svg"
          />
        </div>
        <div className={styles.footerComponentslinkfooter7}>
          <img
            className={styles.iconJamIconsOutlineL21}
            alt=""
            src="/icon--jamicons--outline--logos--world.svg"
          />
          <div className={styles.linkName7}>Seven</div>
          <div className={styles.badge7}>
            <img
              className={styles.iconJamIconsOutlineL22}
              alt=""
              src="/icon--jamicons--outline--logos--circle2.svg"
            />
            <div className={styles.textContainer7}>
              <div className={styles.buttonText7}>BETA</div>
            </div>
            <img
              className={styles.iconIconoirCancel7}
              alt=""
              src="/icon--iconoir--cancel1.svg"
            />
          </div>
          <img
            className={styles.iconJamIconsOutlineL23}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright3.svg"
          />
        </div>
        <div className={styles.footerComponentslinkfooter8}>
          <img
            className={styles.iconJamIconsOutlineL24}
            alt=""
            src="/icon--jamicons--outline--logos--world.svg"
          />
          <div className={styles.linkName8}>Eight</div>
          <div className={styles.badge8}>
            <img
              className={styles.iconJamIconsOutlineL25}
              alt=""
              src="/icon--jamicons--outline--logos--circle2.svg"
            />
            <div className={styles.textContainer8}>
              <div className={styles.buttonText8}>BETA</div>
            </div>
            <img
              className={styles.iconIconoirCancel8}
              alt=""
              src="/icon--iconoir--cancel1.svg"
            />
          </div>
          <img
            className={styles.iconJamIconsOutlineL26}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright3.svg"
          />
        </div>
        <div className={styles.footerComponentslinkfooter9}>
          <img
            className={styles.iconJamIconsOutlineL27}
            alt=""
            src="/icon--jamicons--outline--logos--world.svg"
          />
          <div className={styles.linkName9}>Nine</div>
          <div className={styles.badge9}>
            <img
              className={styles.iconJamIconsOutlineL28}
              alt=""
              src="/icon--jamicons--outline--logos--circle2.svg"
            />
            <div className={styles.textContainer9}>
              <div className={styles.buttonText9}>BETA</div>
            </div>
            <img
              className={styles.iconIconoirCancel9}
              alt=""
              src="/icon--iconoir--cancel1.svg"
            />
          </div>
          <img
            className={styles.iconJamIconsOutlineL29}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright3.svg"
          />
        </div>
        <div className={styles.footerComponentslinkfooter10}>
          <img
            className={styles.iconJamIconsOutlineL30}
            alt=""
            src="/icon--jamicons--outline--logos--world.svg"
          />
          <div className={styles.linkName10}>Ten</div>
          <div className={styles.badge10}>
            <img
              className={styles.iconJamIconsOutlineL31}
              alt=""
              src="/icon--jamicons--outline--logos--circle2.svg"
            />
            <div className={styles.textContainer10}>
              <div className={styles.buttonText10}>BETA</div>
            </div>
            <img
              className={styles.iconIconoirCancel10}
              alt=""
              src="/icon--iconoir--cancel1.svg"
            />
          </div>
          <img
            className={styles.iconJamIconsOutlineL32}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright3.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterComponentsColumn;
