import React from "react";
import styled from "styled-components";
import TimerBubbles from "../background/TimerBubbles";
import CountDownTimer from '../timer/CountDownTimer';
import { themes } from "../styles/ColorStyles";
import { H1, H2, MediumText } from "../styles/TextStyles";

const dayshoursMinSecs = {days:1, hours:1, minutes: 20, seconds: 40}

const TimerSection: React.FC = () => {
  return (
    <Wrapper id="timerSection">
      <Container>
        <Title>Cuenta atrás</Title>
        <TimerBubbles />
        <AboutWrapper>
          <ContentWrapper>
            <Text>
            <CountDownTimer dayshoursMinSecs={dayshoursMinSecs}/>
            </Text>
          </ContentWrapper>
        </AboutWrapper>
      </Container>
    </Wrapper>
  );
};

export default TimerSection;

const Wrapper = styled.div`
  max-width: 1234px;
  min-height: 100vh;
  margin: 0 auto;
  margin-top: 60px;
`;

const Container = styled.div`
  position: relative;
  padding: 60px 20px 0px;

  h2 {
    text-align: center;
  }
`;

const Title = styled(H2)`
  color: ${themes.dark.text2};
  text-align: center;


  @media (prefers-color-scheme: light) {
    color: #3913b8;
  }
`;

const AboutWrapper = styled.div`
  max-width: 650px;
  margin: auto;
  margin-top: 60px;
  padding: 20px;

  background: rgba(15, 14, 71, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;

  @media (prefers-color-scheme: light) {
    background: rgba(255, 255, 255, 0.3);
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(40px);
  }
`;

const ContentWrapper = styled.div`
  margin: 20px 0px;
`;

const Text = styled(H1)`
  color: ${themes.dark.text2};
  text-align: center;

  span {
    color: #e3b82b;
    @media (prefers-color-scheme: light) {
      color: #dd2be3;
    }
  }

  @media (prefers-color-scheme: light) {
    color: rgb(0 0 0 / 90%);
  }
  @media (max-width: 1000px) {
    font-size: 100px;
  }
  @media (max-width: 425px) {
    font-size: 14px;
  }
  @media (max-width: 359px) {
    font-size: 12px;
  }
`;
