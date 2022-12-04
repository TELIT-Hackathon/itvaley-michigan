import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const StartScreen = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
                <Image
                  source={require("../assets/logo.png")}
                  resizeMode="contain"
                  style={styles.image}
                />
            <View>
              <Text style={styles.title}> Skill IT </Text>
            </View>
            <View>
              
              <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={styles.buttonText}>Log In</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Register')}
              >
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>

            </View>
        </View>
  )
}

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 350,
    height: 400,
    justifyContent: "center"
  },
  title:{
    marginTop: "-60px",
    marginBottom: "30px",
    fontSize: 64,
    color: "white"
  },
  button:{
    alignItems: "center",
    marginBottom: "30px",
    padding: "10px",
    backgroundColor: "#FF9C00",
    borderRadius: "8px"
  },
  buttonText:{
    fontSize: 24,
    color: "white"
  },
});