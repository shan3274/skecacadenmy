import "@/styles/globals.css";

import { ProgramProvider } from "@/context/Programcontext";

export default function App({ Component, pageProps }) {
  return (
    <ProgramProvider>
      <Component {...pageProps} />
    </ProgramProvider>
  );
}
