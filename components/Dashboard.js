import react from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useFonts } from 'expo-font';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Dashboard = ({ navigation }) => {
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
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            // onPress={() => {
            //   navigation.navigate('login');
            // }}
          >
            <Ionicons name="heart" size={28} color="#804892" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('notifikasi');
            }}
          >
            <Ionicons name="notifications" size={28} color="#804892" />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontFamily: 'Montserrat',
              fontSize: 24,
              color: 'black',
              textAlign: 'left',
              marginLeft: 20,
            }}>
            Mindfulness for
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat',
              fontSize: 24,
              color: 'black',
              textAlign: 'left',
              marginLeft: 20,
            }}>
            a better you
          </Text>
        </View>

        <View style={styles.search}>
          <Ionicons
            name="search"
            size={28}
            color="#804892"
            style={{ paddingVertical: 4 }}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#A183C8"
            style={{
              paddingHorizontal: 5,
              paddingVertical: 2,
              width: 260,
              fontFamily: 'MontserratMedium',
              fontSize: 16,
              color: '#A183C8',
            }}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontFamily: 'MontserratMedium',
              fontSize: 16,
              color: '#B6B6B6',
              textAlign: 'left',
              marginLeft: 20,
            }}>
            Popular Activity
          </Text>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 15, marginLeft: 20 }}>
          <View
            style={{
              width: Dimensions.get('screen').width - 220,
              height: Dimensions.get('screen').height / 4.5,
              backgroundColor: '#fff',
              borderRadius: 20,
              marginRight: 13,
            }}>
            <TouchableOpacity
              style={{
                width: Dimensions.get('screen').width - 220,
                height: Dimensions.get('screen').height / 4.5,
                borderRadius: 20,
              }}>
              <Image
                style={{
                  width: Dimensions.get('screen').width - 220,
                  height: Dimensions.get('screen').height / 4.5,
                  borderRadius: 20,
                }}
                source={require('../assets/images/jogging1.png')}
              />
              <Text
                style={{
                  fontFamily: 'MontserratSemiBold',
                  fontSize: 14,
                  color: 'white',
                  position: 'absolute',
                  marginHorizontal: 10,
                  marginVertical: 60,
                }}>
                Jogging
              </Text>
              <Text
                style={{
                  fontFamily: 'MontserratRegular',
                  fontSize: 9,
                  color: 'white',
                  position: 'absolute',
                  marginHorizontal: 10,
                  marginVertical: 80,
                }}>
                Jogging merupakan latihan kardiovaskular dan bagus untuk
                kesehatan jantung
              </Text>
              <View
                style={{
                  position: 'absolute',
                  width: Dimensions.get('screen').width - 220,
                  height: Dimensions.get('screen').height / 42,
                  flexDirection: 'row',
                  marginVertical: 130,
                  marginHorizontal: 10,
                }}>
                <TouchableOpacity
                  style={{
                    width: Dimensions.get('screen').width - 310,
                    height: Dimensions.get('screen').height / 44,
                    backgroundColor: '#A183C8',
                    position: 'absolute',
                    borderRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'MontserratRegular',
                      fontSize: 8,
                      color: '#ffffff',
                    }}>
                    Konsentrasi
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: Dimensions.get('screen').width - 320,
                    height: Dimensions.get('screen').height / 44,
                    backgroundColor: '#A183C8',
                    position: 'absolute',
                    borderRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 60,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'MontserratRegular',
                      fontSize: 8,
                      color: '#ffffff',
                    }}>
                    Focus
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  width: Dimensions.get('screen').width - 320,
                  height: Dimensions.get('screen').height / 44,
                  backgroundColor: '#A183C8',
                  position: 'absolute',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 10,
                  marginVertical: 153,
                }}>
                <Text
                  style={{
                    fontFamily: 'MontserratRegular',
                    fontSize: 8,
                    color: '#ffffff',
                  }}>
                  Morning
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: Dimensions.get('screen').width - 220,
              height: Dimensions.get('screen').height / 4.5,
              backgroundColor: '#fff',
              borderRadius: 20,
              marginRight: 13,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('yoga');
              }}
              style={{
                width: Dimensions.get('screen').width - 220,
                height: Dimensions.get('screen').height / 4.5,
                borderRadius: 20,
              }}>
              <Image
                style={{
                  width: Dimensions.get('screen').width - 220,
                  height: Dimensions.get('screen').height / 4.5,
                  borderRadius: 20,
                }}
                source={require('../assets/images/yoga.png')}
              />
              <Text
                style={{
                  fontFamily: 'MontserratSemiBold',
                  fontSize: 14,
                  color: 'white',
                  position: 'absolute',
                  marginHorizontal: 10,
                  marginVertical: 60,
                }}>
                Yoga
              </Text>
              <Text
                style={{
                  fontFamily: 'MontserratRegular',
                  fontSize: 9,
                  color: 'white',
                  position: 'absolute',
                  marginHorizontal: 10,
                  marginVertical: 80,
                }}>
                Yoga menjadi kegiatan tepat untuk meredakan stress dan
                kelenturan tubuh
              </Text>
              <View
                style={{
                  position: 'absolute',
                  width: Dimensions.get('screen').width - 220,
                  height: Dimensions.get('screen').height / 42,
                  flexDirection: 'row',
                  marginVertical: 130,
                  marginHorizontal: 10,
                }}>
                <TouchableOpacity
                  style={{
                    width: Dimensions.get('screen').width - 310,
                    height: Dimensions.get('screen').height / 44,
                    backgroundColor: '#A183C8',
                    position: 'absolute',
                    borderRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'MontserratRegular',
                      fontSize: 8,
                      color: '#ffffff',
                    }}>
                    Konsentrasi
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: Dimensions.get('screen').width - 320,
                    height: Dimensions.get('screen').height / 44,
                    backgroundColor: '#A183C8',
                    position: 'absolute',
                    borderRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 60,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'MontserratRegular',
                      fontSize: 8,
                      color: '#ffffff',
                    }}>
                    Focus
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  width: Dimensions.get('screen').width - 320,
                  height: Dimensions.get('screen').height / 44,
                  backgroundColor: '#A183C8',
                  position: 'absolute',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 10,
                  marginVertical: 153,
                }}>
                <Text
                  style={{
                    fontFamily: 'MontserratRegular',
                    fontSize: 8,
                    color: '#ffffff',
                  }}>
                  Morning
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: Dimensions.get('screen').width - 220,
              height: Dimensions.get('screen').height / 4.5,
              backgroundColor: '#fff',
              borderRadius: 20,
              marginRight: 13,
            }}>
            <TouchableOpacity
              style={{
                width: Dimensions.get('screen').width - 220,
                height: Dimensions.get('screen').height / 4.5,
                borderRadius: 20,
              }}>
              <Image
                style={{
                  width: Dimensions.get('screen').width - 220,
                  height: Dimensions.get('screen').height / 4.5,
                  borderRadius: 20,
                }}
                source={require('../assets/images/olahraga.png')}
              />
              <Text
                style={{
                  fontFamily: 'MontserratSemiBold',
                  fontSize: 14,
                  color: 'white',
                  position: 'absolute',
                  marginHorizontal: 10,
                  marginVertical: 60,
                }}>
                Senam Lantai
              </Text>
              <Text
                style={{
                  fontFamily: 'MontserratRegular',
                  fontSize: 9,
                  color: 'white',
                  position: 'absolute',
                  marginHorizontal: 10,
                  marginVertical: 80,
                }}>
                Melatih fokus dan konsentrasi dengan gerakan-gerakan yang
                tersistematis
              </Text>
              <View
                style={{
                  position: 'absolute',
                  width: Dimensions.get('screen').width - 220,
                  height: Dimensions.get('screen').height / 42,
                  flexDirection: 'row',
                  marginVertical: 130,
                  marginHorizontal: 10,
                }}>
                <TouchableOpacity
                  style={{
                    width: Dimensions.get('screen').width - 310,
                    height: Dimensions.get('screen').height / 44,
                    backgroundColor: '#A183C8',
                    position: 'absolute',
                    borderRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'MontserratRegular',
                      fontSize: 8,
                      color: '#ffffff',
                    }}>
                    Konsentrasi
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: Dimensions.get('screen').width - 320,
                    height: Dimensions.get('screen').height / 44,
                    backgroundColor: '#A183C8',
                    position: 'absolute',
                    borderRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 60,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'MontserratRegular',
                      fontSize: 8,
                      color: '#ffffff',
                    }}>
                    Focus
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  width: Dimensions.get('screen').width - 320,
                  height: Dimensions.get('screen').height / 44,
                  backgroundColor: '#A183C8',
                  position: 'absolute',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 10,
                  marginVertical: 153,
                }}>
                <Text
                  style={{
                    fontFamily: 'MontserratRegular',
                    fontSize: 8,
                    color: '#ffffff',
                  }}>
                  Morning
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: Dimensions.get('screen').width - 220,
              height: Dimensions.get('screen').height / 4.5,
              backgroundColor: '#fff',
              borderRadius: 20,
              marginRight: 13,
            }}>
            <TouchableOpacity
              style={{
                width: Dimensions.get('screen').width - 220,
                height: Dimensions.get('screen').height / 4.5,
                borderRadius: 20,
              }}>
              <Image
                style={{
                  width: Dimensions.get('screen').width - 220,
                  height: Dimensions.get('screen').height / 4.5,
                  borderRadius: 20,
                }}
                source={require('../assets/images/zumba.png')}
              />
              <Text
                style={{
                  fontFamily: 'MontserratSemiBold',
                  fontSize: 14,
                  color: 'white',
                  position: 'absolute',
                  marginHorizontal: 10,
                  marginVertical: 60,
                }}>
                Zumba
              </Text>
              <Text
                style={{
                  fontFamily: 'MontserratRegular',
                  fontSize: 9,
                  color: 'white',
                  position: 'absolute',
                  marginHorizontal: 10,
                  marginVertical: 80,
                }}>
                Senam zumba olahraga aerobik yang cukup digemari kalangan
                perempuan
              </Text>
              <View
                style={{
                  position: 'absolute',
                  width: Dimensions.get('screen').width - 220,
                  height: Dimensions.get('screen').height / 42,
                  flexDirection: 'row',
                  marginVertical: 130,
                  marginHorizontal: 10,
                }}>
                <TouchableOpacity
                  style={{
                    width: Dimensions.get('screen').width - 310,
                    height: Dimensions.get('screen').height / 44,
                    backgroundColor: '#A183C8',
                    position: 'absolute',
                    borderRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'MontserratRegular',
                      fontSize: 8,
                      color: '#ffffff',
                    }}>
                    Konsentrasi
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: Dimensions.get('screen').width - 320,
                    height: Dimensions.get('screen').height / 44,
                    backgroundColor: '#A183C8',
                    position: 'absolute',
                    borderRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 60,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'MontserratRegular',
                      fontSize: 8,
                      color: '#ffffff',
                    }}>
                    Focus
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  width: Dimensions.get('screen').width - 320,
                  height: Dimensions.get('screen').height / 44,
                  backgroundColor: '#A183C8',
                  position: 'absolute',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 10,
                  marginVertical: 153,
                }}>
                <Text
                  style={{
                    fontFamily: 'MontserratRegular',
                    fontSize: 8,
                    color: '#ffffff',
                  }}>
                  Morning
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontFamily: 'MontserratMedium',
              fontSize: 16,
              color: '#B6B6B6',
              textAlign: 'left',
              marginLeft: 20,
            }}>
            Activity
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#EFED98',
            width: Dimensions.get('screen').width - 40,
            height: Dimensions.get('screen').height / 5.5,
            borderRadius: 20,
            marginTop: 10,
            marginLeft: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('morning');
            }}
            style={{
              backgroundColor: '#EFED98',
              width: Dimensions.get('screen').width - 40,
              height: Dimensions.get('screen').height / 5.5,
              borderRadius: 20,
            }}>
            <Image
              style={{
                borderRadius: 20,
                width: Dimensions.get('screen').width - 40,
                height: Dimensions.get('screen').height / 5.5,
              }}
              source={require('../assets/images/pagi.png')}
            />
            <Text
              style={{
                fontFamily: 'MontserratBold',
                fontSize: 20,
                color: '#1E8943',
                textAlign: 'left',
                paddingHorizontal: 20,
                paddingVertical: 20,
                position: 'absolute',
              }}>
              Morning Activity
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: '#804892',
            width: Dimensions.get('screen').width - 40,
            height: Dimensions.get('screen').height / 5.5,
            borderRadius: 20,
            marginTop: 20,
            marginLeft: 20,
            marginVertical: 100,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('night');
            }}
            style={{
              width: Dimensions.get('screen').width - 40,
              height: Dimensions.get('screen').height / 5.5,
              borderRadius: 20,
            }}>
            <Image
              style={{
                borderRadius: 20,
                width: Dimensions.get('screen').width - 40,
                height: Dimensions.get('screen').height / 5.5,
              }}
              source={require('../assets/images/malam.png')}
            />
            <Text
              style={{
                fontFamily: 'MontserratBold',
                fontSize: 20,
                color: '#FFFFFF',
                textAlign: 'left',
                paddingHorizontal: 20,
                paddingVertical: 20,
                position: 'absolute',
              }}>
              Night Activity
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            navigation.navigate('dashboard');
          }}>
          <Ionicons
            name="home"
            size={28}
            color="#804892"
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
    height: Dimensions.get('screen').height / 8,
    paddingHorizontal: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: '#f1f1f1',
    marginTop: 30,
    elevation: 20,
    shadowColor: '#000000',
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
    // borderTopWidth: 1,
    // borderTopColor: '#F1F1F1',
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
  search: {
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#804892',
    borderRadius: 50,
    height: 45,
    paddingHorizontal: 8,
  },
});

export default Dashboard;
