import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: white;
  overflow-y: auto;

  > header {
    padding: 24px;
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.colors.pink};

    align-items: center;
    margin-bottom: 0;
  }
  > div {
    width: 1137px;
    height: 581px;
    display: flex;

    align-items: center;
    margin: 0 auto;
    margin-top: 0px;

    section {
      width: 1137px;
      margin: 0;

      .h1Star {
        display: flex;
        justify-content: start;
        align-items: center;
        margin-bottom: 50px;

        h1 {
          margin-right: 40px;
        }
      }
      div.butt {
        display: flex;
        flex-direction: row;
        padding: 8px 16px;
        align-items: center;
        justify-content: center;
        text-align: center;

        width: 400px;
        border-radius: 10px;
        background-color: transparent;
        button {
          background-color: ${({ theme }) => theme.colors.background_700};
          width: 100%;
          padding: 8px 16px;
          text-align: center;
          font-size: 16px;
        }
      }
    }
  }
`;

export const Links = styled.div`
  display: flex;
  width: 45p;
`;
export const Brand = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0;

  img {
    width: 64px;
    height: 56px;
    border-radius: 50%;
    margin: 0;
    margin-right: 30px;
  }

  p {
    width: 170px;
    height: 19px;
    left: 24.42px;
    margin: 10px;

    opacity: 0px;
  }
  svg {
    color: ${({ theme }) => theme.colors.pink};
  }
`;
