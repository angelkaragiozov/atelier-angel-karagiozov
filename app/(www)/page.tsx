"use client";
import App, { AppContext } from "next/app";
import dynamic from "next/dynamic";

// These will be your actual component paths
const MobilePage = dynamic(() => import("./mobile/MobilePage"));
const DesktopPage = dynamic(() => import("./desktop/DesktopPage"));

function MyApp({
  pageProps,
  viewport,
}: {
  pageProps: { [key: string]: any };
  viewport: string;
}) {
  if (viewport === "mobile") {
    return <MobilePage {...pageProps} />;
  } else {
    return <DesktopPage {...pageProps} />;
  }
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const viewport = appContext.ctx.query.viewport as string;

  return { ...appProps, viewport };
};

export default MyApp;
