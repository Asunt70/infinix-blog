import styles from "./paragraph.module.css";

interface ParagraphProps {
  text: string;
}

export default function Paragraph(props: ParagraphProps) {
  return <p className={styles.paragraph}>{props.text}</p>;
}
