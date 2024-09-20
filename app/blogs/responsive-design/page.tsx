import styles from "./page.module.css";
import Blog from "@/app/components/blogTemplate/blogTemplate";
import Presentation from "@/app/components/blogComponents/Presentation";
import Heading from "@/app/components/blogComponents/heading";
import Paragraph from "@/app/components/blogComponents/paragraph";

export default function ResponsiveDesign() {
  return (
    <>
      <Blog>
        <Presentation
          title="A Guide To Responsive Web Design"
          src="/responsive.webp"
          alt="responsive"
        />
        <Heading title="What is Responsive Web Design" />
        <Paragraph text="Think about it: we're constantly switching between our phones, tablets, and computers. Wouldn't it be awesome if websites could automatically adjust to fit our screens? That's where responsive web design comes in. It's basically designing websites so they look and function great on any device." />
        <Heading title="Why is it Important?" />
        <div className={styles.list}>
          <ul>
            <li>
              <strong>Better User Experience: </strong>
              When a website is responsive, it&apos;s easy to navigate and read,
              no matter what device you&apos;re using.
            </li>
            <li>
              <strong>Increased Mobile Traffic: </strong>
              More and more people are browsing the internet on their phones. A
              responsive website ensures you don&apos;t lose out on potential
              customers.
            </li>
            <li>
              <strong>Improved SEO: </strong>
              Search engines like websites that are mobile-friendly. A
              responsive design can help your website rank higher in search
              results.
            </li>
          </ul>
        </div>
        <Heading title="How Does it Work?" />
        <Paragraph text="Responsive web design uses flexible layouts, fluid images, and CSS media queries. These tools help the website adapt to different screen sizes and orientations." />
        <Heading title="Conclusion" />
        <Paragraph text="In today's digital world, having a responsive website is essential. It's a small investment that can have a big impact on your online presence. So, if you're not already using responsive design, now is the time to start!" />
      </Blog>
    </>
  );
}
