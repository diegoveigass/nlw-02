import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const HeaderButton = styled(BorderlessButton)``;

export const TeacherListScroll = styled(ScrollView)`
  margin-top: -40px;
`;

export const SearchForm = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  color: #d4c2ff;
  font-family: Poppins_400Regular;
`;

export const Input = styled.TextInput`
  height: 54px;
  background-color: #fff;
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const SubmitButton = styled(RectButton)`
  background-color: #04d361;
  flex-direction: row;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
export const SubmitButtonText = styled.Text`
  color: #fff;
  font-family: Archivo_700Bold;
  font-size: 16px;
`;
