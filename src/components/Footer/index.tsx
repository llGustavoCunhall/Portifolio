import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin
} from 'react-icons/ai';
import { Container } from './styles';

export function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineTwitter
            onClick={() =>
              handleRedirect('https://twitter.com/lGustavo_Cunhal')
            }
          />
          <AiOutlineGithub
            onClick={() =>
              handleRedirect('https://github.com/llGustavoCunhall')
            }
          />
          <AiOutlineLinkedin
            onClick={() =>
              handleRedirect('https://www.linkedin.com/in/llgustavocunhall')
            }
          />
        </section>
      </div>
    </Container>
  );
}
