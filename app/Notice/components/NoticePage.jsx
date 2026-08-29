"use client";

import { useEffect, useState } from "react";
import "./NoticePage.css";

export default function NoticePage() {
  const [notices, setNotices] = useState([]);

  const [selectedNotice, setSelectedNotice] = useState(null);
  const [menuId, setMenuId] = useState(null);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("all");

  const [status, setStatus] = useState("public");

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  /* =========================
     絞り込み
  ========================= */

  const [filter, setFilter] = useState("all");

  /* =========================
     投稿履歴を取得
  ========================= */

  useEffect(() => {
    const savedNotices = JSON.parse(
      localStorage.getItem("notices") || "[]"
    );

    setNotices(savedNotices);
  }, []);

  /* =========================
     編集する
  ========================= */

  const handleEdit = (notice) => {
    setSelectedNotice(notice);

    setTitle(notice.title || "");
    setBody(notice.body || "");
    setCategory(notice.category || "all");

    setStatus(notice.status || "public");

    setMenuId(null);
  };

  /* =========================
     編集キャンセル
  ========================= */

  const handleCancel = () => {
    setSelectedNotice(null);

    setTitle("");
    setBody("");
    setCategory("all");
    setStatus("public");

    setIsConfirmOpen(false);
  };

  /* =========================
     保存ボタン
  ========================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) {
      alert("タイトルと本文を入力してください");
      return;
    }

    setIsConfirmOpen(true);
  };

  /* =========================
     更新する
  ========================= */

  const handleUpdate = () => {
    if (!selectedNotice) {
      return;
    }

    const updatedNotices = notices.map((notice) => {
      if (notice.id === selectedNotice.id) {
        return {
          ...notice,
          title,
          body,
          category,
          status,
        };
      }

      return notice;
    });

    localStorage.setItem(
      "notices",
      JSON.stringify(updatedNotices)
    );

    setNotices(updatedNotices);

    setIsConfirmOpen(false);
    setSelectedNotice(null);

    setTitle("");
    setBody("");
    setCategory("all");
    setStatus("public");

    alert("投稿内容を更新しました！");
  };

  /* =========================
     公開状態を変更
  ========================= */

  const handleChangeStatus = (notice) => {
    const newStatus =
      notice.status === "private"
        ? "public"
        : "private";

    const updatedNotices = notices.map((item) => {
      if (item.id === notice.id) {
        return {
          ...item,
          status: newStatus,
        };
      }

      return item;
    });

    localStorage.setItem(
      "notices",
      JSON.stringify(updatedNotices)
    );

    setNotices(updatedNotices);
    setMenuId(null);
  };

  /* =========================
     削除する
  ========================= */

  const handleDelete = (id) => {
    const result = window.confirm(
      "この投稿を削除しますか？"
    );

    if (!result) {
      return;
    }

    const updatedNotices = notices.filter(
      (notice) => notice.id !== id
    );

    localStorage.setItem(
      "notices",
      JSON.stringify(updatedNotices)
    );

    setNotices(updatedNotices);
    setMenuId(null);
  };

  /* =========================
     絞り込み後の投稿
  ========================= */

  const filteredNotices = notices.filter((notice) => {
    if (filter === "public") {
      return notice.status !== "private";
    }

    if (filter === "private") {
      return notice.status === "private";
    }

    if (filter === "all-category") {
      return notice.category === "all";
    }

    if (filter === "stage") {
      return notice.category === "stage";
    }

    return true;
  });

  return (
    <div className="notice-container">

      {/* =================================================
          編集画面
      ================================================= */}

      {selectedNotice ? (
        <>
          {/* タイトル */}

          <h1 className="notice-title">
            投稿した内容を編集する
          </h1>

          {/* セクションタイトル */}

          <div className="notice-section-title">
            投稿を編集
          </div>

          {/* 編集フォーム */}

          <form
            className="notice-form"
            onSubmit={handleSubmit}
          >

            {/* カテゴリ */}

            <div>
              <div className="notice-label">
                <span className="required-dot"></span>
                カテゴリ
              </div>

              <div className="notice-category-group">

                <button
                  type="button"
                  className={`notice-category-btn ${
                    category === "all"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setCategory("all")
                  }
                >
                  全体
                </button>

                <button
                  type="button"
                  className={`notice-category-btn ${
                    category === "stage"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setCategory("stage")
                  }
                >
                  ステージ
                </button>

              </div>
            </div>

            {/* タイトル */}

            <div>
              <div className="notice-label">
                <span className="required-dot"></span>
                タイトル
              </div>

              <input
                type="text"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
                className="notice-input"
              />
            </div>

            {/* 本文 */}

            <div>
              <div className="notice-label">
                <span className="required-dot"></span>
                本文
              </div>

              <textarea
                value={body}
                onChange={(e) =>
                  setBody(e.target.value)
                }
                className="notice-textarea"
              />
            </div>

            {/* 公開状態 */}

            <div>
              <div className="notice-label">
                <span className="required-dot"></span>
                公開状態
              </div>

              <div className="notice-status-group">

                <label className="notice-radio">
                  <input
                    type="radio"
                    name="status"
                    checked={status === "public"}
                    onChange={() =>
                      setStatus("public")
                    }
                  />

                  <span></span>

                  公開中
                </label>

                <label className="notice-radio">
                  <input
                    type="radio"
                    name="status"
                    checked={status === "private"}
                    onChange={() =>
                      setStatus("private")
                    }
                  />

                  <span></span>

                  非公開
                </label>

              </div>
            </div>

            {/* ボタン */}

            <div className="notice-edit-buttons">

              <button
                type="button"
                className="notice-cancel-button"
                onClick={handleCancel}
              >
                キャンセル
              </button>

              <button
                type="submit"
                className="notice-button"
              >
                保存する
              </button>

            </div>

          </form>

          {/* =================================================
              更新確認モーダル
          ================================================= */}

          {isConfirmOpen && (
            <div className="notice-modal-overlay">

              <div className="notice-modal">

                <div className="notice-modal-icon">
                  ?
                </div>

                <h2>
                  投稿内容を更新しますか？
                </h2>

                <p>
                  「{title}」の内容を
                  <br />
                  更新します。
                </p>

                <div className="notice-modal-buttons">

                  <button
                    type="button"
                    className="notice-modal-cancel"
                    onClick={() =>
                      setIsConfirmOpen(false)
                    }
                  >
                    キャンセル
                  </button>

                  <button
                    type="button"
                    className="notice-modal-update"
                    onClick={handleUpdate}
                  >
                    更新する
                  </button>

                </div>

              </div>

            </div>
          )}
        </>
      ) : (

        /* =================================================
           投稿履歴
        ================================================= */

        <>
          <h1 className="notice-title">
            投稿した内容を編集する
          </h1>

          <div className="notice-section-title">
            投稿履歴
          </div>

          <div className="notice-history">

            {/* =================================================
                件数
            ================================================= */}

            <div className="notice-count-area">

              <div className="notice-count-item">
                <span className="notice-count-label">
                  投稿数
                </span>

                <span className="notice-count-number">
                  {notices.length}
                </span>
              </div>

              <div className="notice-count-item">
                <span className="notice-count-label notice-public-label">
                  ● 公開中
                </span>

                <span className="notice-count-number">
                  {
                    notices.filter(
                      (notice) =>
                        notice.status !== "private"
                    ).length
                  }
                </span>
              </div>

              <div className="notice-count-item">
                <span className="notice-count-label notice-private-label">
                  ● 非公開
                </span>

                <span className="notice-count-number">
                  {
                    notices.filter(
                      (notice) =>
                        notice.status === "private"
                    ).length
                  }
                </span>
              </div>

            </div>

            {/* =================================================
                絞り込み
            ================================================= */}

            <div className="notice-filter-area">

              <div className="notice-filter-title">
                絞り込み
              </div>

              <div className="notice-filter-group">

                <button
                  type="button"
                  className={`notice-filter-btn ${
                    filter === "all"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setFilter("all")
                  }
                >
                  すべて
                </button>

                <button
                  type="button"
                  className={`notice-filter-btn ${
                    filter === "public"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setFilter("public")
                  }
                >
                  公開中
                </button>

                <button
                  type="button"
                  className={`notice-filter-btn ${
                    filter === "private"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setFilter("private")
                  }
                >
                  非公開
                </button>

                <button
                  type="button"
                  className={`notice-filter-btn ${
                    filter === "all-category"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setFilter("all-category")
                  }
                >
                  お知らせ
                </button>

                <button
                  type="button"
                  className={`notice-filter-btn ${
                    filter === "stage"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setFilter("stage")
                  }
                >
                  ステージ
                </button>

              </div>

            </div>

            {/* =================================================
                投稿一覧
            ================================================= */}

            <div className="notice-list">

              {filteredNotices.length === 0 ? (

                <div className="notice-empty">
                  該当する投稿はありません
                </div>

              ) : (

                filteredNotices.map((notice) => (

                  <div
                    className="notice-history-card"
                    key={notice.id}
                  >

                    {/* 投稿内容 */}

                    <div className="notice-history-main">

                      <div className="notice-history-top">

                        <span className="notice-category-tag">
                          {notice.category === "stage"
                            ? "ステージ"
                            : "お知らせ"}
                        </span>

                        {/* 公開状態 */}

                        {notice.status === "private" ? (

                          <span className="notice-status notice-status-private">
                            ● 非公開
                          </span>

                        ) : (

                          <span className="notice-status notice-status-public">
                            ● 公開中
                          </span>

                        )}

                      </div>

                      <h2>
                        {notice.title}
                      </h2>

                      <p>
                        {notice.body}
                      </p>

                    </div>

                    {/* =================================================
                        ・・・ボタン
                    ================================================= */}

                    <button
                      type="button"
                      className="notice-menu-button"
                      onClick={() =>
                        setMenuId(
                          menuId === notice.id
                            ? null
                            : notice.id
                        )
                      }
                    >
                      •••
                    </button>

                    {/* =================================================
                        メニュー
                    ================================================= */}

                    {menuId === notice.id && (

                      <div className="notice-menu">

                        {/* 編集 */}

                        <button
                          type="button"
                          onClick={() =>
                            handleEdit(notice)
                          }
                        >
                          <span className="menu-icon">
                            ✎
                          </span>

                          編集する
                        </button>

                        {/* 公開状態変更 */}

                        <button
                          type="button"
                          onClick={() =>
                            handleChangeStatus(notice)
                          }
                        >
                          <span className="menu-icon">
                            ◉
                          </span>

                          {notice.status === "private"
                            ? "公開する"
                            : "非公開にする"}
                        </button>

                        {/* 削除 */}

                        <button
                          type="button"
                          className="delete"
                          onClick={() =>
                            handleDelete(notice.id)
                          }
                        >
                          <span className="menu-icon">
                            ♜
                          </span>

                          削除する
                        </button>

                      </div>

                    )}

                  </div>

                ))

              )}

            </div>

          </div>
        </>
      )}

    </div>
  );
}