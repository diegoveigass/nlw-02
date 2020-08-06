import React, { useState, useCallback, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TeacherItem, { TeacherProps } from '../../components/TeacherItem';
import api from '../../services/api';

import { Container, Content, MainContent } from './styles';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const searchTeachers = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const response = await api.get('classes', {
        params: {
          week_day,
          subject,
          time,
        },
      });

      setTeachers(response.data);
    },
    [subject, week_day, time],
  );

  return (
    <Container>
      <Content>
        <PageHeader title="Estes são os proffys disponíveis">
          <form onSubmit={searchTeachers}>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={e => {
                setSubject(e.target.value);
              }}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Educação Física', label: 'Educação Física' },
                { value: 'Física', label: 'Física' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Ciências', label: 'Ciências' },
              ]}
            />
            <Select
              name="week_day"
              label="Dia da semana"
              value={week_day}
              onChange={e => {
                setWeekDay(e.target.value);
              }}
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'Segunda-feira' },
                { value: '2', label: 'Terça-feira' },
                { value: '3', label: 'Quarta-feira' },
                { value: '4', label: 'Quinta-feira' },
                { value: '5', label: 'Sexta-feira' },
                { value: '6', label: 'Sábado' },
              ]}
            />
            <Input
              type="time"
              name="time"
              label="Hora"
              value={time}
              onChange={e => {
                setTime(e.target.value);
              }}
            />

            <button type="submit">Buscar</button>
          </form>
        </PageHeader>

        <MainContent>
          {teachers.map((teacher: TeacherProps) => (
            <TeacherItem key={teacher.id} teacher={teacher} />
          ))}
        </MainContent>
      </Content>
    </Container>
  );
};

export default TeacherList;
