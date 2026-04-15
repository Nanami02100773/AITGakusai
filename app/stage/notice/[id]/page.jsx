"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import NavigationBar from "./components/NavigationBar";
import Detail from "./components/Detail";

export default function NoticePage() {
  const params = useParams();
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("notices") || "[]");

    // ★ ステージだけに絞る
    const stageOnly = saved.filter(
      (n) => n.category === "stage"
    );

    const found = stageOnly.find(
      (n) => n.id === params.id
    );

    setNotice(found);
  }, [params.id]);

  return (
    <main>
      <NavigationBar />

      <Detail
        title={notice?.title ?? "ステージお知らせ"}
        body={
          notice?.body ?? "該当するお知らせがありません。"
        }
      />
    </main>
  );
}
