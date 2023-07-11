import { Container } from './styles';
import NavLink from './NavLink';

export function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="projetos" />
      </ul>
    </Container>
  );
}
