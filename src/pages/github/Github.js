import React from "react";
import { GithubImage, GithubText, GithubWrapper } from "./style";
import GithubIcon from "../../assets/icons8-github.svg";

const Github = () => {
  return (
    <GithubWrapper>
      <GithubImage src={GithubIcon} />
      <GithubText>
        <h4>You can review my github account...</h4> <br />
        <h6>
          <span>
            <a href="https://github.com/kdrzclk" target="_blank">
              My Github Link
            </a>
          </span>
        </h6>
      </GithubText>
    </GithubWrapper>
  );
};

export default Github;
