"use client";

import { useRouter } from "next/navigation";
import "./Business.css";

export default function Business() {
  const router = useRouter();

  return (
    <div className="business-container">

      <h1 className="business-title">
        業務選択
      </h1>

      <div className="business-menu">

        <button
          className="business-card"
          onClick={() => router.push("/Notice")}
        >
          お知らせ
        </button>

        <button
          className="business-card"
          onClick={() => router.push("/BloodDonation")}
        >
          献血登録
        </button>

      </div>

    </div>
  );
}