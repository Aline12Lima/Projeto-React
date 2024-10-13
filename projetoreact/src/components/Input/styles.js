import styled from "styled-components";

export const Container = styled.div`
  height: 56px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.background_700};
  border: none;
  display: flex;
  align-items: center;
  padding: 16px 8px;

  & input::placeholder {
    color: ${({ theme }) => theme.colors.gray_100};
  }

  input {
    height: 48px;
    flex: 1;
    border-radius: 10px;

    background-color: transparent;
    color: white;
    border: none;
    padding: 10px;
  }
`;
