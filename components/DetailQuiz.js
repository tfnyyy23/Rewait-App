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
    this.state = {
      user: '',
      listSoal: [],
      paramsKat: '',
      soal: '',
      num: 0,
      id_soal: '',
      score: 0,
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      nomer: '',
    };
  }

  ambilSoal = () => {
    let quiz = this.state.listSoal[this.state.num].quiz;
    this.setState({ soal: quiz });
    let id = this.state.listSoal[this.state.num].id;
    this.setState({ id_soal: id });
    let answerA = this.state.listSoal[this.state.num].a;
    this.setState({ a: answerA });
    let answerB = this.state.listSoal[this.state.num].b;
    this.setState({ b: answerB });
    let answerC = this.state.listSoal[this.state.num].c;
    this.setState({ c: answerC });
    let answerD = this.state.listSoal[this.state.num].d;
    this.setState({ d: answerD });
    let answerE = this.state.listSoal[this.state.num].e;
    this.setState({ e: answerE });
    let no = this.state.num + 1;
    this.setState({ nomer: no });
  };

  pindahQuiz = (action) => {
    if (action == 'next') {
      const index = this.state.num + 1;
      this.setState({ num: index });
      this.ambilSoal();
    } else {
      null;
    }
  };

  ScoreQuiz = (jawaban) => {
    let data = {
      quizId: this.state.id_soal,
      answer: jawaban,
    };

    console.log(
      'http://www.rewait.my.id/rewaitapp/api/jobsheet_rewait/one',
      data
    );
    axios({
      method: 'POST',
      url: 'http://www.rewait.my.id/rewaitapp/api/jobsheet_rewait/one',
      data: data,
    })
      .then(async (back) => {
        console.log('hello', back.data);
        if (back.data.message === 'benar') {
          ToastAndroid.show(back.data.message, ToastAndroid.SHORT);
          let jumlahscore = this.state.score + 1;
          this.setState({ score: jumlahscore });
        }
        if (this.state.num < this.state.listSoal.length - 1) {
          this.pindahQuiz('next');
        } else {
          let score = Math.round(this.state.score * 20);
          console.log('score', score);
          this.props.navigation.navigate('score', score);
        }
      })
      .catch((error) => {
        console.log('error', JSON.stringify(error));
      });
  };

  UNSAFE_componentWillMount = async () => {
    const Kat = this.props.route.params;
    this.setState({ paramsKat: Kat });
    axios({
      method: 'GET',
      url: 'http://www.rewait.my.id/rewaitapp/api/quiz_rewait/category/' + Kat,
    })
      .then((res) => {
        console.log(JSON.stringify(res.data, null, 2));
        let listSoal = res.data.data.reverse();
        this.setState({ listSoal: res.data.data.reverse() });
        this.ambilSoal();
        console.log('listSoal', listSoal);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  componentDidMount = async () => {
    this.props.navigation.addListener('focus', async () => {
      axios({
        method: 'GET',
        url: 'http://www.rewait.my.id/rewaitapp/api/quiz_rewait/category/1',
      })
        .then((res) => {
          console.log(JSON.stringify(res.data, null, 2));
          let listSoal = res.data.data.reverse();
          this.setState({ listNews: res.data.data.reverse() });
          console.log('listSoal', listSoal);
        })
        .catch((error) => {
          console.log('error', error);
        });
    });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#804892' }}>
        <View style={styles.container2}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              navigation.navigate('quiz');
            }}>
            <Ionicons name="chevron-back-outline" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <ScrollView style={{ backgroundColor: '#804892' }}>
          <StatusBar barStyle="light-content" backgroundColor="#804892" />
          <Soal
            navigation={this.props.navigation}
            Katlogo={this.state.paramsKat}
            nomer={this.state.nomer}
            soal={this.state.soal}
            a={this.state.a}
            b={this.state.b}
            c={this.state.c}
            d={this.state.d}
            e={this.state.e}
            ScoreQuiz={(hello) => {
              this.ScoreQuiz(hello);
            }}></Soal>
        </ScrollView>
      </View>
    );
  }
}

const Soal = ({
  navigation,
  data,
  Katlogo,
  soal,
  ScoreQuiz,
  a,
  b,
  c,
  d,
  e,
  nomer,
}) => (
  <ScrollView
    style={{
      backgroundColor: '#804892',
      alignItems: 'center',
    }}>
    <View
      style={{
        width: Dimensions.get('screen').width - 30,
        borderRadius: 20,
        backgroundColor: '#FFF',
        borderWidth: 1.5,
        borderColor: '#F1F1F1',
        elevation: 5,
        marginVertical: 20,
        alignItems: 'center',
      }}>
      <Image
        style={{
          width: Dimensions.get('screen').width - 50,
          height: Dimensions.get('screen').height / 6,
          marginVertical: 10,
          borderRadius: 5,
        }}
        source={require('../assets/images/quiz.png')}
      />
      <Text
        style={{
          fontFamily: 'MontserratMedium',
          fontSize: 16,
          marginHorizontal: 3,
        }}>
        {soal}
      </Text>
      <TouchableOpacity
        style={{
          width: Dimensions.get('screen').width - 50,
          paddingVertical: 12,
          borderRadius: 20,
          backgroundColor: '#9164AB',
          borderWidth: 1,
          borderColor: '#9164AB',
          marginVertical: 8,
          marginHorizontal: 12,
          marginTop: 30,
          justifyContent: 'center',
          alignItems: 'flex-start',
          shadowColor: '#000000',
          elevation: 10,
        }}
        onPress={() => ScoreQuiz('a')}>
        <Text
          style={{
            fontFamily: 'MontserratSemiBold',
            color: '#fff',
            fontSize: 15,
            paddingHorizontal: 10,
          }}>
          A. {a}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: Dimensions.get('screen').width - 50,
          paddingVertical: 12,
          borderRadius: 20,
          backgroundColor: '#9164AB',
          borderWidth: 1,
          borderColor: '#9164AB',
          marginVertical: 8,
          marginHorizontal: 12,
          justifyContent: 'center',
          alignItems: 'flex-start',
          shadowColor: '#000000',
          elevation: 10,
        }}
        onPress={() => ScoreQuiz('b')}>
        <Text
          style={{
            fontFamily: 'MontserratSemiBold',
            color: '#fff',
            fontSize: 15,
            paddingHorizontal: 10,
          }}>
          B. {b}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: Dimensions.get('screen').width - 50,
          paddingVertical: 12,
          borderRadius: 20,
          backgroundColor: '#9164AB',
          borderWidth: 1,
          borderColor: '#9164AB',
          marginVertical: 8,
          marginHorizontal: 12,
          justifyContent: 'center',
          alignItems: 'flex-start',
          shadowColor: '#000000',
          elevation: 10,
        }}
        onPress={() => ScoreQuiz('c')}>
        <Text
          style={{
            fontFamily: 'MontserratSemiBold',
            color: '#fff',
            fontSize: 15,
            paddingHorizontal: 10,
          }}>
          C. {c}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: Dimensions.get('screen').width - 50,
          paddingVertical: 12,
          borderRadius: 20,
          backgroundColor: '#9164AB',
          borderWidth: 1,
          borderColor: '#9164AB',
          marginVertical: 8,
          marginHorizontal: 12,
          justifyContent: 'center',
          alignItems: 'flex-start',
          shadowColor: '#000000',
          elevation: 10,
        }}
        onPress={() => ScoreQuiz('d')}>
        <Text
          style={{
            fontFamily: 'MontserratSemiBold',
            color: '#fff',
            fontSize: 15,
            paddingHorizontal: 10,
          }}>
          D. {d}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: Dimensions.get('screen').width - 50,
          paddingVertical: 12,
          borderRadius: 20,
          backgroundColor: '#9164AB',
          borderWidth: 1,
          borderColor: '#9164AB',
          marginVertical: 8,
          marginHorizontal: 12,
          justifyContent: 'center',
          alignItems: 'flex-start',
          shadowColor: '#000000',
          elevation: 10,
        }}
        onPress={() => ScoreQuiz('e')}>
        <Text
          style={{
            fontFamily: 'MontserratSemiBold',
            color: '#fff',
            fontSize: 15,
            paddingHorizontal: 10,
          }}>
          E. {e}
        </Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);

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
});
export default DetailQuiz;
