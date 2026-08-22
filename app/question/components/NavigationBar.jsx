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
      <header className="top-bar">
        <button
          className="nav-back-button"
          onClick={() => router.back()}
        >
          <img
            src="/NavigationIcons/back.png"
            alt="back"
            className="nav-back-icon"
          />
        </button>

        <div
          className={`top-bar-center ${
            index % logos.length === 0
              ? "active-0"
              : index % logos.length === 1
              ? "active-1"
              : "active-2"
          }`}
        >
          <div
            className="logo-track"
            style={{
              transform: `translate3d(0,-${index * 36}px,0)`,
              transition: isTransitioning
                ? "transform .5s ease-in-out"
                : "none",
            }}
          >
            {loopLogos.map((src, i) => (
              <div
                className="logo-slide"
                key={i}
              >
                <img
                  src={src}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </header>

      <nav className="bottom-nav">
        <Link
          href="/home"
          className="nav-item"
        >
          <img
            src="/NavigationIcons/home.png"
            alt="home"
            className="nav-icon-img nav-home-icon"
          />
        </Link>

        <Link
          href="/stage"
          className="nav-item"
        >
          <img
            src="/NavigationIcons/stage.png"
            alt="stage"
            className="nav-icon-img nav-stage-icon"
          />
        </Link>

        <Link
          href="/map"
          className="nav-item"
        >
          <img
            src="/NavigationIcons/map.png"
            alt="map"
            className="nav-icon-img nav-map-icon"
          />
        </Link>

        <Link
          href="/Project2"
          className="nav-item"
        >
          <img
            src="/NavigationIcons/calendar.png"
            alt="calendar"
            className="nav-icon-img nav-calendar-icon"
          />
        </Link>

        <Link
          href="/question"
          className="nav-item"
        >
          <img
            src="/NavigationIcons/chat.png"
            alt="chat"
            className="nav-icon-img nav-chat-icon"
          />
        </Link>
      </nav>
    </>
  );
};

export default NavigationBar;