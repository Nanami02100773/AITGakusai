"use client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div style={{ padding: "80px 20px", textAlign: "center" }}>
      <h1>学祭用ログイン</h1>

      <button onClick={() => router.push("/home/admin")}>
        ログイン
      </button>
    </div>
  );
}