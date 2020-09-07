// import { useState } from "react";
import Head from "next/head";
import { Layout, Menu } from "antd";

const siteTitle = "Youtube Recommender";

export default function StandardLayout({ title, header, subheader, children }) {
  return (
    <div>
      <Head>
        <title>{title ? title : siteTitle}</title>
      </Head>
      <Layout
        className="p-3"
        style={{
          padding: "1rem",
          overflowY: "scroll",
          paddingBottom: "2rem",
          maxWidth: "1500px",
          margin: "auto",
        }}
      >
        {children}
      </Layout>
    </div>
  );
}
