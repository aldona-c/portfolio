"use client";

import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";

import styles from "./navbar.module.css";
import { Button } from "../button";

const links = [
  { name: "Work", href: "/" },
  { name: "About me", href: "/about-me" },
  { name: "Contact", href: "mailto:aldona.cepliejute@gmail.com" },
];

export default function Navbar() {
  const currentPath = usePathname();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.inner}>
        <a href="/" className={styles.logoWrapper}>
          <Image
            src="/logo-a.svg"
            width={33}
            height={40}
            alt="Image of the application"
            className={styles.logo}
            priority
          />
        </a>
        <div className={styles.innerRight}>
          <Button onClick={toggleHamburger} className={styles.hamburgerButton}>
            <Image
              src="/hamburger.svg"
              width={32}
              height={32}
              alt="Image of the application"
              className={styles.logo}
              priority
            />
          </Button>
          {hamburgerOpen && (
            <div className={styles.hamburgerWrapper}>
              <div className={styles.navbarHamburger}>
                <div className={styles.inner}>
                  <a href="/" className={styles.logoWrapper}>
                    <Image
                      src="/logo-a.svg"
                      width={33}
                      height={40}
                      alt="Image of the application"
                      className={styles.logo}
                      priority
                    />
                  </a>
                  <Button onClick={toggleHamburger}>
                    <Image
                      src="/close.svg"
                      width={32}
                      height={32}
                      alt="Image of the application"
                      className={styles.logo}
                      priority
                    />
                  </Button>
                </div>
              </div>
              <div className={styles.hamburgerContent}>
                {links.map((link) => {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={clsx(
                        styles.hamburgerItem,
                        currentPath === link.href && styles.active
                      )}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          <div className={styles.navItems}>
            {links.map((link) => {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    styles.navItem,
                    currentPath === link.href && styles.active
                  )}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
