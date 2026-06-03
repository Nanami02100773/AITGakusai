"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import NavigationBar from "./components/NavigationBar";
import Detail from "./components/Detail";

export default function NoticePage() {
  const params = useParams();
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("notices") || "[]"
    );

    const foundIndex = saved.findIndex(
      (item) => String(item.id) === String(params?.id)
    );

    const found = saved[foundIndex];

    if (found) {
      setNotice({
        ...found,
        number: foundIndex + 1,
      });
    }
  }, [params?.id]);

  return (
    <main>
      <NavigationBar />

      <Detail
        title={notice?.title || "お知らせ"}
        body={
          notice?.body ||
          "該当するお知らせがありません。"
        }
        number={notice?.number}
      />
    </main>
  );
}