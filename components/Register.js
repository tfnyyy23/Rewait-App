import react from 'react';
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { Component } from 'react';
import axios from 'axios';
import { CommonActions } from '@react-navigation/native';

const widthBtn = Dimensions.get('screen').width - 50;
export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Username: '',
      Password: '',
    };
  }

  Registerapp = async () => {
    const { Email, Username, Password } = this.state;
    console.log('register', Email, Username, Password);

    let data = {
      email: Email,
      username: Username,
      password: Password,
    };

    console.log(
      'http://www.rewait.my.id/rewaitapp/api/user_rewait/register',
      data
    );
    axios({
      method: 'POST',
      url: 'http://www.rewait.my.id/rewaitapp/api/user_rewait/register',
      data: data,
    })
      .then(async (back) => {
        console.log('hello', back.data);
        if (back.data.message === 'register berhasil.') {
          await AsyncStorage.setItem('users', JSON.stringify(back.data));
          this.props.navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                {
                  name: 'login',
                },
              ],
            })
          );
          ToastAndroid.show(back.data.message, ToastAndroid.SHORT);
          this.setState({ Email: '', Username: '', Password: '' });
        } else {
          Alert.alert('Gagal', back.data.data.message);
        }
      })
      .catch((error) => {
        console.log('error', JSON.stringify(error));
      });
  };

  SetEmail = (email) => {
    this.setState({ Email: email });
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
        <BodyRegister
          navigation={this.props.navigation}
          SetEmail={(email) => {
            this.SetEmail(email);
          }}
          SetUsername={(username) => {
            this.SetUsername(username);
          }}
          SetPassword={(pass) => {
            this.SetPassword(pass);
          }}
          Registerapp={() => {
            this.Registerapp();
          }}
          Email={this.state.Email}
          Username={this.state.Username}
          Password={this.state.Password}></BodyRegister>
      </ScrollView>
    );
  }
}

const BodyRegister = ({
  navigation,
  Registerapp,
  Email,
  Username,
  Password,
  SetEmail,
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
        Register
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
        Email
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionicons name="mail" size={25} color="#9164AB" />
        <TextInput
          style={{
            fontFamily: 'MontserratRegular',
            padding: 8,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: '#9164AB',
            width: Dimensions.get('screen').width - 80,
          }}
          placeholder="Email"
          placeholderTextColor="#A183C8"
          value={Email}
          onChangeText={(text) => {
            SetEmail(text);
          }}></TextInput>
      </View>

      <View style={{ marginVertical: 10 }}>
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

      <View style={{ marginVertical: 10 }}>
        <Text
          style={{
            color: '#9164AB',
            fontSize: 16,
            fontFamily: 'MontserratSemiBold',
            marginHorizontal: 70,
          }}>
          Confirm Password
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialIcons name="verified-user" size={25} color="#9164AB" />
          <TextInput
            style={{
              fontFamily: 'MontserratRegular',
              padding: 8,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: '#9164AB',
              width: Dimensions.get('screen').width - 80,
            }}
            placeholder="Confirm Password"
            placeholderTextColor="#A183C8"
            secureTextEntry></TextInput>
        </View>
      </View>

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
            marginTop: 150,
          }}
          onPress={() => {
            Registerapp();
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
            Register
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
            have an Account?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('login');
            }}>
            <Text
              style={{
                fontFamily: 'MontserratMedium',
                color: '#9164AB',
                fontSize: 12,
                marginLeft: 2,
              }}>
              Logins
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

export default Register;
