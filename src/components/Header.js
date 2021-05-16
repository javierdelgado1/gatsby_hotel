import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Navegacion from "./Nav"
const EnlaceHome = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`
export default function Header() {
  return (
    <header
      css={css`
        background-color: rgba(44, 62, 80);
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <EnlaceHome to="/">
          <h1>Hotel Gatsby</h1>{" "}
        </EnlaceHome>
        <Navegacion></Navegacion>
      </div>
    </header>
  )
}
