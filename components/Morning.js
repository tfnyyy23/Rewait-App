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
import { useState } from 'react';

function Icon() {
  const [heartIcon, setHeartIcon] = useState('heart-outline');

  return (
    <TouchableOpacity
      onPress={() =>
        setHeartIcon(heartIcon === 'heart-outline' ? 'heart' : 'heart-outline')
      }
      style={{ marginLeft: 180 }}>
      <Ionicons name={heartIcon} size={22} color="#804892" />
    </TouchableOpacity>
  );
}

const Morning = ({ navigation }) => {
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
          <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="heart" size={28} color="#804892" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('notifikasi');
              }}>
              <Ionicons name="notifications" size={28} color="#804892" />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontFamily: 'MontserratBold',
              fontSize: 24,
              color: '#804892',
              textAlign: 'center',
            }}>
            Morning Activity
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
            onPress={() => {
              navigation.navigate('yoga');
            }}
            style={{
              width: Dimensions.get('screen').width - 250,
              height: Dimensions.get('screen').height / 7.5,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              backgroundColor: '#FF1',
              flexDirection: 'row',
              elevation: 7,
              shadowColor: '#000000',
            }}>
            <Image
              style={{
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                width: Dimensions.get('screen').width - 250,
                height: Dimensions.get('screen').height / 7.5,
              }}
              source={require('../assets/images/yoga2.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('yoga');
            }}
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
                Yoga
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'MontserratRegular',
                  color: '#00000',
                  paddingVertical: 2,
                }}>
                Secara etimologi, kata “yoga” berasal dari bahasa Sansekerta
                Kuno yakni “yuj”
              </Text>
              <Icon />
            </View>
          </TouchableOpacity>
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
            marginVertical: 10,
            marginTop: 8,
          }}>
          <TouchableOpacity
            style={{
              width: Dimensions.get('screen').width - 250,
              height: Dimensions.get('screen').height / 7.5,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              backgroundColor: '#FF1',
              flexDirection: 'row',
              elevation: 7,
              shadowColor: '#000000',
            }}>
            <Image
              style={{
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                width: Dimensions.get('screen').width - 250,
                height: Dimensions.get('screen').height / 7.5,
              }}
              source={require('../assets/images/senam-lantai2.jpg')}
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
                Senam Lantai
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'MontserratRegular',
                  color: '#00000',
                  paddingVertical: 2,
                }}>
                Senam lantai mengutamakan keseimbangan, kekuatan, kelenturan,
                dan keluwesan.
              </Text>
              <Icon />
            </View>
          </TouchableOpacity>
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
            marginVertical: 10,
            marginTop: 8,
          }}>
          <TouchableOpacity
            style={{
              width: Dimensions.get('screen').width - 250,
              height: Dimensions.get('screen').height / 7.5,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              backgroundColor: '#FF1',
              flexDirection: 'row',
              elevation: 7,
              shadowColor: '#000000',
            }}>
            <Image
              style={{
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                width: Dimensions.get('screen').width - 250,
                height: Dimensions.get('screen').height / 7.5,
              }}
              source={require('../assets/images/zumba2.jpg')}
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
                Zumba
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'MontserratRegular',
                  color: '#00000',
                  paddingVertical: 2,
                }}>
                Zumba adalah olahraga Aerobik, karena gerakannya sebagian
                berasal dari gerakan Aerobik.
              </Text>
              <Icon />
            </View>
          </TouchableOpacity>
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
            marginVertical: 10,
            marginTop: 8,
          }}>
          <TouchableOpacity
            style={{
              width: Dimensions.get('screen').width - 250,
              height: Dimensions.get('screen').height / 7.5,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              backgroundColor: '#FF1',
              flexDirection: 'row',
              elevation: 7,
              shadowColor: '#000000',
            }}>
            <Image
              style={{
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                width: Dimensions.get('screen').width - 250,
                height: Dimensions.get('screen').height / 7.5,
              }}
              source={require('../assets/images/jogging2.jpg')}
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
                Jogging
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'MontserratRegular',
                  color: '#00000',
                  paddingVertical: 2,
                }}>
                Lari jogging merupakan berlari dengan kecepatan lambat atau
                santai.
              </Text>
              <Icon />
            </View>
          </TouchableOpacity>
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
            marginVertical: 10,
            marginTop: 8,
            marginBottom: 100,
          }}>
          <TouchableOpacity
            style={{
              width: Dimensions.get('screen').width - 250,
              height: Dimensions.get('screen').height / 7.5,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              backgroundColor: '#FF1',
              flexDirection: 'row',
              elevation: 7,
              shadowColor: '#000000',
            }}>
            <Image
              style={{
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                width: Dimensions.get('screen').width - 250,
                height: Dimensions.get('screen').height / 7.5,
              }}
              source={require('../assets/images/senam2.jpg')}
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
                Senam Irama
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'MontserratRegular',
                  color: '#00000',
                  paddingVertical: 2,
                }}>
                Senam irama memiliki bermacam gerakan dan dilakukan seirama
                dengan musik yang mengiringinya.
              </Text>
              <Icon />
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
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: Dimensions.get('screen').height / 14,
    paddingHorizontal: 10,
    marginVertical: 30,
    // borderBottomWidth: 1,
    // borderBottomColor: '#f1f1f1',
  },
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

export default Morning;
