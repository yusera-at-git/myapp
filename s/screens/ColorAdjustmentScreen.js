import React from "react";
import { useState } from "react";
import {Text, View, Button, StyleSheet} from "react-native";
import ColorAdjustmentButton from "../components/ColorAdjustmentButton";

const INCDECNUM=50;
const ColorAdjustmentScreen=()=>{
    const [red, setred]=useState(0);
    const[green,setgreen]=useState(0);
    const[blue,setblue]=useState(0);

const setColor=(color,change)=>{
        //color
switch(color){
              //red+change<0 because in inDecrease we have red "-" INCDECNUM
            case "red":
                if(red+change>255||red+change<0){
            return ;
            }
            else{
                setred(red+change)
            }
            return;


        case "blue":

            if(blue+change>255||blue+change<0){
                return;
            }
            else
         {
                setblue(blue+change)
        }
        return;

        case "green":
            if(green+change>255||green+change<0){
                return;

            }
            else{
                setgreen(green+change)
            }
        return;
    
    default:
        return;
        
}}

//return() function starts from here:

            return(
        <View style={{alignItems:"center",justifyContent:"center"}}>
            <ColorAdjustmentButton 
            onIncrease={()=>{setColor('red',INCDECNUM)}}
            onDecrease={()=>{setColor( 'red',-INCDECNUM)}} 
            color="Red"
            />
            <ColorAdjustmentButton 
            onIncrease={()=>{setColor('green',INCDECNUM)}}
            onDecrease={()=>{setColor('green',-INCDECNUM)}}
            color="Green"
            />

            <ColorAdjustmentButton 
            onIncrease={()=>{setColor('blue',INCDECNUM)}}
            onDecrease={()=>{setColor('blue',-INCDECNUM)}}
            color="Blue"/>

            <View style={[{ height:100, width:100, backgroundColor:`rgb(${red},${green},${blue})`}]} />

        </View>
    );
}

export default ColorAdjustmentScreen;