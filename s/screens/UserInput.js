import React from "react";
import {Text, View, StyleSheet,Button, TextInput} from "react-native";

const UserInput =()=>{

    return(
        <View>
         {/* The exterior set of curly braces are letting JSX */}
         {/* know you want a JS expression. */}
         {/* The interior set of curly braces represent  */}
         {/* a JavaScript object, meaning you’re passing  */}
         {/* in a object to the style attribute    */}
            <TextInput style={{
        margin:80, borderColor:"black", borderWidth:10,padding:20
    }}/>
        </View>


    );
}

const style=StyleSheet.create({

    input: {
        margin:80, borderColor:"black", borderWidth:10,padding:20
    }
})
export default UserInput;