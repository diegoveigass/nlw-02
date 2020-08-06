import React, { useCallback, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import api from '../../services/api';

import { Container, Content, Main, ScheduleItem } from './styles';

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: '',
      to: '',
    },
  ]);

  const handleAddNewScheduleItem = useCallback(() => {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: '',
      },
    ]);
  }, [scheduleItems]);

  const setScheduleItemValue = useCallback(
    (position: number, field: string, value: string) => {
      const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
        if (index === position) {
          return { ...scheduleItem, [field]: value };
        }

        return scheduleItem;
      });

      setScheduleItems(updatedScheduleItems);
    },
    [scheduleItems],
  );

  const handleCreateClass = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      api
        .post('classes', {
          name,
          avatar,
          whatsapp,
          bio,
          subject,
          cost: Number(cost),
          schedule: scheduleItems,
        })
        .then(() => {
          alert('Cadastro realizado com sucesso!');
          history.push('/');
        })
        .catch(() => {
          alert('Erro no cadastro!!!');
        });
    },
    [name, avatar, whatsapp, bio, subject, cost, scheduleItems, history],
  );

  return (
    <Container>
      <Content>
        <PageHeader
          title="Que incrível que você quer dar aulas"
          description="O primeiro passo é preencher esse formulário de inscrição"
        />

        <Main>
          <form onSubmit={handleCreateClass}>
            <fieldset>
              <legend>Seus dados</legend>

              <Input
                name="name"
                label="Nome completo"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <Input
                name="avatar"
                label="Avatar"
                value={avatar}
                onChange={e => setAvatar(e.target.value)}
              />
              <Input
                name="whatsapp"
                label="Whatsapp"
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)}
              />
              <Textarea
                name="bio"
                label="Biografia"
                value={bio}
                onChange={e => setBio(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <legend>Sobre a aula</legend>

              <Select
                name="subject"
                label="Matéria"
                value={subject}
                onChange={e => setSubject(e.target.value)}
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
              <Input
                name="cost"
                label="Custo da sua hora por aula"
                value={cost}
                onChange={e => setCost(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <legend>
                Horários disponíveis
                <button type="button" onClick={handleAddNewScheduleItem}>
                  + Novo horário
                </button>
              </legend>

              {scheduleItems.map((scheduleItem, index) => (
                <ScheduleItem key={scheduleItem.week_day}>
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={e => {
                      setScheduleItemValue(index, 'week_day', e.target.value);
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
                    name="from"
                    value={scheduleItem.from}
                    label="Das"
                    type="time"
                    onChange={e => {
                      setScheduleItemValue(index, 'from', e.target.value);
                    }}
                  />
                  <Input
                    name="to"
                    value={scheduleItem.to}
                    label="Até"
                    type="time"
                    onChange={e => {
                      setScheduleItemValue(index, 'to', e.target.value);
                    }}
                  />
                </ScheduleItem>
              ))}
            </fieldset>

            <footer>
              <p>
                <img src={warningIcon} alt="Aviso importante" />
                Importante! <br />
                Preencha todos os dados
              </p>
              <button type="submit">Salvar cadastro</button>
            </footer>
          </form>
        </Main>
      </Content>
    </Container>
  );
};

export default TeacherForm;
