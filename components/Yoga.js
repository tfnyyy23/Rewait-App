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

const Yoga = ({ navigation }) => {
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
            source={require('../assets/images/yoga3.png')}
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
            Yoga
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
                  Konsentrasi
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
                  Focus
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
                Morning
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
              Secara etimologi, kata “yoga” berasal dari bahasa Sansekerta Kuno
              yakni “yuj” yang berarti penyatuan; lebih mengarah pada penyatuan
              atman (diri) dan brahman (Yang Maha Kuasa), sehingga melalui ini
              maka seseorang akan lebih baik dalam mengenal tubuh, pikiran,
              jiwa, dan keseluruhan aspek yang ada pada dirinya serta dapat
              membuatnya semakin dekat dengan Sang Pencipta. Singkatnya, yoga
              adalah jenis olahraga yang bertujuan untuk meningkatkan kesehatan
              dan kesejahteraan tubuh, dengan melibatkan aktivitas fisik,
              latihan pernapasan, teknik relaksasi, dan latihan meditasi.
              Meskipun disebut sebagai salah satu jenis olahraga, tetapi
              gerakannya tidak lantas meloncat atau berlari seperti layaknya
              olahraga atletik kebanyakan. Dalam olahraga ini, gerakannya lebih
              condong pada pengendalian nafas, konsentrasi pikiran, dan
              pengendalian diri. Apalagi di zaman seperti sekarang ini, banyak
              orang yang hidup dalam keadaan iri, dengki, dan marah atas keadaan
              yang ada. Nah, praktik ini dinilai mampu menjadi alternatif bagi
              mereka yang berperilaku demikian supaya pikirannya dapat menjadi
              lebih jernih.
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

export default Yoga;
