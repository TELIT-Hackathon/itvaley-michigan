import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Image } from "react-native-svg";


const StartScreen = () => {
  return (
    <View>
      <Text>StartScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  fkex: 1,
  backgroundColor: "green",
  alignItems: "center",
  justifyContent: "center",
  },
  button:{
    backgroundColor: "yellow",
    flex: 1,
    justifyContent:'center',
    alignItems: "center",
    borderRadius:35,
    marginHorizontal:20,
    marginVerical:10,
    borderWidth:1,
    borderColor:"pink"
  }
});

export default function App(){
    return(
        <View style={styles.container}>
            <Svg height={height} width={width}>
                <Image
                href={require("C:\Users\cizma\Desktop\flask_server\catchthemall\assets\logo_app.jpg")}
                width={width} 
                height={height}
                preserveAspectRatio="xMidYMid slice"
                />
            </Svg>
            <View>
              <Text> NÁzov </Text>
            </View>
            <View>

              <View style={styles.button}>
                <Text style={styles.button.Text}>LOG IN</Text>
              </View>
              <View style={styles.button}>
                <Text style={styles.button.Text}>REGISTER</Text>
              </View>
            </View>
        </View>
    );
}