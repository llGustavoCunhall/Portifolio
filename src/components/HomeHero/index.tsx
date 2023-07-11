import { CodeItem, Container, InfosContainer, TextContainer } from './styles';
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
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Gustavo,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Cunha</span>
            </div>
            <div>
              Idade: <span className="blue">42 anos</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Formação</span> {'\u007B'}
            <div>
              <span className="blue">Desenvolvedor Front End</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
