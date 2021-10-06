import React, { useEffect,useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { GoogleSignin, statusCodes,GoogleSigninButton } from '@react-native-google-signin/google-signin';

const App: () => Node = () => {
    useEffect(()=>{
        GoogleSignin.configure();
      },[])
      // Somewhere in your code
      const googleLogin = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log("user info",userInfo);
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log(error);
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            console.log(error);      
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            console.log(error);
          } else {
            // some other error happened
            console.log(error);
          }
        }
      };
  
    return (
        <View style={styles.bg}>
        <View style={styles.pos}>
       <GoogleSigninButton 
   style={styles.container}
   size={GoogleSigninButton.Size.Wide}
   color={GoogleSigninButton.Color.Light}
   onPress={googleLogin}/>

      

     </View>
       </View>
     
    );
};

const styles = StyleSheet.create({
    container:{
    
        height:70,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        
          },
          bg:{
            backgroundColor:'#fff',
            flexDirection:'column',
            justifyContent:'center',
            },
            pos:{
              flex:1,
              justifyContent:'flex-end',
        paddingBottom:160,
            },
});
export default App;
