import styles from "./blogTemplate.module.css";
import Navbar from "../NavBar";
import { ReactNode } from 'react';

export default function Blog({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className={styles.pageContent}>
        <div className={styles.post}>{children}</div>
      </main>
    </>
  );
}