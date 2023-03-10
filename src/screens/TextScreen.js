import React, { useState } from "react";
import {Text, View, StyleSheet, TextInput} from "react-native";

const TextScreen = () => {

    const [name, setName] = useState('');

    return(
        <View>
            <Text>My name :</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={newValue => setName(newValue)}
            />
            <Text>my name is {name}</Text>
            {name.length < 4 ? <Text>Name mus be 4 character</Text> : null}
        </View>
    );
} 

const styles = StyleSheet.create({
    input: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;