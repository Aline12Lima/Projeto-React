import styled from "styled-components";
import backgroundImg from "../../assets/img3.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Form = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px;

  div.Btn {
    display: flex;
    gap: 16px;
    width: 340px;
    flex-direction: column;

    button {
      width: 100%;
    }
  }

  h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.colors.pink};
  }
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray_100};
  }
  h2 {
    font: 24px;
    margin: 48px 0;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
