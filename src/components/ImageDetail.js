import React from "react";
import {Text, View, Button, StyleSheet, Image} from "react-native";

const ImageDetail = ({imageSource, title, score}) => {

    return (
        <View>
            <Image source={imageSource} />
            <Text>{title}</Text>
            <Text>{score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;