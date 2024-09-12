"use client";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./search.module.css";

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.searchInput}
        type="search"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
