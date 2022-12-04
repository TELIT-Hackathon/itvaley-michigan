import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { NativeBaseProvider } from 'native-base'

const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <NativeBaseProvider>
      <ScrollView style={styles.container}>

      </ScrollView>
    </NativeBaseProvider>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#000030",
  }
})