"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './NavigationBar.css';

const NavigationBar = () => {
  const router = useRouter();

  return (
    <>
      {/* 上部ヘッダー */}
      <header className="top-bar">
        <button className="nav-button" onClick={() => router.back()}>
          ←
        </button>
        <Link href="/menu" className="nav-button">
          ≡
        </Link>
      </header>

      {/* 下部ナビゲーション */}
      <nav className="bottom-nav">
        <Link href="/home" className="nav-item">
          <span className="nav-icon">🏠</span>
        </Link>
        <Link href="/stage" className="nav-item">
          <span className="nav-icon">🏢</span>
        </Link>
        <Link href="/map" className="nav-item">
          <span className="nav-icon">📍</span>
        </Link>
        <Link href="/Project1" className="nav-item">
          <span className="nav-icon">📅</span>
        </Link>
        <Link href="/question" className="nav-item">
          <span className="nav-icon">💬</span>
        </Link>
      </nav>
    </>
  );
};

export default NavigationBar;
