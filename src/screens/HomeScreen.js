import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
      <View>
        <Text style={styles.text}>HomeScreenn</Text>
        <Button onPress={()=> navigation.navigate('Components')} title="Profile" />
        <Button onPress={() => navigation.navigate('ListScreen')} title="List" />
        <Button onPress={() => navigation.navigate('ImageScreen')} title="Image"/>
        <Button onPress={() => navigation.navigate('ScreenCounter')} title="Counter" />
        <Button onPress={ () => navigation.navigate('ColorScreen')} title="Color" />
        <Button onPress={ ()=> navigation.navigate('SquareScreen')} title="Square" /> 
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
