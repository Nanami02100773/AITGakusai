import NavigationBar from "./components/NavigationBar";
import NoticeList from "./components/NoticeList";
import NoticePage from "./components/NoticePage";

export default function Page() {
  return (
    <div>
      <NavigationBar />
      <NoticePage />
      <NoticeList />
    </div>
  );
}