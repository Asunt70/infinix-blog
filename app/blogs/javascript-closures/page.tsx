import styles from "./page.module.css";
import Heading from "@/app/components/blogComponents/heading";
import Paragraph from "@/app/components/blogComponents/paragraph";
import Presentation from "@/app/components/blogComponents/Presentation";
import Blog from "@/app/components/blogTemplate/blogTemplate";

export default function JavascriptClosures() {
  return (
    <>
      <Blog>
        <Presentation
          title="JavaScript Closures"
          src="/closure.webp"
          alt="closure"
        />
        <Heading title="What is a Closure?" />
        <Paragraph text="In JavaScript, a closure is a function that has access to variables from its outer (enclosing) function, even after the outer function has finished executing. This happens because the inner function retains a reference to the outer function's scope." />
        <Heading title="Why are Closures Useful" />
        <Paragraph text="Closures are incredibly powerful and have several practical applications:" />
        <div className={styles.list}>
          <ul>
            <li>
              <strong>Creating Private Variables: </strong>By defining variables
              within an outer function, you can effectively make them private to
              that function and its inner functions. This helps encapsulate data
              and prevents unintended modifications.
            </li>
            <li>
              <strong>Implementing Modules: </strong>Closures can be used to
              create modules, which are self-contained units of code that can be
              reused in different parts of your application. Modules often
              expose public functions while keeping their internal state
              private.
            </li>
            <li>
              <strong>Creating Callback Functions: </strong>Closures are
              essential for creating callback functions, which are functions
              that are passed as arguments to other functions. The callback
              function can access variables from its enclosing scope, allowing
              it to perform actions based on the context of the outer function.
            </li>
          </ul>
        </div>
        <Heading title="A Simple Example" />
        <img className={styles.image} src="/p2-code1.png" alt="code" />
        <Paragraph text="In this example, innerFunction is a closure because it has access to the variable x from the outerFunction. Even after outerFunction has finished executing, innerFunction can still access and use x." />
        <Heading title="Key Points to Remember" />
        <div className={styles.list}>
          <ul>
            <li>
              Closures are created when a function is defined within another
              function.
            </li>
            <li>
              The inner function has access to variables from the outer
              function&apos;s scope.
            </li>
            <li>
              Closures can be used to create private variables, modules, and
              callback functions.
            </li>
            <li>
              Understanding closures is essential for writing efficient and
              modular JavaScript code.
            </li>
          </ul>
        </div>
      </Blog>
    </>
  );
}
