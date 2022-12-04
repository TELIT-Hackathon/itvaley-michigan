import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const PostScreen = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={styles.button}
        onPress={navigation.goBack}
      >
        <Text style={styles.buttonText}>PostScreen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PostScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#000030"
    },
    button:{
        width: "60px",
        alignItems: "center",
        marginVertical: "30px",
        padding: "10px",
        backgroundColor: "#FF9C00",
        borderRadius: "8px",
        marginHorizontal: "auto",
        width: "7;0%"
    },
    buttonText:{
      color: "white",
      fontSize: "24px"
    },
})