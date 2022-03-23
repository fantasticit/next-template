import type { AppProps } from "next/app";
import "antd/dist/antd.less";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
