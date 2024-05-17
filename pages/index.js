import React, { Suspense, useEffect, useState } from "react";
import Head from "next/head";
import * as gtag from "../lib/googleAnalytics";

const index = () => {
  useEffect(() => {
    gtag.event({
      action: "button_click",
      category: "Engagement",
      label: "Contact Us Button",
      value: 1, // Optional numeric value
    });
  }, []);
  return (
    <div>
      <Head>
        <title>SKC GROUP</title>
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoadedComponents />
      </Suspense>
    </div>
  );
};

const LazyLoadedComponents = () => (
  <>
    <LazyLoadComponent component={() => import("@/components/Hero")} />
    <LazyLoadComponent component={() => import("@/components/Section2")} />
    <LazyLoadComponent component={() => import("@/components/Chairman")} />
    <LazyLoadComponent component={() => import("@/components/Chairperson")} />
    <LazyLoadComponent component={() => import("@/components/Programs")} />
    <LazyLoadComponent component={() => import("@/components/Help")} />
    <LazyLoadComponent component={() => import("@/components/Contact")} />
    <LazyLoadComponent component={() => import("@/components/Footer")} />
  </>
);

const LazyLoadComponent = ({ component: Component }) => {
  const [ComponentToRender, setComponentToRender] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      const { default: ImportedComponent } = await Component();
      setComponentToRender(<ImportedComponent />);
    };
    loadComponent();
  }, [Component]);

  return ComponentToRender;
};

export default index;
