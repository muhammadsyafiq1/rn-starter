import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {

    const COLOR_INCREMENT = 15;

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    console.log(red);
    return(
        <View>
            <ColorCounter 
                color="red"
                onIncrease={() => setRed(Math.min(red + COLOR_INCREMENT, 255))}
                onDecrease={() => setRed(Math.max(red - COLOR_INCREMENT, 0))}
                /> 

                <ColorCounter 
                color="green" 
                onIncrease={() => setGreen(Math.min(green + COLOR_INCREMENT, 255))}
                onDecrease={() => setGreen(Math.max(green - COLOR_INCREMENT, 0))}
                />

                <ColorCounter 
                color="blue" 
                onIncrease={() => setBlue(Math.min(blue + COLOR_INCREMENT, 255))}
                onDecrease={() => setBlue(Math.max(blue - COLOR_INCREMENT, 0))}
                />
                <View style={{ height:150, width:150, backgroundColor:`rgb(${red},${green},${blue})` }}></View>
        </View>
    );
}

const styles = StyleSheet.create({

});


export default SquareScreen;