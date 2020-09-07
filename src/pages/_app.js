import "../styles/theme.less";
import "../styles/app.scss";
import Layout from "../components/layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
