import { FunctionComponent } from "react";
import FooterComponentsColumn1 from "./FooterComponentsColumn1";
import FooterComponentsColumn from "./FooterComponentsColumn";
import styles from "./Columns.module.css";

export type ColumnsType = {
  className?: string;
};

const Columns: FunctionComponent<ColumnsType> = ({ className = "" }) => {
  return (
    <div className={[styles.columns, className].join(" ")}>
      <div className={styles.footerComponentscolumn}>
        <div className={styles.footerComponentslinkfooter}>
          <img
            className={styles.iconJamIconsOutlineL}
            alt=""
            src="/icon--jamicons--outline--logos--world.svg"
          />
          <div className={styles.linkName}>Categories</div>
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
          <div className={styles.logoGrey}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <b className={styles.waves}>weeb</b>
          </div>
          <div className={styles.footerComponentslinkfooter1}>
            <img
              className={styles.iconJamIconsOutlineL3}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName1}>User Experience</div>
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
            <div className={styles.linkName2}>Digital Media</div>
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
            <div className={styles.linkName3}>Lifestyle</div>
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
          <div className={styles.footerComponentslinkfooter4}>
            <img
              className={styles.iconJamIconsOutlineL12}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName4}>Programming</div>
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
          <div className={styles.footerComponentslinkfooter5}>
            <img
              className={styles.iconJamIconsOutlineL15}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName5}>Animation</div>
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
            <div className={styles.linkName6}>Seven</div>
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
            <div className={styles.linkName7}>Eight</div>
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
            <div className={styles.linkName8}>Nine</div>
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
            <div className={styles.linkName9}>Ten</div>
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
        </div>
      </div>
      <FooterComponentsColumn1 />
      <FooterComponentsColumn
        linkName="Solutions"
        linkName1="Brainstorming"
        linkName2="Ideation"
        linkName3="Wireframing"
        linkName4="Research"
        linkName5="Design"
        linkName6="Concept"
        showFooterComponentsLinkFoote
      />
      <FooterComponentsColumn
        linkName="Resources"
        linkName1="Help Center"
        linkName2="Blog"
        linkName3="Tutorials"
        linkName4="FAQs"
        linkName5="Community"
        linkName6="Events"
        showFooterComponentsLinkFoote={false}
        propMinWidth="90px"
        propMinWidth1="84px"
        propMinWidth2="32px"
        propMinWidth3="62px"
        propAlignSelf="unset"
        propWidth="173px"
        propMinWidth4="unset"
        propColor="#475569"
        propDisplay="unset"
      />
      <div className={styles.footerComponentscolumn1}>
        <div className={styles.footerComponentslinkfooter10}>
          <img
            className={styles.iconJamIconsOutlineL30}
            alt=""
            src="/icon--jamicons--outline--logos--world.svg"
          />
          <div className={styles.linkName10}>Support</div>
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
        <div className={styles.links1}>
          <div className={styles.footerComponentslinkfooter11}>
            <img
              className={styles.iconJamIconsOutlineL33}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName11}>Contact Us</div>
            <div className={styles.badge11}>
              <img
                className={styles.iconJamIconsOutlineL34}
                alt=""
                src="/icon--jamicons--outline--logos--circle2.svg"
              />
              <div className={styles.textContainer11}>
                <div className={styles.buttonText11}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel11}
                alt=""
                src="/icon--iconoir--cancel1.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL35}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
          <div className={styles.footerComponentslinkfooter12}>
            <img
              className={styles.iconJamIconsOutlineL36}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName12}>Developers</div>
            <div className={styles.badge12}>
              <img
                className={styles.iconJamIconsOutlineL37}
                alt=""
                src="/icon--jamicons--outline--logos--circle2.svg"
              />
              <div className={styles.textContainer12}>
                <div className={styles.buttonText12}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel12}
                alt=""
                src="/icon--iconoir--cancel1.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL38}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
          <div className={styles.footerComponentslinkfooter13}>
            <img
              className={styles.iconJamIconsOutlineL39}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName13}>Documentation</div>
            <div className={styles.badge13}>
              <img
                className={styles.iconJamIconsOutlineL40}
                alt=""
                src="/icon--jamicons--outline--logos--circle2.svg"
              />
              <div className={styles.textContainer13}>
                <div className={styles.buttonText13}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel13}
                alt=""
                src="/icon--iconoir--cancel1.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL41}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
          <div className={styles.footerComponentslinkfooter14}>
            <img
              className={styles.iconJamIconsOutlineL42}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName14}>Integrations</div>
            <div className={styles.badge14}>
              <img
                className={styles.iconJamIconsOutlineL43}
                alt=""
                src="/icon--jamicons--outline--logos--circle2.svg"
              />
              <div className={styles.textContainer14}>
                <div className={styles.buttonText14}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel14}
                alt=""
                src="/icon--iconoir--cancel1.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL44}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
          <div className={styles.footerComponentslinkfooter15}>
            <img
              className={styles.iconJamIconsOutlineL45}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName15}>Reports</div>
            <div className={styles.badge15}>
              <img
                className={styles.iconJamIconsOutlineL46}
                alt=""
                src="/icon--jamicons--outline--logos--circle2.svg"
              />
              <div className={styles.textContainer15}>
                <div className={styles.buttonText15}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel15}
                alt=""
                src="/icon--iconoir--cancel1.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL47}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
          <div className={styles.footerComponentslinkfooter16}>
            <img
              className={styles.iconJamIconsOutlineL48}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName16}>Webinar</div>
            <div className={styles.badge16}>
              <img
                className={styles.iconJamIconsOutlineL49}
                alt=""
                src="/icon--jamicons--outline--logos--circle2.svg"
              />
              <div className={styles.textContainer16}>
                <div className={styles.buttonText16}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel16}
                alt=""
                src="/icon--iconoir--cancel1.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL50}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
          <div className={styles.footerComponentslinkfooter17}>
            <img
              className={styles.iconJamIconsOutlineL51}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName17}>Seven</div>
            <div className={styles.badge17}>
              <img
                className={styles.iconJamIconsOutlineL52}
                alt=""
                src="/icon--jamicons--outline--logos--circle2.svg"
              />
              <div className={styles.textContainer17}>
                <div className={styles.buttonText17}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel17}
                alt=""
                src="/icon--iconoir--cancel1.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL53}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
          <div className={styles.footerComponentslinkfooter18}>
            <img
              className={styles.iconJamIconsOutlineL54}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName18}>Eight</div>
            <div className={styles.badge18}>
              <img
                className={styles.iconJamIconsOutlineL55}
                alt=""
                src="/icon--jamicons--outline--logos--circle2.svg"
              />
              <div className={styles.textContainer18}>
                <div className={styles.buttonText18}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel18}
                alt=""
                src="/icon--iconoir--cancel1.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL56}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
          <div className={styles.footerComponentslinkfooter19}>
            <img
              className={styles.iconJamIconsOutlineL57}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName19}>Nine</div>
            <div className={styles.badge19}>
              <img
                className={styles.iconJamIconsOutlineL58}
                alt=""
                src="/icon--jamicons--outline--logos--circle2.svg"
              />
              <div className={styles.textContainer19}>
                <div className={styles.buttonText19}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel19}
                alt=""
                src="/icon--iconoir--cancel1.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL59}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
          <div className={styles.footerComponentslinkfooter20}>
            <img
              className={styles.iconJamIconsOutlineL60}
              alt=""
              src="/icon--jamicons--outline--logos--world.svg"
            />
            <div className={styles.linkName20}>Ten</div>
            <div className={styles.badge20}>
              <img
                className={styles.iconJamIconsOutlineL61}
                alt=""
                src="/icon--jamicons--outline--logos--circle2.svg"
              />
              <div className={styles.textContainer20}>
                <div className={styles.buttonText20}>BETA</div>
              </div>
              <img
                className={styles.iconIconoirCancel20}
                alt=""
                src="/icon--iconoir--cancel1.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL62}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright3.svg"
            />
          </div>
        </div>
      </div>
      <FooterComponentsColumn
        linkName="Company"
        linkName1="About"
        linkName2="Press"
        linkName3="Events"
        linkName4="Careers"
        linkName5="Customers"
        linkName6="Partners"
        showFooterComponentsLinkFoote
        propMinWidth="77px"
        propMinWidth1="43px"
        propMinWidth2="41px"
        propMinWidth3="48px"
        propAlignSelf="stretch"
        propWidth="unset"
        propMinWidth4="56px"
        propColor="#0f172a"
        propDisplay="inline-block"
      />
    </div>
  );
};

export default Columns;
