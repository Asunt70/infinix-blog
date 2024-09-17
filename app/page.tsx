"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import Card from "./components/card";
import CardSkeleton from "./components/cardSkeleton";
import styles from "./page.module.css";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
  date: string;
}

export default function Home() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Define the isLoading state
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"recent" | "older">("recent");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true); // Start loading
        const response = await fetch("posts.json"); // Replace with your actual data source
        const posts: BlogPost[] = await response.json();
        setPosts(posts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setIsLoading(false); // End loading
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts
    .filter((post) => {
      return categoryFilter ? post.category === categoryFilter : true;
    })
    .sort((a, b) => {
      if (sortOrder === "recent") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
    });

  return (
    <>
      <Navbar />
      <main className={styles.pageContainer}>
        <div className={styles.heading}>
          <h1>Explore</h1>
          <svg
            width="26px"
            height="26px"
            viewBox="0 0 24 24"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 16V20M6 4V8M7 18H3M8 6H4M13 4L14.7528 8.44437C14.9407 8.92083 15.0347 9.15906 15.1786 9.35994C15.3061 9.538 15.462 9.69391 15.6401 9.82143C15.8409 9.9653 16.0792 10.0593 16.5556 10.2472L21 12L16.5556 13.7528C16.0792 13.9407 15.8409 14.0347 15.6401 14.1786C15.462 14.3061 15.3061 14.462 15.1786 14.6401C15.0347 14.8409 14.9407 15.0792 14.7528 15.5556L13 20L11.2472 15.5556C11.0593 15.0792 10.9653 14.8409 10.8214 14.6401C10.6939 14.462 10.538 14.3061 10.3599 14.1786C10.1591 14.0347 9.92083 13.9407 9.44437 13.7528L5 12L9.44437 10.2472C9.92083 10.0593 10.1591 9.9653 10.3599 9.82143C10.538 9.69391 10.6939 9.538 10.8214 9.35994C10.9653 9.15906 11.0593 8.92083 11.2472 8.44437L13 4Z"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className={styles.content}>
          <div className={styles.blogs}>
            <ul className={styles.postList}>
              {isLoading ? (
                // Show skeletons while loading
                <>
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                </>
              ) : filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <li key={post.id} className={styles.postItem}>
                    {/* Reusing the Card component for each post */}
                    <Card
                      title={post.title}
                      description={post.description}
                      imageSrc={post.image}
                      imageAlt={post.title}
                      url={post.url}
                    />
                  </li>
                ))
              ) : (
                <li>No posts available.</li>
              )}
            </ul>
          </div>

          <div className={styles.filter}>
            <div className={styles.title}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z" />
              </svg>
              <span>Filter</span>
            </div>
            {/* Filter Section with Buttons */}
            <div className={styles.filterButtons}>
              {/* Category Buttons */}
              <button
                className={categoryFilter === null ? styles.activeButton : ""}
                onClick={() => setCategoryFilter(null)}
              >
                All
              </button>
              <button
                className={
                  categoryFilter === "JavaScript" ? styles.activeButton : ""
                }
                onClick={() => setCategoryFilter("JavaScript")}
              >
                JavaScript
              </button>
              <button
                className={categoryFilter === "CSS" ? styles.activeButton : ""}
                onClick={() => setCategoryFilter("CSS")}
              >
                CSS
              </button>
              <button
                className={
                  categoryFilter === "React" ? styles.activeButton : ""
                }
                onClick={() => setCategoryFilter("React")}
              >
                React
              </button>

              {/* Date Sorting Buttons */}
              <button
                className={sortOrder === "recent" ? styles.activeButton : ""}
                onClick={() => setSortOrder("recent")}
              >
                Recent
              </button>
              <button
                className={sortOrder === "older" ? styles.activeButton : ""}
                onClick={() => setSortOrder("older")}
              >
                Old
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
