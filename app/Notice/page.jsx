import NavigationBar from "./components/NavigationBar";
import NoticeCreate from "./components/NoticeCreate";
import NoticePage from "./components/NoticePage";

export default function Page() {
  return (
    <div>
      <NavigationBar />
        <NoticeCreate />
      <NoticePage />
    </div>
  );
}