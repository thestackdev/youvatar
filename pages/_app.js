import "@/styles/globals.css";
import axios from "axios";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
