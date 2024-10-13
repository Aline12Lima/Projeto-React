import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;
  padding: 70px 123px 70px 123px;

  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.background_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-family: "Roboto Slab";
    font-size: 24px;
    color: ${({ theme }) => theme.colors.pink};
  }

  input {
    width: 630px;
    height: 56px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.background_700};
    border: none;
  }
`;
export const Profile = styled.div`
  display: flex;
  gap: 9px;
  align-items: center;

  > img {
    width: 64px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
    justify-content: space-between;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray_100};
      text-align: right;
    }
    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
