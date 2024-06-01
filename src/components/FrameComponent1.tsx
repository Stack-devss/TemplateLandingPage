import { FunctionComponent } from "react";
import Section2 from "./Section2";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.sectionWrapper, className].join(" ")}>
      <Section2
        caption="Powerful"
        secondaryHeadline="All the tools you can imagine"
      />
    </section>
  );
};

export default FrameComponent1;
