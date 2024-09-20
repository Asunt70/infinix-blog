import styles from "./page.module.css";
import Blog from "@/app/components/blogTemplate/blogTemplate";
import Presentation from "@/app/components/blogComponents/Presentation";
import Heading from "@/app/components/blogComponents/heading";
import Paragraph from "@/app/components/blogComponents/paragraph";

export default function MasteringCSSGrid() {
  return (
    <>
      <Blog>
        <Presentation
          title="Mastering CSS Grid Layout"
          src="/css-grid.webp"
          alt="test"
        />
        <Paragraph text="CSS Grid Layout is a powerful tool for creating complex layouts on the web. It provides a flexible and efficient way to arrange items on a page, making it easier to design responsive and visually appealing websites." />
        <Heading title="Key Concepts of CSS Grid Layout:" />
        <div className={styles.list}>
          <ul>
            <li>
              <strong>Grid Container:</strong>The parent element that defines
              the grid structure.
            </li>
            <li>
              <strong>Grid Items:</strong>The child elements that are placed
              within the grid container.
            </li>
            <li>
              <strong>Grid Areas:</strong>The grid items are divided into
              smaller areas, which can be used for positioning and sizing.
            </li>
            <li>
              <strong>Grid Lines:</strong>The grid container is divided into
              grid lines, which can be used for positioning and sizing.
            </li>
          </ul>
        </div>
        <Heading title="Getting Started" />
        <ul className={styles.list2}>
          <li>
            <span>Set the display property to grid:</span>
            <img className={styles.image} src="/p1-code1.png" alt="code" />
          </li>
          <li>
            <span>Define grid tracks:</span>
            <img className={styles.image} src="/p1-code2.png" alt="code" />
          </li>
          <li>
            <span>Place grid items:</span>
            <img className={styles.image} src="/p1-code3.png" alt="code" />
          </li>
        </ul>
        <Heading title="Advanced Techniques" />
        <div className={styles.list}>
          <ul>
            <li>
              <strong>Grid Gaps:</strong>Create spaces between grid items using
              grid-gap.
            </li>
            <li>
              <strong>Grid Areas:</strong>Assign specific areas to grid items
              using grid-area.
            </li>
            <li>
              <strong>Grid Auto-Flow:</strong>Automatically place grid items
              using grid-auto-flow.
            </li>
            <li>
              <strong>Grid Templates:</strong>Define grid tracks using named
              templates
            </li>
          </ul>
        </div>
        <Heading title="Example:" />
        <img className={styles.image} src="/p1-code4.png" alt="code" />
        <img className={styles.image} src="/p1-code5.png" alt="code" />

        <Heading title="Conclusion" />
        <Paragraph text="CSS Grid Layout offers a powerful and flexible way to create complex layouts. By understanding the key concepts and techniques, you can create visually appealing and responsive designs for your web applications." />
      </Blog>
    </>
  );
}
