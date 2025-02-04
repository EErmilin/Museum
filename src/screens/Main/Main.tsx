import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import Video from 'react-native-video';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Logo_icon from '../../../assets/icons/Logo_icon';
import { colors } from '../../../assets/colors';
import { images } from '../../../assets/images/images';
import QrCode_icon from '../../../assets/icons/QrCode_icon';
import Button from '../../components/base/Button';
import Map_icon from '../../../assets/icons/Map_icon';
import River_icon from '../../../assets/icons/River_icon';
import Home_About_icon from '../../../assets/icons/Home_About_icon';
import Home_Exposition_icon from '../../../assets/icons/Home_Exposition_icon';
import Home_Park_icon from '../../../assets/icons/Home_Park_icon';
import { SharedElement } from 'react-navigation-shared-element';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import CustomHeader from '../../navigation/components/CustomHeader';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchItems } from '../../api/directusService';
import { useStore } from '../../../App';
import Play_btn from '../../../assets/icons/Play_btn';
import VideoPlayer from 'react-native-video-controls';

const Main = () => {
  const { state, dispatch }: any = useStore();
  const routes = useRoute();
  const animatedText = useSharedValue(15);
  const animatedTextOpacity = useSharedValue(0);
  const animateBlocks = useSharedValue(-200);
  const animateRotation = useSharedValue('0deg');
  const navigation = useNavigation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: animatedText.value }],
      opacity: animatedTextOpacity.value,
    };
  });

  useEffect(() => {
    //animation if SplashScreen
    if (routes.params?.screen === 'Splash') {
      animatedText.value = withDelay(400, withTiming(0, { duration: 200 }));
      animatedTextOpacity.value = withDelay(
        400,
        withTiming(1, { duration: 200 }),
      );
    }
  }, [animatedText, routes.params?.screen, animatedTextOpacity]);

  //animation if from other screens
  useFocusEffect(
    useCallback(() => {
      if (routes.params?.id === 'Main') {
        animateBlocks.value = withTiming(animateBlocks.value + 200, {
          duration: 400,
        });
        animateRotation.value = withTiming('360deg', { duration: 400 });
      }
    }, [animateBlocks, animateRotation, routes]),
  );

  useEffect(() => {
    return () => {
      animateBlocks.value = -200;
      animateRotation.value = '0deg';
    };
  }, [animateBlocks, animateRotation]);

  const fetchData = async () => {
    const content = await fetchItems('app_content?fields=*,images.directus_files_id.filename_disk,audios.directus_files_id.filename_disk')
    const data = await fetchItems('exhibits?fields=*,images.directus_files_id.filename_disk,audios.directus_files_id.filename_disk');
    dispatch({ type: 'setContent', payload: content.data.data });
    dispatch({ type: 'setExhibits', payload: data.data.data });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <CustomHeader showBackButton={false} />
      <ScrollView
        style={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={{ height: 333 }}>
          <Image
            source={images.main_background_houses}
            style={{
              width: '100%',
              height: 360,
              position: 'absolute',
            }}
            resizeMode="cover"
          />
          <View>
            <View style={styles.logo_container}>
              <SharedElement id="logo.image">
                <Logo_icon />
              </SharedElement>

              <Animated.Text style={[styles.logo_title, textAnimatedStyle]}>
                Русскинской музей Природы и Человека имени Ядрошникова
                Александра Павловича
              </Animated.Text>
            </View>
          </View>
        </View>
        <Animated.View style={{ transform: [{ translateY: animatedText }] }}>
          <River_icon />
        </Animated.View>
        {/* QR & MAP */}
        <View style={styles.header_buttons_container}>
          {/* <View style={styles.header_button_wrapper}>
            <Map_icon />
            <Button text="Карта музея" onPress={() => {}} />
          </View>*/}
          <View style={styles.header_button_wrapper}>
            <QrCode_icon />
            <Button
              text="Сканировать QR-код"
              onPress={() => {
                navigation.navigate('Photo');
                // TODO тест костыль
                // navigation.navigate('Details', {
                //   uuid: '07021b86-2a36-4465-bf1f-d20bfb355c1b',
                // });
              }}
            />
          </View>
        </View>
        {/* BLOCKS navigation */}
        <Animated.View
          style={[
            styles.bigButtons_wrapper,
            {
              transform: [
                {
                  translateY:
                    routes.params.id === 'Main' ? animateBlocks : animatedText,
                },
              ],
            },
          ]}>
          <Home_About_icon
            onPress={() => {
              navigation.navigate('About');
            }}
          />
          <Animated.View style={{ transform: [{ rotateZ: animateRotation }] }}>
            <Home_Exposition_icon
              onPress={() => {
                navigation.navigate('Exposition');
              }}
            />
          </Animated.View>
          {
            <Home_Park_icon onPress={() => navigation.navigate('Park')} />
          }
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Quiz');
            }}>
            <Image
              style={styles.img}
              source={require('../../../assets/images/qwiz.png')}
            />
          </TouchableWithoutFeedback>


        </Animated.View>
        {/* VIDEO */}
        <View style={styles.videoContainer}>
          <VideoPlayer
            ref={videoRef}
            source={require('../../../assets/video/Rolik.mp4')}
            style={styles.backgroundVideo}
            paused={!isPlaying}
            controls={false}
            repeat={false}
            progressUpdateInterval={250.0}
            resizeMode="cover"
            disableFullscreen={true}
            poster="https://museum.mobility.tw1.ru/assets/8223cdc4-df91-435f-b68e-448058b90707.jpg"
          />
        </View>

      </ScrollView>

    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  controls: {
    position: 'absolute',
    bottom: '50%',
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  controlButton: {
    width: 60,
    height: 60,
    marginHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 1,
    borderColor: colors.blue,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  container: {
    // paddingTop: 60,
    flex: 1,
  },
  img: {
    width: 300,
    height: 120,
  },
  logo_container: {
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  logo_title: {
    maxWidth: '70%',
    textAlign: 'center',

    marginLeft: 10,
    color: colors.blue,
    fontSize: 20,
    fontFamily: 'OzHandicraftCyrillicBT',
    fontWeight: '600',
    // transform: [{translateY: -15}],
  },
  header_buttons_container: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 10,
    marginBottom: 16,
    marginTop: 10,
  },
  header_button_wrapper: {
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  bigButtons_wrapper: {
    marginTop: 4,
    gap: 20,
    alignSelf: 'center',
    marginBottom: 60,
    transform: [{ translateY: -15 }],
  },
  videoContainer: {
    flex: 1,
    position: 'relative',
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  backgroundVideo: {
    backgroundColor: '#000',
    margin: 10,
    marginTop: 0,
    height: 250,
    marginBottom: 60,
  },
});
