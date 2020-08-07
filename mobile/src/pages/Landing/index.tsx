import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import landingImg from '../../assets/images/landing.png';

import studyIcon from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import {
  Container,
  LandingImage,
  Title,
  TitleBold,
  ButtonsContainer,
  ButtonPrimary,
  ButtonSecondary,
  ButtonImage,
  ButtonText,
  TotalConnections,
  HeartImage,
} from './styles';
import api from '../../services/api';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  const handleNavigateToGiveClassesPage = useCallback(() => {
    navigate('GiveClasses');
  }, [navigate]);

  const handleNavigateToStudyPages = useCallback(() => {
    navigate('StudyTabs');
  }, [navigate]);

  return (
    <Container>
      <LandingImage source={landingImg} />

      <Title>
        Seja bem-vindo, {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <ButtonPrimary onPress={handleNavigateToStudyPages}>
          <ButtonImage source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </ButtonPrimary>
        <ButtonSecondary onPress={handleNavigateToGiveClassesPage}>
          <ButtonImage source={giveClasses} />
          <ButtonText>Dar aulas</ButtonText>
        </ButtonSecondary>
      </ButtonsContainer>

      <TotalConnections>
        Total de {totalConnections} conexões já realizadas{' '}
        <HeartImage source={heartIcon} />
      </TotalConnections>
    </Container>
  );
};

export default Landing;
