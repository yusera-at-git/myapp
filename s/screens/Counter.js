import React from "react";
import { useState } from "react";
import {Text, View, Button} from "react-native";



const CounterScreen=()=>{
    const [counter, setCounter]=useState(0);
    return(
        
        <View>
            <Button title="Increase" 
            onPress={
                ()=>{setCounter(counter+1);}
            }/>
            <Button title="decrease"
            onPress={
                ()=>counter==0?null:setCounter(counter-1)
            }
            />
            <Text>Counter</Text>
            <Text>{counter}</Text>
        </View>
    );
}
 export default CounterScreen;