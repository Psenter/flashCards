// components/Navbar.js
import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

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
    </nav>
  );
}
