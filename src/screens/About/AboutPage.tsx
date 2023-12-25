import React, { useRef, useState } from 'react';
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Linking,
  useWindowDimensions
} from 'react-native';
import { images } from '../../../assets/images/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../assets/colors';
import CustomHeader from '../../navigation/components/CustomHeader';
import AudioPlayer from '../../components/Audio';
import { useStore } from '../../../App';
import HTML from 'react-native-render-html';
import { useNavigation } from '@react-navigation/native';

interface ExHibitProps {
  image: string;
  images: string[];
  description: string;
}


const AboutPage = () => {
  const refImage = useRef(null);
  const [active, setActive] = useState(0);
  const [layoutX, setLayoutX] = useState(0);
  const {state}: any = useStore();
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const info = state?.content?.find(item => item.key == "омузее_история");
  //next slider
  const nextSlider = () => {
    if (active === images.imageSlider.length - 1) {
      return;
    } else {
      setActive(prevState => prevState + 1);
      setLayoutX(prev => prev + 320);
      refImage?.current?.scrollTo({ x: layoutX, animated: true });
      console.log(layoutX);
    }
  };

  

  const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      color: 'gray',
    },
  };


  //prev slider

  const prevSlider = () => {
    if (active === 0) {
      setLayoutX(0);
    } else {
      setActive(prevState => prevState - 1);
      setLayoutX(prev => prev - 320);
      console.log(layoutX);

      refImage?.current?.scrollTo({ x: layoutX, animated: true });
    }
  };

  const onLayoutEvent = (event: { nativeEvent: { layout: { x: number } } }) => {
    const { x } = event.nativeEvent.layout;
    setLayoutX(x / images.imageSlider.length);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        
        <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>История</Text>
          { /*       
          <View style={styles.slider}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              ref={refImage}>
              {images.imageSlider.map((image, i) => {
                return (
                  <Image
                    source={image.item}
                    style={styles.imageStyle}
                    resizeMode="cover"
                    key={i}
                    onLayout={onLayoutEvent}
                  />
                );
              })}
            </ScrollView>
            <TouchableOpacity style={styles.arrow} onPress={nextSlider}>
              <Arrow_right />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.arrow, styles.left]}
              onPress={prevSlider}>
              <Left_arrow />
            </TouchableOpacity>
            <View style={styles.dotsContainer}>
              {images.imageSlider.map((_, index) => {
                return (
                  <View
                    key={index}
                    style={[
                      styles.dots,
                      {
                        backgroundColor:
                          active === index ? colors.blue : colors.yellow,
                      },
                    ]}
                  />
                );
              })}
            </View>
            </View>  

          <View style={styles.voiceContainer}>
            <View style={styles.play}>
              <Play_btn />
            </View>
          </View>*/}

          {/* INFO */}
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <AudioPlayer audio={["https://museum.mobility.tw1.ru/assets/3541dd36-8d98-468e-8603-158ebcf130a2.mp3"]} />
            </View>
          <View style={styles.infoContainer}>
          <HTML
              contentWidth={width}
              source={{html: info.description}}
              tagsStyles={tagsStyles}
              renderersProps={{
                a: {
                  onPress(event, url, htmlAttribs, target) {
                    if (url.includes('exhibits')) {
                      const parts = url.split('/');
                      var uuid = parts[parts.length - 1];
                      navigation.navigate('Details', {uuid: uuid});
                    } else {
                      Linking.canOpenURL(url).then(supported => {
                        if (supported) {
                          Linking.openURL(url);
                        }
                      });
                    }
                  },
                },
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AboutPage;

const styles = StyleSheet.create({
  title: {
    paddingBottom:10,
    maxWidth:300,
    fontSize: 24,
    lineHeight: 30,
    color: '#2B2B2B',
    width: '100%',
    textAlign: 'center',
    letterSpacing: 2,
    paddingTop: 0,
    fontFamily: 'OzHandicraftCyrillicBT',
  },
  container: {
    flex: 1,
    paddingTop:50,
    backgroundColor: colors.white,
  },
  scroll: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  slider: {
    height: 170,
    width: '100%',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 300,
    height: 170,
    marginRight: 20,
  },
  arrow: {
    width: 30,
    height: 30,
    backgroundColor: colors.white,
    borderRadius: 15,
    position: 'absolute',
    right: -30 / 2,
    top: 161 / 2,
    transform: [{ translateY: -30 / 2 }],
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  left: {
    width: 30,
    height: 30,
    backgroundColor: colors.white,
    borderRadius: 15,
    position: 'absolute',
    left: -30 / 2,
    top: 161 / 2,
    transform: [{ translateY: -30 / 2 }],
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotsContainer: {
    width: 100,
    position: 'absolute',
    bottom: -20,
    left: 'auto',
    transform: [{ translateX: 300 / 2 }],
    flexDirection: 'row',
    gap: 4,
  },
  dots: {
    width: 10,
    aspectRatio: 1,
    backgroundColor: colors.blue,
    // position: 'absolute',
    // bottom: -10,
    // left: 300 / 2,
    // transform: [{translateY: -10 / 2}],
    borderRadius: 5,
  },
  voiceContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'stretch',
  },
  play: {
    width: 40,
    aspectRatio: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    // opacity: 0.5,
  },
  infoContainer: {
    alignSelf: 'stretch',
    marginTop: 30,
  },
  infoText: {
    color: 'gray',
    fontSize: 16,
    lineHeight: 20,
    marginTop: 22,
  },
});
