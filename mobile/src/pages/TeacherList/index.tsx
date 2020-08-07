import React, { useState, useCallback } from 'react';

import { Feather } from '@expo/vector-icons';

import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import TeacherItem, { TeacherProps } from '../../components/TeacherItem';
import api from '../../services/api';
import PageHeader from '../../components/PageHeader';

import {
  Container,
  HeaderButton,
  TeacherListScroll,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitButtonText,
} from './styles';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const loadFavorites = useCallback(async () => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: TeacherProps) => {
            return teacher.id;
          },
        );

        setFavorites(favoritedTeachersIds);
      }
    });
  }, []);

  useFocusEffect(() => {
    loadFavorites();
  });

  const handleToggleFiltersVisible = useCallback(() => {
    setIsFiltersVisible(!isFiltersVisible);
  }, [isFiltersVisible]);

  const handleFiltersSubmit = useCallback(async () => {
    loadFavorites();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);
  }, [subject, week_day, time, loadFavorites]);

  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <HeaderButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </HeaderButton>
        }
      >
        {isFiltersVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <Input
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholderTextColor="#c1bccc"
              placeholder="Qual a matéria?"
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o dia?"
                />
              </InputBlock>
              <InputBlock>
                <Label>Horário</Label>
                <Input
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual horário?"
                />
              </InputBlock>
            </InputGroup>
            <SubmitButton onPress={handleFiltersSubmit}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

      <TeacherListScroll
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: TeacherProps) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </TeacherListScroll>
    </Container>
  );
};

export default TeacherList;
