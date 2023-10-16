import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout/Layout";
import Button from "../components/shared/Button";
import Page from "../components/layout/Page";
import { Section2, Section3, Section4, Section5 } from "../components/home";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Page>
        <h1 className="text-3xl underline">Header</h1>
        <Button variant="secondary">Hola</Button>
        <br />
      </Page>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
