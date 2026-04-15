"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import NavigationBar from "./components/NavigationBar";
import Detail from "./components/Detail";
import { homeNoticeData } from "../../components/data/homeNoticeData";

export default function NoticePage() {
  const params = useParams();
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("notices") || "[]");

    // 投稿データ + 固定データ
    const allNotices = [...saved, ...homeNoticeData];

    const found = allNotices.find(
      (item) => item.id === params.id
    );

    setNotice(found);
  }, [params.id]);

  return (
    <main>
      <NavigationBar />

      <Detail
        title={notice?.title ?? "お知らせ"}
        body={
          notice?.body ?? "該当するお知らせがありません。"
        }
      />
    </main>
  );
}