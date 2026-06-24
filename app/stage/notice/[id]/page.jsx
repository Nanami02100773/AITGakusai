"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import NavigationBar from "./components/NavigationBar";
import Detail from "./components/Detail";

export default function StageNoticePage() {
const params = useParams();
const [notice, setNotice] = useState(null);

useEffect(() => {
const saved = JSON.parse(
localStorage.getItem("notices") || "[]"
);

const stageNotices = saved.filter(
  (item) => item.category === "stage"
);

const foundIndex = stageNotices.findIndex(
  (item) =>
    String(item.id) === String(params?.id)
);

const found = stageNotices[foundIndex];

if (found) {
  setNotice({
    ...found,
    number: foundIndex + 1,
  });
} else {
  setNotice(null);
}


}, [params?.id]);

return ( <main> <NavigationBar />

  <Detail
    title={
      notice?.title ||
      "ステージお知らせ"
    }
    body={
      notice?.body ||
      "該当するステージお知らせがありません。"
    }
    number={notice?.number}
  />
</main>


);
}
