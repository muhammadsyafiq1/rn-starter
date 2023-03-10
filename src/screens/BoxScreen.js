import React from "react";
import {Text, View, StyleSheet} from "react-native"

const BoxScreen = () => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyleOne}>Box 1</Text>
            <Text style={styles.textStyleTwo}>Box 2</Text>
            <Text style={styles.textStyleThree}>Box 3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'column'
    },
    textStyleOne :{
        borderWidth: 3,
        borderColor: 'red',
        flex: 1,
        alignSelf: 'flex-end'
    },
    textStyleTwo :{
        borderWidth: 3,
        borderColor: 'red', 
        flex: 1,
        alignSelf: 'center',
        // position: 'absolute'
    },
    textStyleThree :{
        borderWidth: 3,
        borderColor: 'red',
        flex: 1,
        alignSelf: 'flex-start'
    },
});

export default BoxScreen;

