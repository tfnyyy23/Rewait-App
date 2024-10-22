import * as React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { useFonts } from 'expo-font';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Protein = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat/static/Montserrat-ExtraBold.ttf'),
    MontserratSemiBold: require('../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf'),
    MontserratMedium: require('../assets/fonts/Montserrat/static/Montserrat-Medium.ttf'),
    MontserratBold: require('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf'),
    MontserratRegular: require('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView
        style={{
          backgroundColor: '#fff',
        }}>
        <View style={styles.container2}>
          <ImageBackground
            source={require('../assets/images/protein-hewani.png')}
            style={{
              height: Dimensions.get('screen').height / 2.5,
              resizeMode: 'cover',
            }}>
            <View style={styles.container}>
              <TouchableOpacity style={styles.button}>
                <Ionicons name="heart" size={28} color="#804892" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.navigate('notifikasi');
                }}>
                <Ionicons
                  name="notifications"
                  size={28}
                  color="#804892"
                  style={{
                    elevation: 20,
                    shadowColor: '#000000',
                  }}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
          }}>
          <Text
            style={{
              fontFamily: 'MontserratBold',
              fontSize: 24,
              marginVertical: 10,
              marginHorizontal: 10,
            }}>
            Protein Hewani
          </Text>

          <View>
            <View
              style={{
                // width: Dimensions.get('screen').width - 220,
                // height: Dimensions.get('screen').height / 42,
                flexDirection: 'row',
                marginVertical: 5,
                marginHorizontal: 10,
              }}>
              <TouchableOpacity
                style={{
                  width: Dimensions.get('screen').width - 270,
                  height: Dimensions.get('screen').height / 30,
                  backgroundColor: '#A183C8',
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'MontserratRegular',
                    fontSize: 12,
                    color: '#ffffff',
                  }}>
                  Menu Sehat
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: Dimensions.get('screen').width - 280,
                  height: Dimensions.get('screen').height / 30,
                  backgroundColor: '#A183C8',
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontFamily: 'MontserratRegular',
                    fontSize: 12,
                    color: '#ffffff',
                  }}>
                  Body
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                width: Dimensions.get('screen').width - 280,
                height: Dimensions.get('screen').height / 30,
                backgroundColor: '#A183C8',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 10,
                marginVertical: 3,
              }}>
              <Text
                style={{
                  fontFamily: 'MontserratRegular',
                  fontSize: 12,
                  color: '#ffffff',
                }}>
                Healthy
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              marginHorizontal: 20,
              padding: 20,
              marginBottom: 100,
              marginVertical: 20,
              textAlign: 'justify',
              elevation: 20.5,
              shadowColor: '#000000',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'MontserratMedium',
                color: '#804892',
                marginHorizontal: 5,
                textAlign: 'justify',
              }}>
              Protein hewani adalah protein yang berasal dari hewan, meliputi
              daging sapi, daging kambing, daging ayam, daging bebek, seafood,
              serta telur. Keunggulan protein hewani adalah memiliki komposisi
              asam amino esensial lebih lengkap dibandingkan protein nabati.
              Selain itu protein hewani juga kaya akan mikronutrien seperti
              vitamin B12, vitamin D, DHA (docosahexaenoic acid), zat besi, dan
              zink. Mikronutrien tersebut memiliki peran penting bagi tubuh,
              yaitu: Vitamin B12 berperan untuk menjaga kesehatan saraf dan otak
              serta pembentukan sel darah merah. Vitamin D berperan dalam
              penyerapan kalsium dan sistem kekebalan tubuh. DHA memiliki peran
              kesehatan pada otak anak Zat besi yang berperan untuk mengangkut
              oksigen dari paru-paru ke jaringan dan meningkatkan sistem imun
              tubuh Zink berperan dalam mendukung system imun tubuh, masa
              pemulihan, dan baik untuk pencernaan
            </Text>
          </View>
        </View>
      </ScrollView>

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
            color="rgba(128, 72, 146, 0.5)"
            style={{ position: 'absolute' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: Dimensions.get('screen').height / 14,
    paddingHorizontal: 10,
    marginVertical: 30,
    // borderBottomWidth: 1,
    // borderBottomColor: '#f1f1f1',
  },
  container2: {
    textAlign: 'center',
    backgroundColor: '#fff',
    height: Dimensions.get('screen').height / 2.5,
    top: 0,
    right: 0,
    left: 0,
    elevation: 30,
    shadowColor: '#000000',
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
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttons: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Protein;
