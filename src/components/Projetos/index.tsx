import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

export function Projetos() {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" />
      <section>
        <ProjetoItem />
        <ProjetoItem />
        <ProjetoItem />
      </section>
    </Container>
  );
}
