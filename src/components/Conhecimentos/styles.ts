import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin-top: 3rem;

  > section {
    width: 100%;
    margin-top: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;
  }

  @media (max-width: 1000px) {
    gap: 5rem;
  }

  @media (max-width: 700px) {
    gap: 3rem;
    flex-wrap: wrap;
    margin-top: 5rem;
  }
`;

export const ConhecimentoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ theme }) => theme.primary};
    font-size: 1.3rem;
    font-weight: 300;
    text-transform: uppercase;
  }

  svg {
    width: 6.5rem;
    height: 6.5rem;
    color: ${({ theme }) => theme.secondary};
    transition: 0.3s;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.primary};
      transform: scale(0.95);
    }
  }
`;
