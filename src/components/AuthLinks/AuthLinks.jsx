"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CgLogIn, CgLogOut } from "react-icons/cg";
import { TbWriting } from "react-icons/tb";
import styles from "./AuthLinks.module.css";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  // temporary
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
          <CgLogIn />
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
            <TbWriting />
          </Link>
          <span className={styles.link}>
            Logout
            <CgLogOut />
          </span>
        </>
      )}
      <div 
        className={styles.burger}
        onClick={() => setOpen(!open)}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">
              Login
            </Link>
          ) : (
            <>
              <Link href="/write">
                Write
              </Link>
              <span className={styles.link}>
                Logout
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
