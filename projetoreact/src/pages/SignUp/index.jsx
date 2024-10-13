import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { BackgroundImg, Container } from "./styles";

export function SignUp() {
  return (
    <Container>
      <main class="main">
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button>Cadastrar</Button>
        <ButtonText class="Btn2">Voltar para o login</ButtonText>
      </main>
      <BackgroundImg class="background" />
    </Container>
  );
}
