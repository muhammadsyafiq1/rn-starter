import React, { useReducer, useState } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {

    const COLOR_INCREMENT = 15;

    const validateColor = (colorValue) => {
        if(colorValue < 0 || colorValue > 255){
            return false;
        }
        return true;
    }


    // fungsi reducer myfunction
    const myFunction = (state, action) => {
        //state === red:number, green:number, blue:number
        //action === colortochange || yang akan merubah nilai state + 15
        //memanggil dispatch dengan action sebagai argumennya
        //colortochange adalah action
        switch(action.colorToChange){
            case 'red':
              const newRed = state.red + action.amount;
              if (validateColor(newRed)) {
                return {...state, red: newRed};
              } else {
                return state;
              }
            case 'green':
              const newGreen = state.green + action.amount;
              if (validateColor(newGreen)) {
                return {...state, green: newGreen};
              } else {
                return state;
              }
            case 'blue':
              const newBlue = state.blue + action.amount;
              if (validateColor(newBlue)) {
                return {...state, blue: newBlue};
              } else {
                return state;
              }
            default:
              return state;
          }
    };

    const [state, dispatch] = useReducer(myFunction,{red:0, green:0, blue:0});

    const {red, blue, green} = state;

    return(
        <View>
            <ColorCounter 
                color="red"
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                //saat fungsi dispatch ditekan akan memnaggil fungsi reducer
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                /> 

                <ColorCounter 
                color="green" 
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
                />

                <ColorCounter 
                color="blue" 
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
                />
                <View style={{ height:150, width:150, backgroundColor:`rgb(${state.red},${state.green},${state.blue})` }}></View>
        </View>
    );
}

const styles = StyleSheet.create({

});


export default SquareScreen;