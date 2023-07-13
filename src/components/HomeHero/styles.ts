import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  padding-bottom: 8rem;
  border-bottom: 3px solid ${({ theme }) => theme.primary};
  > img {
    width: 40rem;
    flex: 1;
  }

  > div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1450px) {
    > img {
      width: 30rem;
    }

    > div {
      flex: 1;
    }
  }

  @media (max-width: 1000px) {
    > img {
      width: 22rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
    }
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;
  margin-left: 1.5rem;

  h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.primary};
  }

  h2 {
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary};
  }

  @media (max-width: 1450px) {
    h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  background: ${({ theme }) => theme.gradient};
  font-family: 'JetBrains Mono', monospace;
  transition: 1s;
  gap: 2rem;
  margin-right: 2.5rem;

  span.purple {
    color: #c38cdd;
  }

  @media (max-width: 1450px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 1rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin-right: 0;
  }

  &:hover {
    filter: brightness(1.2);
  }

  &:last-child {
    align-self: flex-end;
  }
`;
