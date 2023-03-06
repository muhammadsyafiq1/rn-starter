import React from "react"
import { Text, StyleSheet, View, Button } from 'react-native'

const ComponentsScreen = (props) => {

    const myname = 'Muhammad Syafiq';

    return (
        <View>
            <Text style={styles.textStyle}>Getting Started with react native</Text>
            <Text style={styles.textName}>My name : {myname}</Text>
            <Button title="back to home" onPress={ () => props.navigation.navigate('Home')} />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
    },
    textName: {
        fontSize: 20
    }
})

export default ComponentsScreen