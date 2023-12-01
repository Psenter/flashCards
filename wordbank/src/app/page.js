import React from "react";
import styles from "../../styles/styles.css";
import WordBank from "../../pages/wordBank";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <WordBank />
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>
    </div>
  );
}
