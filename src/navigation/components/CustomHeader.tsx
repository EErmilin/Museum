import React, {useEffect} from 'react';
import {Platform, View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {ParamListBase, useNavigation} from '@react-navigation/native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../../assets/colors';
import Drawer_icon from '../../../assets/icons/Drawer_icon';
import {open as openDrawer} from '../../store/drawerModel';
import Arrow_right from '../../../assets/icons/Arrow_right';

type TStyle = 'dark' | 'light';

type TProps = {
  navigation?: BottomTabNavigationProp<ParamListBase, string, undefined>;

  showBackButton?: boolean;
  title?: string;
};
const CustomHeader = ({
  navigation,

  showBackButton = true,
  title,
}: TProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, {paddingTop: insets.top}]}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.drawer} onPress={() => openDrawer()}>
        <Drawer_icon />
      </TouchableOpacity>

      {showBackButton && (
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={2}
          onPress={navigation.goBack}>
          <View style={styles.arrow}>
            <Arrow_right />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    height: Platform.OS === 'ios' ? 44 : 50, // Высота заголовка
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    right: 16,
    top: Platform.OS === 'ios' ? 10 : 10,
    zIndex: 1,

    transform: [{rotateZ: '180deg'}],
  },
  drawer: {
    position: 'absolute',
    left: 11,
    top: Platform.OS === 'ios' ? 10 : 10,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#ffffff90',
  },
  title: {
    fontSize: 16,
    lineHeight: 14,
    color: colors.blue,
    width: '100%',
    textAlign: 'center',
    letterSpacing: 2,
    paddingTop: 5,
    fontFamily: 'OzHandicraftCyrillicBT',
  },
  arrow: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomHeader;
