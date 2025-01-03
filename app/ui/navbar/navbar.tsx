"use client";

import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";

import styles from "./navbar.module.css";
import { Button } from "../button";

const links = [
  { name: "Work", href: "/portfolio", hrefActive: "/" },
  { name: "About me", href: "/portfolio/about-me", hrefActive: "/about-me" },
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
        <a href="/portfolio" className={styles.logoWrapper}>
          <Image
            src="/portfolio/logo-a.svg"
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
              src="/portfolio/hamburger.svg"
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
                  <a href="/portfolio" className={styles.logoWrapper}>
                    <Image
                      src="/portfolio/logo-a.svg"
                      width={33}
                      height={40}
                      alt="Logo"
                      className={styles.logo}
                      priority
                    />
                  </a>
                  <Button onClick={toggleHamburger}>
                    <Image
                      src="/portfolio/close.svg"
                      width={32}
                      height={32}
                      alt="Logo"
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
                        currentPath === link.hrefActive && styles.active
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
                    currentPath === link.hrefActive && styles.active
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
