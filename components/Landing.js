import react from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { useFonts } from 'expo-font';

const Landing = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat/static/Montserrat-ExtraBold.ttf'),
    MontserratSemiBold: require('../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf'),
    MontserratMedium: require('../assets/fonts/Montserrat/static/Montserrat-Medium.ttf'),
  });

  return (
    <ScrollView style={{ backgroundColor: '#FFF' }}>
      <Text
        style={{
          fontWeight: 'bold',
          color: 'white',
          fontSize: 45,
          marginLeft: 30,
        }}>
        {' '}
        Everyone
      </Text>

      <View>
        <Image
          source={require('../assets/images/welcome.png')}
          style={{
            width: Dimensions.get('screen').width - 75,
            height: Dimensions.get('screen').height / 2.9,
            marginVertical: 30,
            marginHorizontal: 35,
            alignItems: 'center',
          }}></Image>
      </View>

      <View style={{ marginVertical: 50 }}>
        <Text
          style={{
            fontFamily: 'Montserrat',
            fontSize: 30,
            color: 'black',
            textAlign: 'center',
          }}>
          Mindfulness for
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat',
            fontSize: 30,
            color: 'black',
            textAlign: 'center',
          }}>
          a better you.
        </Text>
        <Text
          style={{
            fontFamily: 'MontserratMedium',
            fontSize: 16,
            color: '#9164AB',
            textAlign: 'center',
          }}>
          Learn to live Healtier.
        </Text>
      </View>

      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#9164AB',
          width: Dimensions.get('screen').width / 2.5,
          height: Dimensions.get('screen').height / 14,
          marginVertical: 50,
          marginHorizontal: 110,
          borderRadius: 50,
        }}
        onPress={() => {
          navigation.navigate('login');
        }}>
        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
          {' '}
          Get Started{' '}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Landing;
