import NavigationBar from "./components/NavigationBar";
import Detail from "./components/Detail";
import { homeNoticeData } from "../../components/data/homeNoticeData";

export default function NoticePage({ params }) {
  const notice = homeNoticeData.find(
    (item) => item.id === params.id
  );

  return (
    <main>
      <NavigationBar />
      <Detail
        title={notice?.title ?? "お知らせ"}
        body={notice?.body ?? "該当するお知らせがありません。"}
      />
    </main>
  );
}
