import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter, faInstagram, faGoogle, faMailchimp, faGoodreadsG, faGoodreads } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <Wrapper>
      <a
        href="https://twitter.com/makeamate_es"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" color="#0072b1" />
      </a>
      <a
        href="https://www.instagram.com/makeamate_es/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" color="#c97734" />
      </a>
      <a
        href="https://github.com/makeamate"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" color="#6e5494" />
      </a>
      {/* <a
        href="makeamate2022@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGoogle} size="2x" color="#e33b3b" />
      </a> */}
    </Wrapper>
  );
};

export default SocialLinks;

const Wrapper = styled.div`
  width: 150px;
  height: 48px;
  display: flex;
  justify-content: space-evenly;

  a {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

    :hover {
      transform: translateY(-3px) scale(1.1);
    }
  }
`;
