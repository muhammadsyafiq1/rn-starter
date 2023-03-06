import React from "react";
import {Text, View, StyleSheet} from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return <View>
        <ImageDetail 
            score="9"
            title="forest" 
            imageSource={require('../../assets/images/beach.jpg')} />
        <ImageDetail 
            title="moon" 
            score="5" 
            imageSource={require('../../assets/images/forest.jpg')} />
        <ImageDetail 
            title="mount" 
            score="10"
            imageSource={require('../../assets/images/mountain.jpg')} />
    </View>
}

const styles = StyleSheet.create({

});

export default ImageScreen;