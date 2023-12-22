import Provider from "@/provider";
import "@/styles/globals.css";
import "react-calendar/dist/Calendar.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
