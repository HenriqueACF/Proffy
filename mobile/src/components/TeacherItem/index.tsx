import React from 'react';
import { Image, View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unfavorite from '../../assets/images/icons/unfavorite.png';
import whatsapp from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem(){
  return(
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{uri:'https://github.com/HenriqueACF.png'}}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Henrique Assis</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet,
        {'\n'} {'\n'}
         consectetur adipiscing elit. Cras pulvinar quam vel nisi tempor consectetur. Sed ut ipsum felis. Duis sit amet justo pretium, ullamcorper ipsum nec, laoreet lorem.
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'  '}
          <Text style={styles.priceValue}>R$20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutLineIcon} /> */}
            <Image source={unfavorite} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsapp} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>

        
      </View>
    </View>
  )
}

export default TeacherItem;