import React from "react";
import {Text , View, StyleSheet, Button} from "react-native";
import { State } from "react-native-gesture-handler";
import { useReducer, useState } from "react/cjs/react.development";


/**********STEP 2: CREATE/DEFINE REDUCER()************/
const reducer=(state,action)=>{
    //state =={count:number}
    //action =={type: "increment"||"Decreament", payload:1}
        /***********STEP 3:SWITCH STATEMENT  **********/
    switch(action.type){

        // *********STEP 6: DONT FORGET THE VALIDATION*************
    case "increment":
        return {...state, count: state.count + action.payload};
    case "decrement":
        return (state.count==0)?state:{...state, count: state.count - action.payload};
    default:
        return state;
}
}


const CounterUseReduce=()=>{
//    const[counter, setcounter]=useState(0);

/*****step 1 : create useReducer()*****/
const [state,dispatch]=useReducer(reducer,{count:0});
    return(

<View>
<Text>Counter app</Text>
{/* Button 1 */}
<Button title="Increase"
            // *******STEP 4: CALL THE ACTION OBJECT IN DISPATCH()*********
 onPress={()=>dispatch({type:"increment", payload:1})}
//  {()=>setcounter(counter+1)}
  />
{/* Button 2 */}
<Button title="Decrease"
            // *******STEP 4: CALL THE ACTION OBJECT IN DISPATCH()*********
 onPress={()=>dispatch({type:"decrement", payload:1})}
// {()=>{counter==0?null:setcounter(counter-1)}}
/>
            {/* **********STEP 5: CALL THE DESIRED VALUE OF STATE********** */}
<View> {state.count}</View>
</View>

    );
}

export default CounterUseReduce;