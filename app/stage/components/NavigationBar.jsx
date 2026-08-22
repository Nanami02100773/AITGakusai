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

const loopLogos = [...logos, ...logos, ...logos];

const NavigationBar = () => {
  const router = useRouter();

  const [index, setIndex] = useState(logos.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

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
      <header className="NavigationBar-Header-bar">
        <button
          className="NavigationBar-Button-back"
          onClick={() => router.back()}
        >
          <img
            src="/NavigationIcons/back.png"
            alt="back"
            className="NavigationBar-Image-backIcon"
          />
        </button>

        <div
          className={`NavigationBar-Header-center ${
            index % logos.length === 0
              ? "NavigationBar-State-active0"
              : index % logos.length === 1
              ? "NavigationBar-State-active1"
              : "NavigationBar-State-active2"
          }`}
        >
          <div
            className="NavigationBar-Logo-track"
            style={{
              transform: `translate3d(0,-${index * 36}px,0)`,
              transition: isTransitioning
                ? "transform .5s ease-in-out"
                : "none",
            }}
          >
            {loopLogos.map((src, i) => (
              <div
                className="NavigationBar-Logo-slide"
                key={i}
              >
                <img
                  src={src}
                  alt=""
                  className="NavigationBar-Image-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </header>

      <nav className="NavigationBar-Nav-bottom">
        <Link
          href="/home"
          className="NavigationBar-Nav-item"
        >
          <img
            src="/NavigationIcons/home.png"
            alt="home"
            className="NavigationBar-Image-navIcon NavigationBar-Image-homeIcon"
          />
        </Link>

        <Link
          href="/stage"
          className="NavigationBar-Nav-item"
        >
          <img
            src="/NavigationIcons/stage.png"
            alt="stage"
            className="NavigationBar-Image-navIcon NavigationBar-Image-stageIcon"
          />
        </Link>

        <Link
          href="/map"
          className="NavigationBar-Nav-item"
        >
          <img
            src="/NavigationIcons/map.png"
            alt="map"
            className="NavigationBar-Image-navIcon NavigationBar-Image-mapIcon"
          />
        </Link>

        <Link
          href="/Project2"
          className="NavigationBar-Nav-item"
        >
          <img
            src="/NavigationIcons/calendar.png"
            alt="calendar"
            className="NavigationBar-Image-navIcon NavigationBar-Image-calendarIcon"
          />
        </Link>

        <Link
          href="/question"
          className="NavigationBar-Nav-item"
        >
          <img
            src="/NavigationIcons/chat.png"
            alt="chat"
            className="NavigationBar-Image-navIcon NavigationBar-Image-chatIcon"
          />
        </Link>
      </nav>
    </>
  );
};

export default NavigationBar;