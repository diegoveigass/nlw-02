import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import {
  Container,
  TopBar,
  ButtonBordeless,
  BackImage,
  LogoImage,
  Title,
} from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();

  const handleGoBack = useCallback(() => {
    navigate('Landing');
  }, [navigate]);

  return (
    <Container>
      <TopBar>
        <ButtonBordeless onPress={handleGoBack}>
          <BackImage source={backIcon} resizeMode="contain" />
        </ButtonBordeless>

        <LogoImage source={logoImg} resizeMode="contain" />
      </TopBar>

      <Title>{title}</Title>
    </Container>
  );
};

export default PageHeader;
