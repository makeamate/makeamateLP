import React from "react";

import Layout from "../components/layout/Layout";
import SEO from "../components/layout/Seo";

import AuthorSection from "../components/sections/AuthorSection";
import AboutSection from "../components/sections/AboutSection";
import FooterSection from "../components/sections/FooterSection";
import TeamSection from "../components/sections/TeamSection";
import RoadmapSection from "../components/sections/RoadmapSection";
import TimerSection from "../components/sections/TimerSection";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Make a Mate 2022" />
      <AuthorSection />
      <AboutSection />
      <TeamSection />
      <RoadmapSection />
      <TimerSection />
      <FooterSection />
    </Layout>
  );
};

export default IndexPage;
