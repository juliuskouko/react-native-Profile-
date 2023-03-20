// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello World!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from "react";
import { Button, StyleSheet, Text, View, Image } from 'react-native';


function App() {
  return <View style={styles.container}>
    <Image source={require("./assets/profile.jpg")} style={styles.image}/>

    <View style={styles.detailContainer}>
      <Text style={styles.label}>School</Text>
      <Text style={styles.info}>Codetrain Africa</Text>
    </View>
    <View style={styles.detailContainer}>
      <Text style={styles.label}>Email Address</Text>
      <Text style={styles.info}>koukojulius36@gmail.com</Text>
    </View>
    <View style={[styles.detailContainer,styles.container1]}>
      <Text style={[styles.label,styles.label1]}>Name</Text>
      <Text style={styles.info}>Julius Atsu Kouko</Text>
    </View>
    <View style={[styles.detailContainer,styles.container1]}>
      <Text style={[styles.label,styles.label1]}>Nick Name</Text>
      <Text style={styles.info}>Julius</Text>
    </View>
    <View style={[styles.detailContainer,styles.container1]}>
      <Text style={[styles.label,styles.label1]}>Emergency Contact</Text>
      <Text style={[styles.info,styles.info1]}>0554051957</Text>
    </View>

    <Button title="Update Profile"/>
    
  </View>
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 40,
  },
  container1:{
    borderBottomWidth: 1,
    borderBottomColor:"gray",
  },
  image:{
    marginTop:50,
    width:160,
    height:160,
    marginBottom: 50,
    alignSelf: "center",
    borderRadius: 80,
    
  },
  detailContainer:{
    marginVertical:10,
    flex:1,
    
  },
  label:{
    marginBottom:3,
    
  },
  info:{
    fontSize:18,
    
    
  },
  label1:{
    color: "gray",
  },
  button:{
    borderRadius: 15,
  }

})

export default App;