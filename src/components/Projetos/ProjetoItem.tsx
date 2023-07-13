import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjetoContainer } from './styles';

export default function ProjetoItem() {
  return (
    <ProjetoContainer imgUrl="https://www.fsp.usp.br/sustentarea/wp-content/uploads/2021/10/Receitas-Capa-1.png">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># Projeto 01</h1>
          <h2>- Website</h2>
        </div>
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjetoContainer>
  );
}
