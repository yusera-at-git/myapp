import React from "react";
import { useState } from "react";
import {Text, Button , View, StyleSheet} from "react-native";
import { FlatList } from "react-native-gesture-handler";


const ColorScreen =()=>{
const [addColor, setColor]=useState([randomColor()]);
const [addColor1, setColor1]=useState([randomColor()]);

console.log(addColor);
    return(

        <View style={{marginVertical:50,padding:50}}>
<Button 
title="random color"
onPress={()=>{
const arr=[];
arr[0]=    setColor([...addColor,randomColor()]);
arr[1]=   setColor1([...addColor1,randomColor()]);
    return arr;

}}
/>

<FlatList 
horizontal
style={{marginVertical:20,padding:20}}
showsHorizontalScrollIndicator={false}
keyExtractor={(item)=>{item}}
data={addColor}
renderItem={({item})=>{return <View style={[{height:100, width:100, backgroundColor:item}]} />}}/>

<FlatList 
style={{marginVertical:20,padding:20}}
horizontal
showsHorizontalScrollIndicator={false}
keyExtractor={(item)=>{item}}
data={addColor1}
renderItem={({item})=>{return <View style={[{height:100, width:100, backgroundColor:item}]} />}}/>
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