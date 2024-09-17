import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  url: string;
}

export default function Card(props: CardProps) {
  return (
    <Link href={props.url}>
      <div className={styles.card}>
        <div className={styles.textContainer}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={props.imageSrc}
            alt={props.title}
            width={90}
            height={60}
            className={styles.cardImage}
          />
        </div>
      </div>
    </Link>
  );
}
