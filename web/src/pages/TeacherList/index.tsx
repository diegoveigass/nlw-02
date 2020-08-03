import React from 'react';

import PageHeader from '../../components/PageHeader';

import { Container, Content, InputBlock, MainContent } from './styles';
import TeacherItem from '../../components/TeacherItem';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <Content>
        <PageHeader title="Estes são os proffys disponíveis">
          <form>
            <InputBlock>
              <label htmlFor="subject">Matéria</label>
              <input type="text" id="subject" />
            </InputBlock>
            <InputBlock>
              <label htmlFor="week_day">Dia da semana</label>
              <input type="text" id="week_day" />
            </InputBlock>
            <InputBlock>
              <label htmlFor="time">Hora</label>
              <input type="text" id="time" />
            </InputBlock>
          </form>
        </PageHeader>

        <MainContent>
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </MainContent>
      </Content>
    </Container>
  );
};

export default TeacherList;
