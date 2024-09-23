"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import GIBillPage from "./gibill/page";
import HomePage from "./home/page";
import VALoanPage from "./valoan/page";
import DisabilityPage from "./disability/page";

// Import the components for the pages

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("home");
  console.log(selectedPage);
  return (
    <div className={styles.page}>
      {/* Pass setSelectedPage to the Navbar as the onPageSelect prop */}
      <Navbar onPageSelect={setSelectedPage} />

      <main className={styles.main}>
        {selectedPage === "home" && <HomePage />}
        {selectedPage === "gibill" && <GIBillPage />}
        {selectedPage === "vaLoan" && <VALoanPage />}
        {selectedPage === "vaDisability" && <DisabilityPage />}
      </main>
    </div>
  );
}
