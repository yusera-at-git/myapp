import React from "react";
import {View, Text, FlatList, StyleSheet} from  "react-native";

const ListFunction =()=>{

    const friends=[
        {name:"var"},
        {name:"varr"},
        {name:"vart"},
        {name:"varyi"},
        {name:"varui"}
    ]

    const foes=[
        {name:"constjd", key:"1"},
        {name:"constjd", key:"2"},
        {name:"constjd", key:"3"},
        {name:"constjd", key:"4"},
        {name:"constjd", key:"5"},
        {name:"constjd", key:"6"}
    ]
    return(
       <View> 
<FlatList 
//horizontal

data={friends}
renderItem={({item})=>{
  return  <Text style={[Style.Container,Style.textStyle]}>{item.name}</Text>
}}
/>

<FlatList
horizontal
showsHorizontalScrollIndicator
keyExtractor={(foe)=>{
    return foe.key
}}
data ={foes}
renderItem={({item})=>{
return <Text style={[Style.Container, Style.textStyle]}> {item.name} {item.key}</Text>

}} 
/>
</View>
    );
}

const Style=StyleSheet.create(
    {
        textStyle:{
            padding:30,
            marginVertical:20,
            backgroundColor:'green'
        },
        Container:{
            fontSize:30,
            color:"rgb(255,0,0)"
        }
    }
);

export default ListFunction;