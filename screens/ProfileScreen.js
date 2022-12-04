import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";

const ProfileScreen = () => {

  const SignOut = () => {
    auth
      .signOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutContainer} onPress={SignOut}>
          <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#000030",
  },
  logoutContainer: {
    backgroundColor: "#FF9C00",
    borderRadius: 10,
    marginHorizontal: "auto",
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  logoutText: {
    color: "white",
    fontSize: 16,
  },
})