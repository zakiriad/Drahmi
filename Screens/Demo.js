import React, { Component } from 'react';
import KeyboardListener from 'react-native-keyboard-listener';
import {View,Image ,Text, StyleSheet,Animated, TextInput,KeyboardAwareScrollView, KeyboardAvoidingView, Keyboard, KeyboardAvoidingViewBase} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginButton from "../Components/LoginButton.js";

class Demo extends Component {
  constructor(props) {
    super(props);

    this.opacity = new Animated.Value(1);
    this.BorderWidth = new Animated.Value(0.7);
  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.parallel([
        Animated.timing(this.opacity, {
          duration: event.duration,
          toValue: 1,
        }),
        Animated.timing(this.opacity, {
        duration: event.duration,
        toValue: 0,
        }),
      ]).start();
  };

  keyboardWillHide = (event) => {
    Animated.parallel([
        
        Animated.timing(this.BorderWidth, {
          duration: event.duration,
          toValue: 0.7,
        }),
        Animated.timing(this.BorderWidth, {
            duration: event.duration,
            toValue: 0,
          }),
      ]).start();
  };

  render() {
    return (
        <SafeAreaView >
        <KeyboardAvoidingView style={Styles.body}>
            <Animated.View  style={[Styles.LogoStyle,{opacity:this.opacity}]}>
                <Animated.Image source={require("../imgs/Logo.png")} style={{opacity:1}}/>
            </Animated.View>
            
            <Animated.View style = {[Styles.LoginArea, {borderWidth:this.BorderWidth}]}>
                <View style={Styles.TextInputContStyle}>
                    <TextInput 
                        style={Styles.TextInputStyle}
                        textContentType="emailAddress"
                        placeholder="   Email"
                    />
                    <TextInput 
                        style={Styles.TextInputStyle}
                        textContentType="password"
                        placeholder="   Mot de passe"
                    />
                </View>
                
                <LoginButton style={Styles.LoginButtonStyle}/>
                <Animated.Image source={require('../imgs/OrBar.png')} style={[Styles.OrBarStyle, {opacity:this.opacity}]}/>
                <Animated.View style={[Styles.IconsStyle, {opacity:this.opacity}]}>
                    <Image source={require('../imgs/facebook.png')}/>
                    <Image source={require('../imgs/google.png')}/>
                    <Image source={require('../imgs/twiter.png')}/>
                    
                </Animated.View>
            </Animated.View>
            <Animated.Text style={[Styles.TextInscriStyle, {opacity:this.opacity}]}>Inscrivez-vous ici</Animated.Text>
        </KeyboardAvoidingView>
    </SafeAreaView>
    );
  }
};
const Styles = StyleSheet.create({
    body:{
        height:"100%",
        backgroundColor:"#FCFDFC",
        alignContent:"center",
        alignItems:"center",
        bottom:0,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center"
    },
    LoginArea:{
        zIndex:-1,
        backgroundColor:"#FCFDFC",
        height:"49%",
        width:"84.5%",
        borderStyle:'solid',
        borderColor:"#000",
        borderRadius:55,
        padding:10,
        justifyContent:"center",
        position:"absolute",
        bottom:"17%",
    },
    LogoStyle:{
        
        marginTop:10,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        position:"absolute",
        bottom:"64%",
        backgroundColor:"#FCFDFC",
        width:250,
    },
    
    LoginButtonStyle:{
        position:'absolute',
        margin:20,
        bottom:65,
    },
    TextInputStyle:{
        borderStyle:"solid",
        borderBottomWidth:1,
        borderBottomColor:"#000",
        height:40,
        margin:10
    },
    TextInputContStyle:{
        position:"absolute",
        bottom:180,
        width:"100%",
        alignSelf:"center"

    },
    TextInscriStyle:{
        position:"absolute",
        bottom:90,
        left:60
    },
    OrBarStyle:{
        bottom:35,
        alignSelf:"center",
        position:"absolute"
    },
    IconsStyle:{
        flexDirection:'row',
        alignSelf:"center",
        position:"absolute",
        bottom:10,
    }

});
export default Demo;