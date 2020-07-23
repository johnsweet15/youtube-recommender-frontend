import Head from "next/head";
import { Button, Card } from "antd";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Titles</title>
      </Head>
      <h1>Hello</h1>
      <Button type="primary">Button</Button>
      <Card>Hi</Card>
    </div>
  );
}
