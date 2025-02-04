import {
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  View,
  TouchableOpacity,
  Linking
} from 'react-native';
import React, { useCallback } from 'react';
import { colors } from '../../../assets/colors';

import MenuClose_icon from '../../../assets/icons/MenuClose_icon';

import { PAGES } from '../MainAppNavigation';
import { TMainAppPage } from '../types/TabTypes';

const { width } = Dimensions.get('screen');

interface IDrawerMenu {
  onNavigation: (screen: string) => void;
  onClose: () => void;
}


const DrawerMenu: React.FC<IDrawerMenu> = ({ onNavigation, onClose }) => {
  const drawerComponent = useCallback((item: TMainAppPage) => {
    return (
      <TouchableOpacity
        key={item.title}
        style={styles.menu_component_wrapper}
        onPress={() => onNavigation(item.name)}>
        {item.icon}
        <Text style={styles.menu_component_text}>{item.title}</Text>
      </TouchableOpacity>
    );
  }, []);
  const menuLinks = PAGES.filter((e) => e.icon)

  const openPrivacy = () => {
    Linking.openURL('https://www.privacypolicies.com/live/1343a40d-191c-474d-a753-e504b7806f1d');
  };


  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.menu_iconClose} onPress={onClose}>
        <MenuClose_icon />
      </TouchableOpacity>
      <View style={styles.menu_wrapper}>
        {menuLinks.map(element => drawerComponent(element))}
      </View>
      <TouchableOpacity onPress={() => openPrivacy()} style={styles.privacy}><Text style={styles.privacyText}>Политика конфиденциальности</Text></TouchableOpacity>
    </SafeAreaView>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: width,
    // backgroundColor: colors.blue,
    backgroundColor: 'transparent',
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 60,
  },
  menu_wrapper: {
    marginTop: 80,
  },
  privacy: {
    position: 'absolute',
    bottom: 50,
    left: 50,
    fontSize:15
  },
  privacyText: {
    fontSize:17
  },
  menu_iconClose: {
    position: 'absolute',
    top: 5,
    left: 15,
    marginBottom: 40,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu_component_wrapper: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  menu_component_text: {
    marginTop: 4,
    width: 220,
    marginLeft: 20,
    color: colors.white,
    fontSize: 18,
    lineHeight: 20,
    textAlignVertical: 'center',
  },
});
