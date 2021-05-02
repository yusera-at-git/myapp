import React from "react";
import { useState } from "react";
import {Text, View, Button, StyleSheet} from "react-native";
import ColorAdjustmentButton from "../components/ColorAdjustmentButton";

const INCDECNUM=15;
const ColorAdjustmentScreen=()=>{
    const [red, setred]=useState(0);
    const[green,setgreen]=useState(0);
    const[blue,setblue]=useState(0);

    const setColor=(color,change)=>{
        //color
        if (color==='red'){
            //red+change<0 because in inDecrease we have red "-" INCDECNUM
            if(red+change>255||red+change<0){
            return ;
            }
            else{
                setred(red+change)
            }}
        if(color==="blue"){

            if(blue+change>255||blue+change<0){
                return;
            }
            else
         {
                setblue(blue+change)
        }}

        if(color==="green"){
            if(green+change>255||green+change<0){
                return;

            }
            else{
                setgreen(green+change)
            }}
        
            }

//return() function starts from here:

            return(
        <View style={{alignItems:"center",justifyContent:"center"}}>
            <ColorAdjustmentButton 
            onIncrease={()=>{setColor('red',INCDECNUM)}}
            onDecrease={()=>{setColor( 'red'-INCDECNUM)}} 
            color="Red"
            />
            <ColorAdjustmentButton 
            onIncrease={()=>{setColor('green'+INCDECNUM)}}
            onDecrease={()=>{setColor('green'-INCDECNUM)}}
            color="Green"
            />

            <ColorAdjustmentButton 
            onIncrease={()=>{setColor('blue'+INCDECNUM)}}
            onDecrease={()=>{setColor('blue'-INCDECNUM)}}
            color="Blue"/>

            <View style={[{ height:100, width:100, backgroundColor:`rgb(${red},${green},${blue})`}]} />

        </View>
    );
}

export default ColorAdjustmentScreen;