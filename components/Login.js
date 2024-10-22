import {
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Alert,
  ScrollView,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import React, { Component } from 'react';
import axios from 'axios';
import { CommonActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';

const widthBtn = Dimensions.get('screen').width - 50;
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      Password: '',
    };
  }

  Loginapp = async () => {
    const { Username, Password } = this.state;
    console.log('login', Username, Password);

    // let [fontsLoaded] = useFonts({
    //   Montserrat: Font.loadAsync({
    //     'Montserrat': require('../assets/fonts/Montserrat/static/Montserrat-ExtraBold.ttf'),
    //     'MontserratSemiBold': require('../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf'),
    //     'MontserratMedium': require('../assets/fonts/Montserrat/static/Montserrat-Medium.ttf'),
    //     'MontserratBold': require('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf'),
    //     'MontserratRegular': require('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf')
    //   }),
    // });

    // if (!fontsLoaded) {
    //   return <Text>Loading...</Text>;
    // }

    let data = {
      username: Username,
      password: Password,
    };

    console.log(
      'http://www.rewait.my.id/rewaitapp/api/user_rewait/login',
      data
    );
    axios({
      method: 'POST',
      url: 'http://www.rewait.my.id/rewaitapp/api/user_rewait/login',
      data: data,
    })
      .then(async (back) => {
        console.log('hello', back.data);
        if (back.data.message === 'login berhasil') {
          await AsyncStorage.setItem('users', JSON.stringify(back.data));
          this.props.navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                {
                  name: 'dashboard',
                },
              ],
            })
          );
          ToastAndroid.show(back.data.message, ToastAndroid.SHORT);
          this.setState({ Username: '', Password: '' });
        } else {
          ToastAndroid.show(
            'Username or password is incorrect',
            ToastAndroid.SHORT
          );
        }
      })
      .catch((error) => {
        console.log('error', JSON.stringify(error));
      });
  };

  SetUsername = (username) => {
    this.setState({ Username: username });
  };

  SetPassword = (pass) => {
    this.setState({ Password: pass });
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#FFF' }}>
        <StatusBar barStyle="light-content" backgroundColor="#FFF" />
        <BodyLogin
          navigation={this.props.navigation}
          SetUsername={(username) => {
            this.SetUsername(username);
          }}
          SetPassword={(pass) => {
            this.SetPassword(pass);
          }}
          Loginapp={() => {
            this.Loginapp();
          }}
          Username={this.state.Username}
          Password={this.state.Password}></BodyLogin>
      </ScrollView>
    );
  }
}

const BodyLogin = ({
  navigation,
  Loginapp,
  Username,
  Password,
  SetUsername,
  SetPassword,
}) => (
  <View style={{ flex: 1 }}>
    <View style={{ alignItems: 'center' }}>
      <Image
        source={require('../assets/images/logo-rewait.png')}
        style={{
          marginTop: 100,
          width: Dimensions.get('screen').width / 5,
          height: Dimensions.get('screen').height / 16,
          justifyContent: 'center',
        }}></Image>
    </View>

    <View>
      <Text
        style={{
          fontFamily: 'MontserratExtraBold',
          marginTop: 40,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#2D033B',
          fontSize: 30,
        }}>
        Login
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

    <View style={{ marginVertical: 20 }}>
      <Text
        style={{
          color: '#9164AB',
          fontSize: 16,
          fontFamily: 'MontserratSemiBold',
          marginHorizontal: 70,
        }}>
        Username
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionicons name="person" size={25} color="#9164AB" />
        <TextInput
          style={{
            fontFamily: 'MontserratRegular',
            padding: 8,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: '#9164AB',
            width: Dimensions.get('screen').width - 80,
          }}
          placeholder="Username"
          placeholderTextColor="#A183C8"
          value={Username}
          onChangeText={(text) => {
            SetUsername(text);
          }}></TextInput>
      </View>
    </View>

    <View style={{ marginVertical: 3 }}>
      <Text
        style={{
          color: '#9164AB',
          fontSize: 16,
          fontFamily: 'MontserratSemiBold',
          marginHorizontal: 70,
        }}>
        Password
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionicons name="lock-closed" size={25} color="#9164AB" />
        <TextInput
          style={{
            fontFamily: 'MontserratRegular',
            padding: 8,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: '#9164AB',
            width: Dimensions.get('screen').width - 80,
          }}
          placeholder="Password"
          placeholderTextColor="#A183C8"
          secureTextEntry
          value={Password}
          onChangeText={(text) => {
            SetPassword(text);
          }}></TextInput>
      </View>
    </View>

    <TouchableOpacity
      onPress={() => {
        navigation.navigate('');
      }}>
      <Text
        style={{
          color: '#9164AB',
          fontSize: 12,
          marginLeft: 200,
          fontFamily: 'MontserratMedium',
        }}>
        Forgot Password ?
      </Text>
    </TouchableOpacity>

    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#9164AB',
          padding: 14,
          width: Dimensions.get('screen').width / 3,
          borderRadius: 50,
          marginTop: 200,
        }}
        onPress={() => {
          Loginapp();
        }}>
        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
          Login
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 6,
        }}>
        <Text
          style={{
            fontFamily: 'MontserratMedium',
            color: '#000000',
            fontSize: 12,
          }}>
          {' '}
          Do not have an Account?{' '}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('register');
          }}>
          <Text
            style={{
              fontFamily: 'MontserratMedium',
              color: '#9164AB',
              fontSize: 12,
              marginLeft: 2,
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default Login;
