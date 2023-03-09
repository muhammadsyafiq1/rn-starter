import React, { useReducer, useState } from "react";
import {Text, View, StyleSheet, Button} from "react-native"

const ScreenCounter = () => {

    const myFunctionReducer = (state, action) => {
        switch (action.type){
            case 'increment' :
                return {...state, count: state.count + action.payload};
            case 'decrement' :
                return {...state, count: state.count - action.payload};
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(myFunctionReducer, {count: 0});
    
    return(
        <View>
            <Button 
                title="Increase" 
                onPress={() => dispatch({ type:'increment', payload:1 }) } />

            <Button
                title="Decrease"
                onPress={() => dispatch({ type:'decrement', payload:1 })} />

            <Text>Score : {state.count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default ScreenCounter;