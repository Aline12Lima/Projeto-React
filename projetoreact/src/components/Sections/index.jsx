import { Container } from "./styles";

export function Sections({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
