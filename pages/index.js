import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React, { Suspense, useEffect, useState } from "react";

const index = () => {
  return (
    <div>
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
