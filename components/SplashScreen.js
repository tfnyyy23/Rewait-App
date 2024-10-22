import react, { useEffect } from 'react';
import {View, Image} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() =>{
        setTimeout(() => {
            navigation.navigate('landing')
        }, 3000);
    },[]);
  return (
    <View style={{backgroundColor:'#FFF', flex: 1, alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../assets/images/splash.png')}/>
    </View>
  )
};

export default SplashScreen;