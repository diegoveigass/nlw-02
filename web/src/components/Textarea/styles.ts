import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  & + div {
    margin-top: 1.6rem;
  }

  @media (min-width: 700px) {
    & + div {
      margin-top: 0;
    }
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0.7rem;
  }

  label {
    font-size: 1.4rem;
  }

  textarea {
    width: 100%;
    height: 16rem;
    min-height: 8rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    resize: vertical;
    padding: 1.2rem 1.2rem;
    font: 1.6rem Archivo;
  }
`;
