import React from "react";
import { useState } from "react";
import {Text, Button , View, StyleSheet} from "react-native";

const ColorScreen =()=>{
const [addColor, setColor]=useState('');
    return(

        <View>
<Button 
title="random color"
onPress={()=>{
    setColor(randomColor());

}}
/>
<View style={[{height:100, width:100, backgroundColor:addColor}]} />
</View>

    );
}

function randomColor(){
    const red=Math.floor(Math.random()*256);
      const green=Math.floor(Math.random()*256);
        const blue=Math.floor(Math.random()*256);
    return(
   `rgb(${red},${green},${blue}) `
    );
        
}

export default ColorScreen;