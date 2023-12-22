import * as React from "react";
import { HeadFC, type PageProps, Script } from "gatsby";
import Layout from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";
import { useAppDispatch, useAppSelector } from "../hooks";
import { PagesEnum } from "../types/Enums";
import { fetchPage, selectPage } from "../features/api/apiSlice";
import { useEffect } from "react";
import Loader from "../components/shared/Loader";
import { AcfAviso } from "../types/IAcf";
import Page from "../components/layout/Page";

const AvisoPage: React.FC<PageProps> = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) =>
    selectPage(state, PagesEnum.AVISO)
  ) as AcfAviso;

  useEffect(() => {
    dispatch(fetchPage({ page: PagesEnum.AVISO, slug: PagesEnum.AVISO }));
  }, []);

  return (
    <Layout>
      {page ? (
        <>
          <Script>{`observeElements()`}</Script>
          <Page className="py-8 md:py-24">
            <p className="text-3xl md:text-6xl text-primary font-medium pt-24 pb-12">
              {page.title}
            </p>
            <div
              className="mb-12"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </Page>
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default AvisoPage;

export const Head: HeadFC = () => <SEO />;
