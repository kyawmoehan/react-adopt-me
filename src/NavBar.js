import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const NavBar = () => {
  const [padding, setPadding] = useState(15);
  return (
    <header
      css={css`
        background-color: ${colors.secondary};
        padding: ${padding}px;
      `}
      //   onClick={() => setPadding(padding + 15)}
    >
      <Link to="/">Adopt Me</Link>
      <span
        aria-label="Logo"
        role="img"
        css={css`
          font-size: 60px;
          display: inline-block;
          &:hover {
            animation: 1s ${spin} linear infinite;
          }
        `}
      >
        🐶
      </span>
    </header>
  );
};

export default NavBar;
