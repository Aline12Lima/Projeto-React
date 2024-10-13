import { StyledFilledStar, StyledStar } from "./styles";

export const Star = ({ active = false }) => {
  return <>{active ? <StyledFilledStar /> : <StyledStar />}</>;
};
