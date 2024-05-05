import "@/styles/globals.css";

import { ProgramProvider } from "@/context/Programcontext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/googleAnalytics";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Remove event listener on cleanup
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <ProgramProvider>
      <Component {...pageProps} />
    </ProgramProvider>
  );
}
