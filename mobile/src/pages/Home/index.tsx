import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Animated,
  StyleSheet,
} from 'react-native';
import { Avatar } from 'react-native-elements';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface User {
  avatar_url: string;
}

const Home = () => {
  //Todo - Fix companies
  const companies = [1, 200, 300, 400, 500];

  const navigator = useNavigation();

  const [user, setUser] = useState<User>();

  //Get User Information
  useEffect(() => {
    fetch('https://api.github.com/users/lucasdibz').then((res) =>
      res.json().then((res) => setUser(res))
    );
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: 'center' }}
      showsVerticalScrollIndicator={false}
    >
      {/* Profile Ballon */}
      <View style={styles.ballon}>
        <View style={styles.profileContainer}>
          <Avatar
            size="large"
            rounded
            source={{
              uri: user
                ? user.avatar_url
                : 'https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif',
            }}
          />
          <View style={styles.profileStatus}>
            <Text style={styles.profileText}>Perfil</Text>
            <View style={styles.profileProgressBar}>
              <Animated.View
                style={
                  (StyleSheet.absoluteFill,
                  {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    borderRadius: 25,
                    backgroundColor: '#000',
                    width: '70%', //Mudar Progresso da Barra
                  })
                }
              />
            </View>
            <Text style={styles.profileText}>70% Concluido</Text>
          </View>
        </View>
        <View style={styles.profileSeparator} />
        <Text
          style={styles.profileHint}
          onPress={() => navigator.navigate('Profile')}
        >
          Adicione mais competências para aumentar a quantidade de vagas
          disponíveis!
        </Text>
      </View>

      {/* Recommended Jobs Ballon */}
      <View style={styles.ballon}>
        <View style={styles.recommendedJobsBallon}>
          <Text style={styles.ballonTitle}>Vagas Recomendadas</Text>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.recommendedJobsList}
          >
            {/* todo-Fix Jobs List */}
            <Text style={styles.recommendedJobsTitle}>
              Analista de sistemas junior - IBM
            </Text>
            <Text style={styles.recommendedJobsTitle}>
              Desenvolvedor Pleno - FIAP
            </Text>
            <Text style={styles.recommendedJobsTitle}>
              Desenvolvedor Pleno - AMBEV
            </Text>
            <Text style={styles.recommendedJobsTitle}>
              Desenvolvedor Jr - FIAP
            </Text>
            <Text style={styles.recommendedJobsTitle}>Estagiário - FIAP</Text>
            <Text style={styles.recommendedJobsTitle}>DevOps - AMBEV</Text>
          </ScrollView>
        </View>
        <Text
          style={styles.ballonLink}
          onPress={() => navigator.navigate('Jobs')}
        >
          ver mais
        </Text>
      </View>

      {/* Companies Ballon */}
      <View style={styles.ballon}>
        <View style={styles.companiesHiringBallon}>
          <Text style={styles.ballonTitle}>Empresas Contratando</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          >
            {companies.map((companyLogo) => (
              <TouchableOpacity key={companyLogo}>
                <Image
                  style={styles.companyImg}
                  source={{
                    uri: `https://picsum.photos/id/${companyLogo}/200/200`,
                  }}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
