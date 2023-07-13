import { Container, InfosContainer, TextContainer } from './styles';
import picture from '../../assets/perfil.webp';

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Foto perfil Gustavo" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Gustavo</h2>
        </TextContainer>
        <InfosContainer>
          <span className="purple">
            Sou um desenvolvedor apaixonado por criar interfaces web que
            proporcionam uma ótima experiência do usuário. Estou sempre
            aprendendo, experimentando e criando coisas novas, então sinta-se à
            vontade para explorar meu trabalho e entrar em contato comigo.
          </span>
        </InfosContainer>
      </div>
    </Container>
  );
}
