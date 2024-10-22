import {
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Alert,
} from 'react-native';
import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { CommonActions } from '@react-navigation/native';

export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email: '',
      password: '',
    };
  }

  UNSAFE_componentWillMount = async () => {
    const value = await AsyncStorage.getItem('users');
    let Account = JSON.parse(value);
    let user = Account.data.username;
    this.setState({
      user: Account.data.username,
      email: Account.data.email,
      password: Account.data.password,
    });
    console.log('nama user', user);
  };

  render() {
    const { user, email, password } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFF' }}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('login');
            }}>
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

        <View
          style={{
            marginTop: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={130}
              color="rgba(128, 72, 146, 0.5)"
            />
          </TouchableOpacity>

          <View
            style={{
              justifyContent: 'flex-start',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 22,
                textAlign: 'center',
                fontFamily: 'MontserratSemiBold',
                marginVertical: 3,
                marginTop: 10,
              }}>
              {user}
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#804892',
                fontSize: 20,
                textAlign: 'center',
                fontFamily: 'MontserratSemiBold',
              }}>
              {email}
            </Text>
          </View>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(128, 72, 146, 0.5)',
              padding: 18,
              width: Dimensions.get('screen').width / 2,
              borderRadius: 30,
              marginTop: 130,
              flexDirection: 'row',
            }}
            onPress={() => {
              Alert.alert('Confirmation', 'Are you sure you want to log out?', [
                {
                  text: 'Yes',
                  style: 'default',
                  onPress: () => {
                    // return console.log('hallo')
                    AsyncStorage.setItem('users', JSON.stringify({}));
                    navigation.dispatch(
                      CommonActions.reset({
                        index: 0,
                        routes: [
                          {
                            name: 'login',
                          },
                        ],
                      })
                    );
                  },
                },
                {
                  text: 'No',
                  style: 'cancel',
                },
              ]);
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: 'white',
                fontFamily: 'MontserratBold',
              }}>
              Log out
            </Text>
            <View
              style={{
                backgroundColor: '#FFF',
                width: 40,
                height: 30,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 30,
              }}>
              <Ionicons name="log-out-outline" size={30} color="#9164AB" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(128, 72, 146, 0.5)',
              padding: 18,
              width: Dimensions.get('screen').width / 2,
              borderRadius: 30,
              marginTop: 10,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: 'white',
                fontFamily: 'MontserratBold',
              }}>
              Tentang kami
            </Text>
            <View
              style={{
                backgroundColor: '#FFF',
                width: 40,
                height: 30,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 7,
              }}>
              <Ionicons
                name="information-circle-outline"
                size={30}
                color="#9164AB"
              />
            </View>
          </TouchableOpacity>
        </View>
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
              color="#804892"
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
  }
}

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
});
export default User;
