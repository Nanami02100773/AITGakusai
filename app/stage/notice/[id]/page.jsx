import NavigationBar from "./components/NavigationBar";
import Detail from "./components/Detail";
import { noticeData } from "../../components/data/noticeData";

export default function NoticePage({ params }) {
  const { id } = params;

  const notice = noticeData.find((n) => n.id === id);
  const title = notice?.title ?? "お知らせ";

  return (
    <main>
      <NavigationBar />
      <Detail title={title} />
    </main>
  );
}
