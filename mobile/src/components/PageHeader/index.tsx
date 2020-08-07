import React, { useCallback, ReactNode } from 'react';
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
  HeaderRight,
} from './styles';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
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

      <HeaderRight>
        <Title>{title}</Title>

        {headerRight}
      </HeaderRight>

      {children}
    </Container>
  );
};

export default PageHeader;
