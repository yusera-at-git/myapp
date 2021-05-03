import React,{useReducer} from "react";
import { useState } from "react";
import {Text, View, Button, StyleSheet} from "react-native";
import ColorAdjustmentButton from "../components/ColorAdjustmentButton";

const INCDECNUM=50;

//define reducer() function:
const reducer =(state, action)=>{
//first argument to our reducer( ) is the state object: {red:0,green:0, blue:0}//
//second argument is the object thatdescribes the changes we want to make//
//state==={red:0, green:0, blue:0}
//action==={colortochange: "red||green||blue", amount:+15||-15}


/*switch(action.colorToChange){

    case "red":
         //we are going to override the value of red//
        return {...state,red:state.red+action.amount};
        case "green":
            //we are going to override the value of green//
            return { ...state,green:state.green+action.amount};  
            case "blue":
                //we are going to override the value of blue//
                return { ...state,blue:state.blue+action.amount};
                default: state;
}*/

        //below is the switch statement with validation:
switch(action.colorToChange){
    
//case red:
    case "red":
        //we are going to override the value of red//

        /************{{   its important that your switch case returns something in reducer, 
            so in the below cases we have passed our validation statements i.e. ternary if statements 
            in the return statement of eacg case  }}***********/
    return (state.red+action.amount>255||state.red+action.amount<0)
    ?state
    :{...state,red:state.red+action.amount};


//case green:
    case "green":
        //we are going to override the value of green//
    return (state.green+action.amount>255||state.green+action.amount<0)
    ?state
    :{ ...state,green:state.green+action.amount};  
    
 //case blue:   
    case "blue":
        //we are going to override the value of blue//
    return (state.blue+action.amount>255||state.blue+action.amount<0)
    ?state
    :{ ...state,blue:state.blue+action.amount};
    
    //default case:
    default: 
    return state;
}//switch close

};//reducer close

//our functional component starts here:
const ColorAdjustmentScreen1=()=>{

 //declaring usereducer:
 const[state,dispatch]=useReducer(reducer,{red:0,green:0, blue:0});
 //{red:0,green:0, blue:0} is the exact initial value of our state object
//destructuring state:
const {red,green,blue}=state;
 //return() function starts from here:

            return(
        <View style={{alignItems:"center",justifyContent:"center"}}>
            <ColorAdjustmentButton 
            onIncrease={()=>{dispatch({colorToChange:"red", amount:INCDECNUM})}}
            onDecrease={()=>{dispatch({colorToChange:"red", amount:-INCDECNUM})}} 
            color="Red"
            />
            <ColorAdjustmentButton 
            onIncrease={()=>{dispatch({colorToChange:"green", amount:INCDECNUM})}}
            onDecrease={()=>{dispatch({colorToChange:"green", amount:-INCDECNUM})}}
            color="Green"  
            />

            <ColorAdjustmentButton 
            onIncrease={()=>{dispatch({colorToChange:"blue", amount:INCDECNUM})}}
            onDecrease={()=>{dispatch({colorToChange:"blue", amount:-INCDECNUM})}}
            color="Blue"/>
       
            <View style={[{ height:100, width:100, backgroundColor:`rgb(${red},${green},${blue})`}]} />

        </View>
         //this could be written as follows:           
        //<View style={[{ height:100, width:100, backgroundColor:`rgb(${state.red},${state.green},${state.blue})`}]} />

    );
}

export default ColorAdjustmentScreen1;