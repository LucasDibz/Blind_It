import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const logo = require('../../../assets/logo.png');

const Register = () => {
  const navigation = useNavigation();

  //Todo - Fix Cadastrar
  function cadastrar() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <Image style={styles.logo} source={logo} />

        <Text style={styles.title}>Crie sua conta</Text>
        {/* Name Input */}
        <Text style={styles.inputTitle}>Nome Completo</Text>
        <TextInput style={styles.input} />

        <View style={styles.shortInputsContainer}>
          {/* Birthday Input */}
          <View>
            <Text style={styles.inputTitle}>Nascimento</Text>
            <TextInput style={[styles.input, { width: 130 }]} />
          </View>

          {/* Genre Input */}
          <View>
            <Text style={[styles.inputTitle, { marginLeft: '30%' }]}>
              Gênero
            </Text>
            <TextInput style={[styles.input, { width: 135 }]} />
          </View>
        </View>

        {/* Email Input */}
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput style={styles.input} />

        {/* RG Input */}
        <Text style={styles.inputTitle}>RG</Text>
        <TextInput style={styles.input} />

        {/* CPF Input */}
        <Text style={styles.inputTitle}>CPF</Text>
        <TextInput style={styles.input} />

        {/* CEP Input */}
        <Text style={styles.inputTitle}>CEP</Text>
        <TextInput style={styles.input} />

        {/* Address Input */}
        <Text style={styles.inputTitle}>Endereço</Text>
        <TextInput style={styles.input} />

        {/* Submit Button */}
        <TouchableOpacity style={styles.inputButton}>
          <Text style={styles.inputButtonText} onPress={cadastrar}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Register;
