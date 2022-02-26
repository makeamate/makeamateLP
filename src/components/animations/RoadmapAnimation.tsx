import React from "react";
import styled from "styled-components";

const RoadmapAnimation: React.FC = () => {
  return (
    <Wrapper>
      <div className="roadmap" />
    </Wrapper>
  );
};
export default RoadmapAnimation;

const Wrapper = styled.div`
  position: relative;
  perspective: 5000;

  @media (max-width: 768px) {
    transform: scale(0.6);
    transform-origin: top left;
  }

  @media (max-width: 660px) {
    display: none;
  }

  div {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
  }
  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover div {
    //hover divs
    transform: rotateY(0deg) rotateX(0deg);
    // hover specific
    &.roadmap {
      transition-delay: 0s;
    }
    :hover {
      //self
      filter: brightness(110%) saturate(110%);
    }
  }

  .roadmap {
    position: absolute;
    width: 701px;
    height: 428px;
    left: 37px;
    top: 60px;

    background: url("images/animations/roadmap.svg"), rgba(23, 12, 61, 0.5);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(27.3844px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
  }
`;