import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { Avatar } from 'react-native-elements';

import styles from './styles';

interface User {
  avatar_url: string;
  name: string;
}

const Profile = () => {
  const [user, setUser] = useState<User>();

  //Get User Information
  useEffect(() => {
    fetch('https://api.github.com/users/lucasdibz').then((res) =>
      res.json().then((res) => setUser(res))
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {/* Avatar */}
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri: user
              ? user.avatar_url
              : 'https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif',
          }}
          showAccessory
        />
      </View>

      {/* Inputs */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Name */}
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          editable={false}
          selection={{ start: 0 }}
        >
          {user ? user.name : ''}
        </TextInput>

        {/* Short Inputs */}
        <View style={styles.shortInputsContainer}>
          <View style={{ marginRight: 45 }}>
            <Text style={[styles.label, { marginLeft: 20 }]}>Nascimento:</Text>
            <TextInput
              style={[styles.input, { width: 'auto', paddingRight: 20 }]}
              editable={false}
              selection={{ start: 0 }}
            >
              15/10/1993
            </TextInput>
          </View>
          <View style={{ marginLeft: 45 }}>
            <Text style={[styles.label, { marginLeft: 20 }]}>Genêro:</Text>
            <TextInput
              style={[styles.input, { width: 'auto', paddingRight: 20 }]}
              editable={false}
              selection={{ start: 0 }}
            >
              Masculino
            </TextInput>
          </View>
        </View>

        {/* Email */}
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          editable={false}
          selection={{ start: 0 }}
        >
          lucas.f.dib@gmail.com
        </TextInput>

        {/* Competencias */}
        <Text style={styles.label}>Competências:</Text>
        <TextInput
          style={styles.input}
          editable={false}
          selection={{ start: 0 }}
        >
          TypeScript, NodeJS, ReactJS, React-Native
        </TextInput>

        {/* Academic */}
        <Text style={styles.label}>Competências:</Text>
        <TextInput
          style={[styles.input, { height: 'auto', padding: 10 }]}
          editable={false}
          selection={{ start: 0 }}
          multiline
        >
          FIAP - Análise e Desenvolvimento de Sistemas, 2020
        </TextInput>

        {/* Job History */}
        <Text style={styles.label}>Histórico Profissional:</Text>
        <TextInput
          style={[styles.input, { height: 'auto', padding: 10 }]}
          editable={false}
          selection={{ start: 0 }}
          multiline
        >
          Ambev - Desenvolvedor Jr. {'\n'}11/2019 - atual
        </TextInput>
      </ScrollView>
    </View>
  );
};

export default Profile;
