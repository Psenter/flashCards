import React from "react";
import Link from "next/link";
import Script from "next/script";

export default function Navbar() {
  return (
    <nav className="text-center mt-3">
      <div style={{ display: "inline-block", marginRight: "10px" }}>
        <Link href="/wordBank">
          <div className="btn btn-dark">WordBank</div>
        </Link>
      </div>
      <div style={{ display: "inline-block" }}>
        <Link href="/quiz">
          <div className="btn btn-dark">Quiz</div>
        </Link>
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>
    </nav>
  );
}
