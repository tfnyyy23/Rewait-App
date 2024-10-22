import {
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, { Component } from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { useFonts } from 'expo-font';

const widthimage = Dimensions.get('screen').width - 60;

export class DetailQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Nilai = this.props.route.params;
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ ...styles.container2, ...styles.shadow }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('quiz');
            }}
            style={styles.button2}>
            <Ionicons name="chevron-back-outline" size={30} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView style={{ backgroundColor: '#804892' }}>
          <View
            style={{
              width: Dimensions.get('screen').width - 30,
              height: Dimensions.get('screen').height / 2,
              borderRadius: 20,
              backgroundColor: '#FFF',
              borderWidth: 1.5,
              borderColor: '#F1F1F1',
              elevation: 5,
              marginLeft: 15,
              marginVertical: 20,
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: Dimensions.get('screen').width - 50,
                height: Dimensions.get('screen').height / 4,
                marginVertical: 10,
                borderRadius: 5,
              }}
              source={require('../assets/images/quiz.png')}
            />

            <Text
              style={{
                fontFamily: 'MontserratBold',
                fontSize: 32,
                color: '#000000',
                textAlign: 'center',
                paddingVertical: 4,
              }}>
              Nilai Kamu ✨
            </Text>
            <Text
              style={{
                fontFamily: 'MontserratBold',
                fontSize: 32,
                color: '#000000',
                textAlign: 'center',
                paddingVertical: 4,
              }}>
              {Nilai}
            </Text>
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('quiz');
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                padding: 14,
                width: Dimensions.get('screen').width / 3,
                borderRadius: 50,
                marginTop: 100,
              }}>
              <Text
                style={{ fontWeight: 'bold', fontSize: 15, color: '#804892' }}>
                Tutup
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#804892',
    height: 100,
    paddingHorizontal: 20,
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.75,
    shadowRadius: 20,
    elevation: 20,
  },
});
export default DetailQuiz;
