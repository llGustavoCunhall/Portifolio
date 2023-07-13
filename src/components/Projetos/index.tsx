import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

export function Projetos() {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" />
      <section>
        <ProjetoItem
          title="Receitas"
          type="App"
          slug="app-receitas"
          img="https://www.fsp.usp.br/sustentarea/wp-content/uploads/2021/10/Receitas-Capa-1.png"
        />
        <ProjetoItem
          title="Diná"
          type="Website"
          slug="Diná"
          img="https://www.fsp.usp.br/sustentarea/wp-content/uploads/2021/10/Receitas-Capa-1.png"
        />
        <ProjetoItem
          title="Portifólio"
          type="Website"
          slug="Portifólio"
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
