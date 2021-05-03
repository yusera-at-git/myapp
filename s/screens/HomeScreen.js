import React from "react";
import {Text, View, StyleSheet, Button} from "react-native";

const HomeScreen =(props)=>{
  return(
    <View>
    <Text> Hello!!</Text>
    <Button 
    title="Tap here" 
    onPress={()=>props.navigation.navigate('Flat')}/>
    <Button 
    title="Tap here ok" 
    onPress={()=>props.navigation.navigate('Image')}/>
    <Button 
    title="Counter app"
    onPress={()=>{props.navigation.navigate("Count")}}
    />
    <Button
    title="colorscreen"
    onPress={()=>{props.navigation.navigate("Color")}}
    />

<Button
    title="coloradscreen"
    onPress={()=>{props.navigation.navigate("Coloradscreen")}}
    />

<Button
    title="coloradscreen1"
    onPress={()=>{props.navigation.navigate("Coloradscreen1")}}
/>

<Button
    title="Counterusereducer"
    onPress={()=>{props.navigation.navigate("Counterred")}}
    />


<Button
    title="user input"
    onPress={()=>{props.navigation.navigate("Input")}}
    />
    </View>
  );
}

export default HomeScreen;