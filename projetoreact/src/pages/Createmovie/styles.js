import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    width: 1137px;

    padding: 74px 106px 85px 123px;
    margin: 0 auto;

    div.Btn {
      margin: 0;
      margin-bottom: 50px;

      div {
        background-color: ${({ theme }) => theme.colors.backgound_700};
        width: 414px;
        height: 55px;
        border-radius: 10px;
        margin: 20px 20px;
        display: inline-flex;
      }

      .input1 {
        border-radius: 10px;
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.colors.gray_100};
        margin-left: 12px;
      }
      > textarea {
        background-color: #262529;
        border-radius: 10px;
        color: #999591;
        padding: 19px;
      }
    }
  }
`;

export const Links = styled.div`
  margin: auto 0;
  width: 50px;
  background-color: ${({ theme }) => theme.colors.backgound_700};
`;

export const Form = styled.div`
  > h1 {
    margin: 30px;
    font-family: "Roboto Slab";
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
  }
  > header {
    display: flex;
    gap: 5px;
    margin-bottom: 24px;
  }
`;
export const Section = styled.div`
  width: 400px;
  display: inline-flex;
  align-items: center;
`;

export const Brand = styled.button`
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: space-between;

  border: none;
  border-radius: 10px;

  background-color: transparent;
  padding: 25px;
  gap: 40px;
  .excluir {
    background-color: ${({ theme }) => theme.colors.backgound_700};
  }

  > button {
    width: 536px;
  }

  button.salvar {
    background-color: ${({ theme }) => theme.colors.pink};
  }
`;
