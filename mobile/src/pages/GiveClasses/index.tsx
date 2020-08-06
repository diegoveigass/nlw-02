import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import {
  Container,
  BackgroundImage,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  const handleGoBackToLandingPage = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <BackgroundImage resizeMode="contain" source={giveClassesBgImage}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma Web
        </Description>
      </BackgroundImage>

      <OkButton onPress={handleGoBackToLandingPage}>
        <OkButtonText>Tudo bem</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default GiveClasses;
