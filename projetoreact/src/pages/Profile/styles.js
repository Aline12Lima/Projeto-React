import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(255, 133, 155, 0.05);
  width: 100%;
  height: 144px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 80px;
  > header {
    color: ${({ theme }) => theme.colors.pink};
    display: flex;
    gap: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin-top: 425px;
  margin-bottom: 64px;

  width: 186px;
  height: 186px;
  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }
  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.pink};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.colors.background_800};
    }
  }
`;
export const Form = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  div.inputs {
    display: flex;

    flex-direction: column;

    padding: 10px;
    div {
      width: 340px;
      height: 56px;
    }

    div:nth-child(3) {
      margin-top: 24px;
      margin-bottom: 5px;
    }
    div:nth-child(1) {
      margin-bottom: 5px;
    }
    input {
      height: 48px;
      border: none;
      margin-left: 20px;

      background-color: transparent;
      color: white;
    }
    svg {
      margin-left: 10px;
    }
  }

  > button {
    width: 340px;
    height: 48px;
    margin-top: 30px;
    color: black;
  }
`;
