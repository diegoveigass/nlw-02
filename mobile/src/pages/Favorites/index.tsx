import React, { useCallback, useState } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import TeacherItem, { TeacherProps } from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';

import { Container, TeacherListScroll } from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = useCallback(async () => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  }, []);

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />

      <TeacherListScroll
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: TeacherProps) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </TeacherListScroll>
    </Container>
  );
};

export default Favorites;
