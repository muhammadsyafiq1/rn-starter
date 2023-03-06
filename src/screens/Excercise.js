import React from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";

const Exercise = () => {
    
    const friends = [
        {
            name: "friend1",
            age: "10"
        },
        {
            name: "friend2",
            age: "10"
        },
        {
            name: "friend3",
            age: "10"
        },
        {
            name: "friend4",
            age: "10"
        },
        {
            name: "friend5",
            age: "10"
        },
        {
            name: "friend6",
            age: "10"
        },
        {
            name: "friend7",
            age: "10"
        },
    ]

    return (
        <FlatList
            data={friends}
            keyExtractor={friend => friend.name}
            renderItem={( {item} ) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginLeft: 30
    }
});

export default Exercise