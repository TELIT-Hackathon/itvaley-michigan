import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Register" component={RegisterScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
      {/* <View style={styles.container}>
                <Image
                  source={require("./assets/logo.png")}
                  resizeMode="contain"
                  style={styles.image}
                />
            <View>
              <Text style={styles.title}> Skill IT </Text>
            </View>
            <View>
              <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('StartScreen')}
              >
                <Text style={styles.buttonText}>Log In</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>
        </View> */}
    </NavigationContainer>
  );
}

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
