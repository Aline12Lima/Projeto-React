import { Container, Profile } from "./styles";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input />

      <Profile to="Profile">
        <div>
          <strong>Aline Lima</strong>
          <span>Sair</span>
        </div>
        <img src="https://github.com/aline12lima.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
