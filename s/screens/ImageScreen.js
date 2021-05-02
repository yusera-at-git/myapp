import React from "react";
import { Text, View} from "react-native";
import ImageComponents from "../components/ImageComponents";

const ImageScreen=()=>{

    return(<View>
<ImageComponents imageSource={require('../../assets/vincent-guth-horUo-9ghIw-unsplash.jpg')} title="Image 1"/>
<ImageComponents imageSource={require('../../assets/vincent-guth-horUo-9ghIw-unsplash.jpg')} title="Image 1"/>
<ImageComponents imageSource={require('../../assets/vincent-guth-horUo-9ghIw-unsplash.jpg')} title="Image 1"/>
</View>);
}

export default ImageScreen;