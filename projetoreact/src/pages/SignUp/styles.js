import styled from "styled-components";
import backgroundImg from "../../assets/img.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-template-areas: "main" "background";

  > main {
    overflow-y: auto;
    padding: 64px 0;
    margin: auto 0;
    width: 90%;
    h1 {
      color: ${({ theme }) => theme.colors.pink};
      font-family: "Roboto Slab";
      font-size: 48px;
      text-align: center;

      font-weight: 700;
    }
    p {
      font-family: "Roboto Slab";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      text-align: center;
    }
    h2 {
      text-align: center;
      font-family: "Roboto Slab";
      font-size: 24px;
      margin: 48px;

      font-weight: 500;
    }
    div {
      width: 340px;
      height: 56px;
      margin: 0 auto;
      margin-bottom: 8px;
    }
    input {
      width: 300px;
      height: 48px;
      border-radius: 10px;
      border: none;
      background-color: transparent;
      text-align: left;
      margin-left: 8px;
      color: white;
    }
    svg {
      margin-left: 10px;
      display: flexbox;
    }
    button {
      display: flex;
      margin: 0 auto;

      width: 340px;
      height: 56px;
      text-align: center;
    }
  }
`;

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  height: 100vh;
`;
