import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 40px;
  background-color: #8257e5;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 32px;
  line-height: 37px;
  max-width: 200px;
`;

export const Description = styled.Text`
  margin-top: 24px;
  color: #d4c2ff;
  font-size: 16px;
  line-height: 26px;
  font-family: Poppins_400Regular;
  max-width: 260px;
`;

export const OkButton = styled(RectButton)`
  margin: 40px 0;
  background-color: #04d361;
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const OkButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: Archivo_700Bold;
`;
