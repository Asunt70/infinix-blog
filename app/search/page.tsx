"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/NavBar";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export default function SearchResults() {
  // Logic
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
            .includes((query as string).toLowerCase()) ||
          post.url.toLowerCase().includes((query as string).toLowerCase()) ||
          post.image.toLowerCase().includes((query as string).toLowerCase()),
      );
      setFilteredPosts(results);
    };

    if (query) {
      fetchPosts();
    }
  }, [query]);

  //Content

  return (
    <>
      <Navbar />
      <div className={styles.pageContainer}>
        <h1 className={styles.heading}>
          Search Results for{" "}
          <span className={styles.searchQuery}>&quot;{query}&quot;</span>:
        </h1>
        <ul className={styles.searchList}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <li key={post.id} className={styles.searchResult}>
                <Link href={post.url}>
                  <div className={styles.card}>
                    <div className={styles.textContainer}>
                      <h2>{post.title}</h2>
                      <p>{post.description}</p>
                    </div>
                    <div className={styles.imageContainer}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={90}
                        height={60}
                        className={styles.cardImage}
                      />
                    </div>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <li>No results found.</li>
          )}
        </ul>
        <Link href="/" className={styles.backToHome}>
          Back To Home{" "}
          <span className={styles.arrowContainer}>
            <svg
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </span>
        </Link>
      </div>
    </>
  );
}
