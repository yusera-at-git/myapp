import React from 'react';
import {Text,Button,StyleSheet,View} from "react-native";

const ColorAdjustmentButton=({color,onIncrease,onDecrease})=>{
return(

    <View>
<View>
        <Text>
            {color}
        </Text>
        <Button onPress={()=>onIncrease()} title={`More ${color}`}/>
        <Button onPress={()=>onDecrease()} title={`less ${color}`}/>
        </View>
    
    </View>

);
}

export default ColorAdjustmentButton;