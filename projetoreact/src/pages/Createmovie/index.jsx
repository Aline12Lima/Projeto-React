import { Container, Links, Form, Section, Brand } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { FaArrowLeft } from "react-icons/fa";
import { Sections } from "../../components/Sections";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

export function Createmovie() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <FaArrowLeft />
            <Links to="/">Voltar</Links>
          </header>
          <h1>Novo Filme </h1>

          <div class="Btn">
            <Input class="input1" placeholder="Titúlo" />
            <Input class="input1" placeholder="Sua nota (0 a 10)" />
            <Textarea class="textarea" placeholder="Observações" />
          </div>
          <Section>
            <Sections title="Marcadores">
              <div className="Tags">
                <NoteItem value="react" />
                <NoteItem isNew placeholder=" Nova tag" />
              </div>
            </Sections>
          </Section>
          <Brand>
            <Button class="salvar" title="salvar" />
            <Button class="excluir" title="Excluir" />
          </Brand>
        </Form>
      </main>
    </Container>
  );
}
