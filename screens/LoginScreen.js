import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { NativeBaseProvider, VStack, Center } from "native-base";

const LoginScreen = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showToast = (message) => {
    Toast.show({
      type: "error",
      text1: message,
    });
  };

  const SignIn = () => {
    if (!(email && password))
      return showToast("Všetky polia musia byť vyplnené!");

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {})
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          showToast("Email alebo heslo je nesprávne!");
        } else if (error.code === "auth/wrong-password") {
          showToast("Email alebo heslo je nesprávne!");
        } else if (error.code === "auth/invalid-email") {
          showToast("Email alebo heslo je nesprávne!");
        }

        console.error(error);
      });
  };

  return (
    <NativeBaseProvider>
    <View style={styles.container}>
    <VStack >
      <Center>
      <Text style={styles.title}>Log In</Text>
      <View>
        <TextInput
          placeholder="Email"
          placeholderTextColor={"#B6B4B4"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={"#B6B4B4"}
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.button}
          onPress={SignIn}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
      </Center>
      </VStack>
    </View>
    </NativeBaseProvider>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#000030",
    justifyContent: "center",
  },
  title:{
    fontSize: 48,
    color: "white",
    marginBottom: "16px"
  },
  input:{
    marginVertical: "12px",
    backgroundColor: "white",
    fontSize: "20px",
    padding: "8px",
    width: "250px",
    marginHorizontal: "auto",
    borderRadius: "8px"
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