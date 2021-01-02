import React from "react";
import {View, Text,StyleSheet} from "react-native";


const LoginButton = (props) =>{
    return(
        <View  style={[Styles.ButtonStyle,props.style]}>
            <Text style={Styles.TextStyle}>Connexion</Text>
        </View>
        
    )
};

const Styles = StyleSheet.create({

    ButtonStyle:{
        height : 48,
        width: 252,
        backgroundColor:"#15038C",
        alignContent: "space-around",
        alignSelf:"center",
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center",
    },
    TextStyle:{
        fontSize:13,
        color:'#FFF'
    }
});

export default LoginButton;