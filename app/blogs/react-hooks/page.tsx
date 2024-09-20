import styles from "./page.module.css";
import Blog from "@/app/components/blogTemplate/blogTemplate";
import Presentation from "@/app/components/blogComponents/Presentation";
import Heading from "@/app/components/blogComponents/heading";
import Paragraph from "@/app/components/blogComponents/paragraph";

export default function ReactHooks() {
  return (
    <>
      <Blog>
        <Presentation title="React Hooks" src="/react.webp" alt="react" />
        <Heading title="What are Hooks?" />
        <Paragraph text="Before hooks, React components were primarily class-based. This often led to complex component lifecycle methods and potential difficulties in managing state and side effects. Hooks were introduced to provide a more declarative and intuitive way to build React components." />
        <Heading title="Why Use Hooks?" />
        <div className={styles.list}>
          <ul>
            <li>
              <strong>Simplified Component Logic: </strong>
              Hooks allow you to write cleaner, more concise components without
              the need for class-based syntax.
            </li>
            <li>
              <strong>Reusability: </strong>
              You can extract custom hooks to encapsulate common logic, making
              your code more modular and easier to maintain.
            </li>
            <li>
              <strong>State Management: </strong>
              Hooks like useState and useReducer provide effective ways to
              manage component state.
            </li>
            <li>
              <strong>Side Effects: </strong>
              useEffect allows you to perform side effects like fetching data or
              setting up subscriptions within your functional components.
            </li>
          </ul>
        </div>
        <Heading title="Commonly Used Hooks" />
        <div className={styles.list}>
          <ul>
            <li>
              <strong>useState: </strong>
              Manages state within a functional component.
            </li>
            <li>
              <strong>useEffect: </strong>
              Performs side effects after render, similar to componentDidMount,
              componentDidUpdate, and componentWillUnmount.
            </li>
            <li>
              <strong>useContext: </strong>
              Provides a way to access context values without drilling props
              down the component tree.
            </li>
            <li>
              <strong>useReducer: </strong>
              Manages complex state with a reducer function.
            </li>
            <li>
              <strong>useRef: </strong>
              Provides a mutable ref that can be used to access DOM elements or
              store values that don&apos;t trigger re-renders.
            </li>
          </ul>
        </div>
        <Heading title="Conclusion" />
        <Paragraph text="React hooks have revolutionized the way we build React components, offering a more declarative and intuitive approach. By understanding the core concepts and commonly used hooks, you can write cleaner, more efficient, and maintainable React applications." />
      </Blog>
    </>
  );
}
