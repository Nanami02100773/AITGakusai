import { useEffect } from "react";

type IframeMessage = {
  type: string;
  [key: string]: unknown;
};

const ALLOW_ORIGIN_LIST = ["https://ait-guide.sysken.net"];
const isDevelopment = process.env.NODE_ENV === "development";

/** iframe から送信されたパラメータをURLに追加し，Search Params を同期させる */
export const useIframeParams = () => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent<IframeMessage>) => {
      // 開発環境以外では，許可されていないオリジンからのメッセージは無視
      if (!isDevelopment && !ALLOW_ORIGIN_LIST.includes(event.origin)) return;

      // searchParams 以外は無視
      if (event.data.type !== "searchParams") return;

      const currentUrl = new URL(window.location.href);
      Object.entries(event.data.params as Record<string, unknown>).forEach(
        ([key, value]) => {
          currentUrl.searchParams.set(key, String(value));
        },
      );

      // ページ遷移なしでURLだけ更新
      window.history.replaceState(null, "", currentUrl.toString());
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
};
