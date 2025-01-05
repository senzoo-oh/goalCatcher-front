import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FooterNav = () => {
  const navigation = useNavigation();


    return (
      <View style={styles.footerNav}>
        <TouchableOpacity style={styles.navButton}
        onPress={() => navigation.navigate('Home')}>
          <Image source={require('../styles/images/targetIcon.png')} style={styles.navIcon}></Image>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButton}
        onPress={() => navigation.navigate('MyPage')}>
            <Image source={require('../styles/images/userIcon.png')} style={styles.navIcon}></Image>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButton}>
            <Image source={require('../styles/images/settingIcon.png')} style={styles.settingIcon}></Image>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
    footerNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#0064B1',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    navButton: {
        flex: 1,
        alignItems: 'center',
    },
    navIcon: {
        width: 60,
        height: 60,
        fontSize: 24,
    },
    settingIcon: {
        width: 50,
        height: 50
    }
});
  
export default FooterNav;