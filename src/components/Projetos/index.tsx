import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';
import portifolio from '../../assets/portifólio.jpg';
import dina from '../../assets/dina.png';

export function Projetos() {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" />
      <section>
        <ProjetoItem
          title="Portifólio"
          type="Website"
          slug="Portifólio"
          img={portifolio}
        />
        <ProjetoItem title="Diná" type="Website" slug="Diná" img={dina} />
        <ProjetoItem
          title="Receitas"
          type="App"
          slug="app-receitas"
          img="https://www.fsp.usp.br/sustentarea/wp-content/uploads/2021/10/Receitas-Capa-1.png"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
