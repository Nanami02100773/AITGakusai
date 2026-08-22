import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const rounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={rounded.className}>
        {children}
      </body>
    </html>
  );
}