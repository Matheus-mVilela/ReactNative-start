import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  return (

    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.imgLogo}>
        <Image source={require('./assets/favicon.png')} />
      </View>

      <View style={styles.container}>
        <TextInput 
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TextInput 
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TouchableOpacity style={styles.btnSubmit}> 
          <Text style={styles.submitText}>ACESSAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>

  
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#191919'
  },
  imgLogo:{
    flex:1,
    justifyContent:'center',
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom:'60%',
  },
  input:{
    backgroundColor:'#fff',
    width:'90%',
    fontSize:18,
    marginBottom:15,
    borderRadius:10,
    padding:12,
  },
  btnSubmit:{
    backgroundColor:'#35aaff',
    width:'90%',
    fontSize:18,
    marginBottom:15,
    borderRadius:10,
    padding:12,
    alignItems:'center',
    justifyContent:'center',
},
submitText:{
  color:'#fff',
  fontSize:18,
  fontWeight:'bold'
},
btnRegister:{
  marginTop:10,
},
registerText:{
  color:'#fff',
}


});


