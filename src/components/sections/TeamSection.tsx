import React from "react";
import styled from "styled-components";

import { H2, H4 } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";
import ProjectsBackground from "../background/ProjectsBackground";
import ProjectsCards from "../layout/ProjectsCards";
import BackendCards from "../layout/BackendCards";
import FrontendCards from "../layout/FrontendCards";

const TeamSection = () => {
  return (
    <Wrapper id="projectsSection">
      <ProjectsBackground />
      <Container>
        <Title>Nuestro Equipo</Title>
        <DepartamentoB>
          <br></br>
          <br></br>
          <br></br>
          <span>EQUIPO BACKEND</span>
        </DepartamentoB>
        <BackendCards />
        <DepartamentoF>
          <br></br>
          <br></br>
          <br></br>
          <span>EQUIPO FRONTEND</span>
        </DepartamentoF>
        <FrontendCards />
      </Container>
    </Wrapper>
  );
};

export default TeamSection;

const DepartamentoB = styled(H4)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #d7fdff 0%, #4af6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 50px;
  }
  @media (max-width: 650px) {
    font-size: 60px;
    text-align: center;
  }
  @media (max-width: 450px) {
    font-size: 45px;
  }
  @media (max-width: 350px) {
    font-size: 34px;
  }
`;

const DepartamentoF = styled(H4)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #ffd7fd 0%, #ff4af3 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 50px;
  }
  @media (max-width: 650px) {
    font-size: 60px;
    text-align: center;
  }
  @media (max-width: 450px) {
    font-size: 45px;
  }
  @media (max-width: 350px) {
    font-size: 34px;
  }
`;

const Wrapper = styled.div`
  margin-top: 60px;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1234px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 60px 20px 0px;

  h2 {
    text-align: center;
  }

  @media (max-width: 450px) {
    padding: 60px 0px 0px;
  }
`;

const Title = styled(H2)`
  color: ${themes.dark.text2};

  @media (prefers-color-scheme: light) {
    color: #3913b8;
  }
`;
