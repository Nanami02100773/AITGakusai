"use client";

import { useState } from "react";
import "./BloodDonation.css";

export default function BloodDonation() {
  const [count, setCount] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();

  if (count === "") {
    alert("献血人数を入力してください");
    return;
  }

  localStorage.setItem(
    "bloodDonationCount",
    Number(count)
  );

  alert("登録しました！");
  setCount("");
};

  return (
    <div className="blood-container">

      <h1 className="blood-title">
        献血人数登録
      </h1>

      <form
        onSubmit={handleSubmit}
        className="blood-form"
      >

        <label className="blood-label">
          献血人数
        </label>

        <input
          type="number"
          value={count}
          onChange={(e) =>
            setCount(e.target.value)
          }
          placeholder="例：120"
          className="blood-input"
        />

        <button
          type="submit"
          className="blood-button"
        >
          登録する
        </button>

      </form>

    </div>
  );
}
