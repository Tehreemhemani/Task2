import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import { colors, parameters } from '../Components/GlobalStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default function Header({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={{ marginTop: -10 }}>
        <Icon
          type="material-commmunity"
          name="arrow-back"
          color={colors.icons}
          size={32}
        />



      </View>

      <View>
        <Image
          source={require('../Assets/logo.png')}
          style={styles.logoImage}
        />
      </View>

      <View style={{ marginTop: -10, marginRight: -120 }}>
        <FontAwesome5
          type="material-community"
          name="shopping-bag"
          color={colors.icons}
          size={32} />
      </View>
      <View>
        <View style={{ marginTop: 70 }}>
          <EvilIcons
            type="material-community"
            name="close"
            color={colors.icons}
            size={20} />
        </View>
      </View>


    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 30,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },


})










