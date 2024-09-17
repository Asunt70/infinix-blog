import styles from "./cardSkeleton.module.css";

export default function CardSkeleton() {
  return (
    <div className={styles.skeletonCard}>
      {/* Skeleton for the text part */}
      <div className={styles.skeletonText}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonDescription}></div>
      </div>

      {/* Skeleton for the image */}
      <div className={styles.skeletonImage}></div>
    </div>
  );
}
