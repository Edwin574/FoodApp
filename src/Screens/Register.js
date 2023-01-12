import React from "react";
import { View, StyleSheet, Text} from "react-native";

export default function Register() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Register Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, Alert, ActivityIndicator } from 'react-native';
// import firebase from 'firebase';

// const Signup = (props) => {
//   const [displayName, setDisplayName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const updateInputVal = (val, prop) => {
//     if(prop === 'displayName') {
//       setDisplayName(val);
//     } else if (prop === 'email') {
//       setEmail(val);
//     } else if (prop === 'password') {
//       setPassword(val);
//     }
//   }

//   const registerUser = () => {
//     if(email === '' && password === '') {
//       Alert.alert('Enter details to signup!')
//     } else {
//       setIsLoading(true);
//       firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then((res) => {
//         res.user.updateProfile({
//           displayName: displayName
//         })
//         console.log('User registered successfully!')
//         setIsLoading(false);
//         setDisplayName('');
//         setEmail('');
//         setPassword('');
//         props.navigation.navigate('Login');
//       })
//       .catch(error => console.log(error))      
//     }
//   }

//   if(isLoading){
//     return(
//       <View style={styles.preloader}>
//         <ActivityIndicator size="large" color="#9E9E9E"/>
//       </View>
//     )
//   }    
//   return (
//     <View style={styles.container}>  
//       <TextInput
//         style={styles.inputStyle}
//         placeholder="Name"
//         value={displayName}
//         onChangeText={(val) => updateInputVal(val, 'displayName')}
//       />      
//       <TextInput
//         style={styles.inputStyle}
//         placeholder="Email"
//         value={email}
//         onChangeText={(val) => updateInputVal(val, 'email')}
//       />
//       <TextInput
//         style={styles.inputStyle}
//         placeholder="Password"
//         value={password}
//         onChangeText={(val) => updateInputVal(val, 'password')}
//         maxLength={15}
//         secureTextEntry={true}
//       />   
//       <Button
//         color="#3740FE"
//         title="Signup"
//         onPress={() => registerUser()}
//       />
//       <Text 
//         style={styles.loginText}
//         onPress={() => props.navigation.navigate('Login')}>
//         Already Registered? Click here to login
//       </Text>                          
//     </View>
//   );
// }

// export default Signup;
