import React from "react";
import {View,Image ,Text, StyleSheet, TextInput} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginButton from "../Components/LoginButton.js";



const Login = () =>{

    return (
        <SafeAreaView style={Styles.body}>
            <View  style={Styles.LogoStyle}>
                <Image source={require("../imgs/Logo.png")}/>
            </View>
            
            <View style = {Styles.LoginArea}>
                <TextInput style={Styles.TextInputStyle}>   Email</TextInput>
                <TextInput style={Styles.TextInputStyle}>   Mot de passe</TextInput>
                <LoginButton style={Styles.LoginButtonStyle}/>
            </View>
            
        </SafeAreaView>
    )
};


const Styles = StyleSheet.create({
    body:{
        height:"100%",
        backgroundColor:"#fff",
        alignContent:"center",
        alignItems:"center",
        bottom:0,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"space-around"
    },
    LoginArea:{
        zIndex:-1,
        backgroundColor:"#FCFDFC",
        height:"49%",
        width:"84.5%",
        borderStyle:'solid',
        borderColor:"#000",
        borderWidth:0.7,
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
        alignSelf:"center",
        position:"absolute",
        bottom:"64%",
        backgroundColor:"#fff",
    },
    LoginButtonStyle:{
        margin:10,
        bottom:-30,
    },
    TextInputStyle:{
        borderStyle:"solid",
        borderBottomWidth:1,
        borderBottomColor:"#000",
        height:40,
        justifyContent:"center",
        alignContent:"space-around",
        margin:10
    }

});

export default Login;