import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { NativeBaseProvider, Select, CheckIcon, VStack, Center } from "native-base";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Toast from "react-native-toast-message";
import { useNavigation } from '@react-navigation/native'


const RegisterScreen = () => {

  const navigation = useNavigation()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [accountType, setAccountType] = useState("")

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        /* navigation.navigate("Home");  */
      }
    });

    return unsubscribe;
  }, []);

  const showToast = (message) => {
    Toast.show({
      type: "error",
      text1: message,
    });
  };

  const SignUp = () => {
    if (password !== confirmPassword) {
      showToast("Heslá sa nezhodujú!");
    } else {
      if (!(email && password && accountType))
        return showToast("Všetky polia musia byť vyplnené!");

      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          setDoc(doc(db, "Používatelia", res.user.uid), {
            id: res.user.uid,
            email: email,
            accountType: accountType,            
            role: "USER",
          });
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            showToast("Táto emailová adresa sa už používa!");
          } else if (error.code === "auth/missing-email") {
            showToast("Zadajte emailovú adresu!");
          } else if (error.code === "auth/invalid-email") {
            showToast("Emailová adresa chýba alebo je neplatná!");
          } else if (error.code === "auth/internal-error") {
            showToast("Nastala chyba, skúste to neskôr!");
          } else if (error.code === "auth/weak-password") {
            showToast("Heslo musí obsahovať aspoň 6 znakov!");
          }
          console.error(error);
        });
    }
  };

  return (
    <NativeBaseProvider>
    <View style={styles.container}>
    <VStack >
      <Center>
      <Text style={styles.title}>Register</Text>
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
        <TextInput
          placeholder="Repeat Password"
          placeholderTextColor={"#B6B4B4"}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          style={styles.input}
          secureTextEntry
        />

        <Center>
        <Select selectedValue={accountType} style={styles.selector} width={150} accessibilityLabel="Choose" placeholder="Choose" _selectedItem={{
          bg: "white",
          endIcon: <CheckIcon size="5" />
        }} mt={1} color="white" fontSize={16} onValueChange={itemValue => setAccountType(itemValue)}>
          <Select.Item label="Expert" value="expert" />
          <Select.Item label="Teacher" value="teacher" />
          <Select.Item label="Student" value="student" />
        </Select>
        </Center>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => SignUp()}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
      </Center>
      </VStack>
    </View>
    </NativeBaseProvider>
  )
}

export default RegisterScreen;

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