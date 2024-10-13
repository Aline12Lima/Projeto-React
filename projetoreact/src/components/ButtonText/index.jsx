import { Container } from "./styles";

export function ButtonText({ isActive = false, children, ...rest }) {
  return (
    <Container type="button" $isActive={isActive.toString()} {...rest}>
      {children}
    </Container>
  );
}
