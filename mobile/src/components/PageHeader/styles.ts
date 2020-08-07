import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 40px;
  background-color: #8257e5;
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonBordeless = styled(BorderlessButton)``;

export const BackImage = styled.Image``;
export const LogoImage = styled.Image``;

export const Title = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  max-width: 200px;
  margin: 40px 0;
`;

export const HeaderRight = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
