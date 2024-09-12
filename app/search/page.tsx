"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/NavBar";
import styles from "./page.module.css";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  // image: string;
  // url: string;
}

// function BlogPostCard({ blogPost }: { blogPost: BlogPost }) {
//   return (
//     <div className="card">
//       <img src={blogPost.image} alt={blogPost.title} />
//       <div className="card-body">
//         <h2>{blogPost.title}</h2>
//         <p>{blogPost.description}</p>
//         <a href={blogPost.url}>Read More</a>
//       </div>
//     </div>
//   );
// }

// function BlogPosts() {
//   const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => {
//         setBlogPosts(data);
//       });
//   }, []);

//   return (
//     <div className="blog-posts">
//       {blogPosts.map((blogPost) => (
//         <BlogPostCard key={blogPost.id} blogPost={blogPost} />
//       ))}
//     </div>
// }

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("posts.json"); // Replace with your actual data source
      const posts: BlogPost[] = await response.json();
      const results = posts.filter(
        (post) =>
          post.title.toLowerCase().includes((query as string).toLowerCase()) ||
          post.description
            .toLowerCase()
            .includes((query as string).toLowerCase()),
      );
      setFilteredPosts(results);
    };

    if (query) {
      fetchPosts();
    }
  }, [query]);

  return (
    <>
      <Navbar />
      <div className={styles.pageContainer}>
        <h1>Search Results for &quot;{query}&quot;</h1>
        <ul className={styles.searchList}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <li key={post.id} className={styles.searchResult}>
                <h3>{post.title}</h3>
              </li>
            ))
          ) : (
            <li>No results found.</li>
          )}
        </ul>
      </div>
    </>
  );
}
