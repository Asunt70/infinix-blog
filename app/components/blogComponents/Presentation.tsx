import styles from "./Presentation.module.css";
import Image from "next/image";

interface PresentationProps {
  title: string;
  author: string;
  src: string;
  alt: string;
}

export default function Presentation(props: PresentationProps) {
  return (
    <div className={styles.container}>
      <h1>{props.title}</h1>
      <div className={styles.author}>
        <div className={styles.imgAuthor}></div>
        <span>{props.author}</span>
      </div>
      <Image src={props.src} alt={props.alt} width={300} height={400} />
      <p className=""></p>
    </div>
  );
}
