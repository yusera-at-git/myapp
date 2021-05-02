import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";

const ImageComponents =props=>{
    console.log(props);
    return(

        <View style={style.container}>
            <Image source={props.imageSource} style={[style.container,{width:90, height:90},style.textStyle]}/>
            <Text>{props.title}</Text>
        </View>
    );
}

const style=StyleSheet.create(
    {
        container:{
            fontSize:20,
            color:"red",
            alignItems:"center",
            justifyContent:"center"
        },
        textStyle:{
            marginVertical:50,
            padding:50
        }
    }
);

export default  ImageComponents;