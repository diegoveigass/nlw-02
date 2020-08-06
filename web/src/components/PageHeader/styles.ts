import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);

  @media (min-width: 700px) {
    height: 340px;
  }
`;

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;

  @media (min-width: 700px) {
    max-width: 1100px;
  }

  > img {
    height: 1.6rem;
  }

  a {
    height: 3.2rem;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto 6.4rem;

  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > strong {
      max-width: 350px;
    }
  }

  strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }

  p {
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-title-in-primary);
    margin-top: 2.4rem;
  }

  form {
    margin-top: 3.2rem;

    @media (min-width: 700px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 16px;
      position: absolute;
      bottom: -28px;
    }

    label {
      color: var(--color-text-in-primary);
    }
  }
`;
