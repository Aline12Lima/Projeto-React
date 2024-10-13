import styled from "styled-components";
export const Container = styled.button`
  width: 200px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.pink};
  color: black;
  font-weight: 400;
  font-size: 18px;
  justify-content: center;
  border: none;
  border-radius: 8px;

  display: flex;
  gap: 12px;
  align-items: center;
`;
