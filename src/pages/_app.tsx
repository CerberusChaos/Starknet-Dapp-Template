import "../styles/global.css";
import { StarknetProvider } from "@/connectors/starknet-provider";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <StarknetProvider>
    <Component {...pageProps} />
  </StarknetProvider>
);

export default MyApp;
