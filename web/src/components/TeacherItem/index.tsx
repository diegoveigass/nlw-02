import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Container } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/56368749?s=460&u=5594d5ff693ea082f226c32881ab00237113671e&v=4"
          alt="Diego Veiga"
        />
        <div>
          <strong>Diego Veiga</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta pelas tecnologias mais avançadas da quimica!
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas presenciaram
        minhas explosões em laboratório!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </Container>
  );
};

export default TeacherItem;
