import { Container, Links, Brand } from "./styles";

import { Sections } from "../../components/Sections";
import { FaArrowLeft } from "react-icons/fa";
import { Star } from "../../components/Star";
import { CiClock1 } from "react-icons/ci";
import { ButtonText } from "../../components/ButtonText";

export function MoviePreview() {
  return (
    <Container>
      <header>
        <FaArrowLeft />
        <Links to="/">Voltar</Links>
      </header>
      <div>
        <Sections>
          <div class="h1Star">
            <h1>Interestellar</h1>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <Brand>
            <img
              src="https://github.com/aline12lima.png"
              alt="Foto do usuário"
            />
            <h2>
              Aline Lima <CiClock1 />{" "}
            </h2>
            <p> 23/05/22 às 08:00</p>
          </Brand>
          <div class="butt">
            <ButtonText title=" Comedia" />
            <ButtonText title=" Drama" />
            <ButtonText title=" Ação" />
          </div>
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
            espécie humana. As "missões Lázaro" enviadas anos antes
            identificaram três planetas potencialmente habitáveis orbitando o
            buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em
            homenagem aos astronautas que os pesquisaram. Brand recruta Cooper
            para pilotar a nave espacial Endurance e recuperar os dados dos
            astronautas; se um dos planetas se mostrar habitável, a humanidade
            irá seguir para ele na instalação da NASA, que é na realidade uma
            enorme estação espacial. A partida de Cooper devasta Murphy.
          </p>
        </Sections>
      </div>
    </Container>
  );
}
