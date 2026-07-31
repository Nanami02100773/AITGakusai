"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./NavigationBar.css";

const logos = [
  "/homecenterlogo/ait.gif",
  "/homecenterlogo/aitfes.png",
  "/homecenterlogo/poster.png",
];

// 無限ループ用に複製
const loopLogos = [...logos, ...logos, ...logos];

const NavigationBar = () => {
  const router = useRouter();

  const [index, setIndex] = useState(logos.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index >= logos.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(logos.length);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 500);
    }
  }, [index]);

  return (
    <>
      <header className="Home-top-bar">

        <button
          className="Home-nav-button Home-nav-back-button"
          onClick={() => router.back()}
        >
          <img
            src="/NavigationIcons/back.png"
            alt="back"
            className="Home-nav-back-icon"
          />
        </button>

        <div
          className={`Home-top-bar-center ${
            index % logos.length === 0
              ? "Home-active-0"
              : index % logos.length === 1
              ? "Home-active-1"
              : "Home-active-2"
          }`}
        >
          <div
            className="Home-logo-track"
            style={{
              transform: `translate3d(0,-${index * 36}px,0)`,
              transition: isTransitioning
                ? "transform .5s ease-in-out"
                : "none",
            }}
          >
            {loopLogos.map((src, i) => (
              <div className="Home-logo-slide" key={i}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>

        <button
          className="Home-nav-button Home-nav-menu-button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <img
            src="/NavigationIcons/menu.png"
            alt="menu"
            className="Home-nav-menu-icon"
          />
        </button>

      </header>

      {isMenuOpen && (
        <div
          className="Home-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`Home-side-menu ${
          isMenuOpen ? "Home-open" : ""
        }`}
      >
        <div className="Home-menu-header">
          <button
            className="Home-menu-back"
            onClick={() => setIsMenuOpen(false)}
          >
            ＜ 戻る
          </button>

          <span>Menu</span>
        </div>

        <Link
          href="/Guide"
          className="Home-menu-item"
          onClick={() => setIsMenuOpen(false)}
        >
          操作説明
        </Link>

        <Link
          href="/Login"
          className="Home-menu-item"
          onClick={() => setIsMenuOpen(false)}
        >
          学祭用ログイン
        </Link>
      </div>

      <nav className="Home-bottom-nav">

        <Link href="/home" className="Home-nav-item">
          <img
            src="/NavigationIcons/home.png"
            alt="home"
            className="Home-nav-icon-img Home-nav-home-icon"
          />
        </Link>

        <Link href="/stage" className="Home-nav-item">
          <img
            src="/NavigationIcons/stage.png"
            alt="stage"
            className="Home-nav-icon-img Home-nav-stage-icon"
          />
        </Link>

        <Link href="/map" className="Home-nav-item">
          <img
            src="/NavigationIcons/map.png"
            alt="map"
            className="Home-nav-icon-img Home-nav-map-icon"
          />
        </Link>

        <Link href="/Project2" className="Home-nav-item">
          <img
            src="/NavigationIcons/calendar.png"
            alt="calendar"
            className="Home-nav-icon-img Home-nav-calendar-icon"
          />
        </Link>

        <Link href="/question" className="Home-nav-item">
          <img
            src="/NavigationIcons/chat.png"
            alt="chat"
            className="Home-nav-icon-img Home-nav-chat-icon"
          />
        </Link>

      </nav>
    </>
  );
};

export default NavigationBar;