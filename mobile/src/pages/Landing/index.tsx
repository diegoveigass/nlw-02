import React, { useCallback } from 'react';
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

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

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
        Total de 200 conexões já realizadas <HeartImage source={heartIcon} />
      </TotalConnections>
    </Container>
  );
};

export default Landing;
