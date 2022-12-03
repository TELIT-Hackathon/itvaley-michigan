import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Log In</Text>
      <View>
        <TextInput

        />

        <TextInput
        
        />
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#000030"
  }
})