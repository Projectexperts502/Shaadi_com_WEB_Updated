import React from "react";
import { useState } from "react";
import logo from "../../assets/shaadi-logo.png";
import styles from "../Header/HeadNavbar2/HeadNavbar2.module.css";

function HeadNavbar2() {
  // OPEN SIDEBAR
  const [openNav, setOpenNav] = useState(false);

  // Change Navbar Bg Color on Scroll
  const [navBar, setNavBar] = useState(false);

  const navBarBg = () => {
    if (window.scrollY >= 10) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", navBarBg);

  const [activeNavTab, setActiveNavTab] = useState(0);

  const handleActiveNavTab = (tab) => {
    setActiveNavTab(tab);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className={styles.D_navbar}>
        <div className="container" style={{ height: "100%" }}>
          <div className={styles.inner}>
            {/* LOGO */}
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>

            <div
              className={
                openNav ? `${styles.links} ${styles.active}` : `${styles.links}`
              }
            >
              {/* LINKS */}
              <ul
                className={
                  navBar
                    ? `${styles.navbar_list} ${styles.active}`
                    : `${styles.navbar_list}`
                }
              >
                <li
                  className={
                    activeNavTab === 1
                      ? `${styles.nl_list} ${styles.active}`
                      : `${styles.nl_list}`
                  }
                  onClick={() => handleActiveNavTab(1)}
                >
                  My Shaadi
                  {activeNavTab === 1 && (
                    <>
                      <ul className={styles.nl_hidden_list}>
                        <li className={styles.nlh_list}>New Matches</li>
                        <li className={styles.nlh_list}>New Matches</li>
                        <li className={styles.nlh_list}>New Matches</li>
                      </ul>
                    </>
                  )}
                </li>
                <li
                  className={
                    activeNavTab === 2
                      ? `${styles.nl_list} ${styles.active}`
                      : `${styles.nl_list}`
                  }
                  onClick={() => handleActiveNavTab(2)}
                >
                  Matches
                  {activeNavTab === 2 && (
                    <>
                      <ul className={styles.nl_hidden_list}>
                        <li className={styles.nlh_list}>New Matches</li>
                        <li className={styles.nlh_list}>New Matches</li>
                        <li className={styles.nlh_list}>New Matches</li>
                      </ul>
                    </>
                  )}
                </li>
                <li className={styles.nl_list}>Search</li>
                <li className={styles.nl_list}>Inbox</li>
              </ul>
            </div>

            {/* BUTTON */}
            <button>
              <img src={logo} alt="cart-icon" />
            </button>

            {/* HAMBURGER */}
            <div class={styles.hamburger} onClick={() => setOpenNav(!openNav)}>
              <input class={styles.checkbox} type="checkbox" />
              <div
                class={
                  openNav
                    ? `${styles.hamburger_lines} ${styles.active}`
                    : `${styles.hamburger_lines}` && navBar
                    ? `${styles.hamburger_lines} ${styles.color_active}`
                    : `${styles.hamburger_lines}`
                }
              >
                <span class={`${styles.line} ${styles.line1}`}></span>
                <span class={`${styles.line} ${styles.line2}`}></span>
                <span class={`${styles.line} ${styles.line3}`}></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeadNavbar2;
