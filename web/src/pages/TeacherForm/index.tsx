import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Container, Content } from './styles';

const TeacherForm: React.FC = () => {
  return (
    <Container>
      <Content>
        <PageHeader title="Que incrível que você quer dar aulas" />
      </Content>
    </Container>
  );
};

export default TeacherForm;
