import React, { useCallback, useState } from 'react';

import { Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  Value,
  ButtonsContainer,
  FavoriteButton,
  ButtonIcon,
  ContactButton,
  ContactButtonText,
} from './styles';
import api from '../../services/api';

export interface TeacherProps {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: TeacherProps;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  const handleLinkToWhatsapp = useCallback(() => {
    api.post('connections', {
      user_id: teacher.id,
    });

    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }, [teacher.whatsapp, teacher.id]);

  const handleToggleFavorite = useCallback(async () => {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex(
        (teacherItem: TeacherProps) => {
          return teacherItem.id === teacher.id;
        },
      );

      favoritesArray.splice(favoriteIndex, 1);

      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);

      setIsFavorited(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }, [isFavorited, teacher]);

  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: teacher.avatar }} />
        <ProfileInfo>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>
      <Bio>{teacher.bio}</Bio>

      <Footer>
        <Price>
          Preço/hora {'   '}
          <Value>R$ {teacher.cost}</Value>
        </Price>

        <ButtonsContainer>
          <FavoriteButton
            onPress={handleToggleFavorite}
            favorited={isFavorited}
          >
            {isFavorited ? (
              <ButtonIcon source={unfavoriteIcon} />
            ) : (
                <ButtonIcon source={heartOutlineIcon} />
              )}
          </FavoriteButton>
          <ContactButton onPress={handleLinkToWhatsapp}>
            <ButtonIcon source={whatsappIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
