import { FunctionComponent } from "react";
import Main from "../components/Main";
import Hero from "../components/Hero";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Section2 from "../components/Section2";
import Section1 from "../components/Section1";
import Section from "../components/Section";
import Columns from "../components/Columns";
import Bottom from "../components/Bottom";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage4}>
      <Main />
      <section className={styles.content}>
        <div className={styles.heroParent}>
          <Hero />
          <FrameComponent4 />
        </div>
      </section>
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <Section2
        caption="Speed"
        secondaryHeadline="Work fast, w/o interruptions"
        propFlex="unset"
        propAlignSelf="stretch"
      />
      <Section1 />
      <Section />
      <footer className={styles.footer}>
        <Columns />
        <Bottom />
        <div className={styles.disclaimer}>
          <div className={styles.disclaimer1}>
            In sed posuere sed ullamcorper feugiat. Lacinia elit neque, ipsum,
            non. Tellus mattis enim volutpat habitasse. Semper posuere lectus
            consectetur aliquam et ullamcorper. Dictumst aenean justo fames diam
            eget volutpat vestibulum elit. Blandit aliquet bibendum pellentesque
            turpis id penatibus faucibus id nunc. Aenean rhoncus, erat
            pellentesque eu. Quis morbi condimentum phasellus in ultricies eu
            amet.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
