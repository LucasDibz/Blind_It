import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

const logo = require("../../../assets/logo.png");

const Login = () => {
  const navigation = useNavigation();

  function handleLogin() {
    //Checar Login
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <View style={styles.inputContainer}>
        <Text style={styles.inputPlaceholder}>Usuário</Text>
        <TextInput style={styles.input} />

        <Text style={styles.inputPlaceholder}>Senha</Text>
        <TextInput style={styles.input} secureTextEntry />

        <TouchableOpacity style={styles.inputButton} onPress={handleLogin}>
          <Text style={styles.inputButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linksContainer}>
        <Text style={styles.linksText}>Esqueci minha senha</Text>
        <Text style={styles.linksText}>Cadastrar</Text>
      </View>
    </View>
  );
};

export default Login;
