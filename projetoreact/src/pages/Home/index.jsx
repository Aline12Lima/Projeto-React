import { Container, Brand, Content } from "./styles";

import { FiPlus } from "react-icons/fi";
import { Star } from "../../components/Star";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Sections } from "../../components/Sections";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  return (
    <Container>
      <div>
        <Header />
        <Brand>
          <h1>Meus Filmes</h1>

          <Button>
            Add
            <FiPlus />
          </Button>
        </Brand>
      </div>

      <Content>
        <Sections>
          <h1>Interestellar</h1>

          <Star active />
          <Star />
          <Star />
          <Star />
          <Star />

          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se comunicar com ela. Pai e filha descobrem que o
            "fantasma" é uma inteligência desconhecida que está enviando
            mensagens codificadas através de radiação gravitacional, deixando
            coordenadas em binário que os levam até uma instalação secreta da
            NASA liderada pelo professor John Brand. O cientista revela que um
            buraco de minhoca foi aberto perto de Saturno e que ele leva a
            planetas que podem oferecer condições de sobrevivência para a
            espécie humana.
          </p>

          <ButtonText title=" Comedia" />
          <ButtonText title=" Drama" />
          <ButtonText title=" Ação" />
        </Sections>
        <Sections>
          <h1>Interestellar 2</h1>

          <Star active />
          <Star />
          <Star />
          <Star />
          <Star />

          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se comunicar com ela. Pai e filha descobrem que o
            "fantasma" é uma inteligência desconhecida que está enviando
            mensagens codificadas através de radiação gravitacional, deixando
            coordenadas em binário que os levam até uma instalação secreta da
            NASA liderada pelo professor John Brand.
          </p>

          <ButtonText title=" Comedia" />
          <ButtonText title=" Drama" />
          <ButtonText title=" Ação" />
        </Sections>
        <Sections>
          <h1>Interestellar</h1>
          <Star active />
          <Star />
          <Star />
          <Star />
          <Star />

          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se comunicar com ela. Pai e filha descobrem que
          </p>

          <ButtonText title=" Comedia" />
          <ButtonText title=" Drama" />
          <ButtonText title=" Ação" />
        </Sections>
      </Content>
    </Container>
  );
}
