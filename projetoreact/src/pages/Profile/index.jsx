import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <FiArrowLeft />
        Voltar
        <p></p>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/aline12Lima.png" alt="Foto do Usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <div class="inputs">
          <Input placeholder="Nome" type="text" icon={FiUser} />
          <Input placeholder="E-mail" type="text" icon={FiMail} />
          <Input placeholder="Senha Atual" type="password" icon={FiLock} />
          <Input placeholder="Nova Senha" type="" icon={FiLock} />
        </div>

        <Button>Salvar</Button>
      </Form>
    </Container>
  );
}
