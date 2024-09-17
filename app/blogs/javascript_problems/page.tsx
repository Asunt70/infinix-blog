import Blog from "@/app/components/blogTemplate/blogTemplate";
import Presentation from "@/app/components/blogComponents/Presentation";

export default function JavascriptProblems() {
  return (
    <>
      <Blog>
        <Presentation
          title="Mastering CSS Grid Layout"
          author="Sebastian Figueroa"
          src="/test.jpg"
          alt="test"
        />
      </Blog>
    </>
  );
}
