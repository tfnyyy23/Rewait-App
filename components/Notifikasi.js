import * as React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import { useFonts } from 'expo-font';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Notifikasi = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat/static/Montserrat-ExtraBold.ttf'),
    MontserratSemiBold: require('../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf'),
    MontserratMedium: require('../assets/fonts/Montserrat/static/Montserrat-Medium.ttf'),
    MontserratBold: require('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf'),
    MontserratRegular: require('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
  });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={styles.container2}>
          <Text
            style={{
              fontFamily: 'MontserratBold',
              fontSize: 24,
              color: '#804892',
              textAlign: 'center',
            }}>
            Notifications
          </Text>
        </View>

        <View
          style={{
            width: Dimensions.get('screen').width - 20,
            height: Dimensions.get('screen').height / 7.5,
            borderRadius: 20,
            backgroundColor: '#FFF',
            elevation: 7,
            shadowColor: '#000000',
            flexDirection: 'row',
            marginHorizontal: 10,
            marginTop: 40,
            marginVertical: 10,
          }}>
          <TouchableOpacity
            style={{
              width: Dimensions.get('screen').width - 250,
              height: Dimensions.get('screen').height / 7.5,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              backgroundColor: '#FFF',
              flexDirection: 'row',
              elevation: 7,
              shadowColor: '#000000',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                width: Dimensions.get('screen').width - 300,
                height: Dimensions.get('screen').height / 10,
              }}
              source={require('../assets/images/notif.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: Dimensions.get('screen').width - 130,
              height: Dimensions.get('screen').height / 7.5,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              backgroundColor: '#FFF',
              elevation: 7,
              shadowColor: '#000000',
            }}>
            <View style={{ paddingHorizontal: 8 }}>
              <Text
                style={{
                  fontFamily: 'MontserratSemiBold',
                  fontSize: 18,
                  color: '#804892',
                  paddingVertical: 2,
                }}>
                Pembaruan Account
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'MontserratRegular',
                  color: '#00000',
                  paddingVertical: 2,
                }}>
                Segera perbarui akun anda untuk keamanan!
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#FFF" barStyle="light-content" />
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            navigation.navigate('dashboard');
          }}>
          <Ionicons
            name="home"
            size={28}
            color="rgba(128, 72, 146, 0.5)"
            style={{ position: 'absolute' }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            navigation.navigate('menu');
          }}>
          <Ionicons
            name="restaurant"
            size={28}
            color="rgba(128, 72, 146, 0.5)"
            style={{ position: 'absolute' }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            navigation.navigate('user');
          }}>
          <Ionicons
            name="person"
            size={28}
            color="rgba(128, 72, 146, 0.5)"
            style={{ position: 'absolute' }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            navigation.navigate('quiz');
          }}>
          <Ionicons
            name="duplicate"
            size={28}
            color="#804892"
            style={{ position: 'absolute' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    textAlign: 'center',
    backgroundColor: '#fff',
    height: Dimensions.get('screen').height / 5,
    top: 0,
    right: 0,
    left: 0,
    marginTop: 0,
    elevation: 30,
    shadowColor: '#000000',
    justifyContent: 'flex-end',
    // borderBottomWidth: 1,
    // borderBottomColor: '#F1F1F1',
  },
  navbar: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 60,
    paddingHorizontal: 50,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000000',
    shadowOpacity: 4,
    shadowOffset: { width: 0, height: 70 },
    elevation: 40,
  },
  buttons: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Notifikasi;
