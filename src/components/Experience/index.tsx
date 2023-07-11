import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

export function Experience() {
  return (
    <Container>
      <SectionTitle title="#1 ano" description="de experiência" />
      <section>
        <ExperienceItem
          year="2021"
          title="Dev Front End"
          description="Formação concluida"
        />
        <ExperienceItem
          year="2021"
          title="Dev Front End"
          description="Formação concluida"
        />
        <ExperienceItem
          year="2021"
          title="Dev Front End"
          description="Formação concluida"
        />
        <ExperienceItem
          year="2021"
          title="Dev Front End"
          description="Formação concluida"
        />
      </section>
    </Container>
  );
}
