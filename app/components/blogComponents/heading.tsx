import styles from "./heading.module.css";

interface HeadingProps {
  title: string;
}

export default function Heading(props: HeadingProps) {
  return <h2 className={styles.heading}>{props.title}</h2>;
}
