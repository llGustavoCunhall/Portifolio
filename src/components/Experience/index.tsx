import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

export function Experience() {
  return (
    <Container>
      <SectionTitle title="Experiências" description="" />
      <section>
        <ExperienceItem
          year="2004"
          title="Vendedor"
          description="Por 5 anos fui vendedor nas Massas Diná, sendo responsável pelas vendas e entregas dos produtos."
        />
        <ExperienceItem
          year="2010"
          title="Admnistrador"
          description="Durante alguns anos, admnistrei as Massas Diná."
        />
        <ExperienceItem
          year="2021"
          title="Dev Front End"
          description="Passei a estudar programação na escola de tecnologia Trybe, tendo me formado em desenvolvedor Front End no final deste ano."
        />
        {/* <ExperienceItem
          year="2021"
          title="Dev Front End"
          description="Formação concluida"
        /> */}
      </section>
    </Container>
  );
}
