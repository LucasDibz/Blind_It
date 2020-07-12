import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-elements';
import { MaterialIcons as Icon } from '@expo/vector-icons';

import styles from './styles';

interface Job {
  id: number;
  logo: number;
  company: string;
  title: string;
  requirements: string;
  description: string;
  benefits: string;
  location: string;
}

const JobDetail = () => {
  //Todo - Fix Job - pegar do DB
  const job: Job = {
    id: 1,
    logo: 1,
    company: 'IBM',
    title: 'Analista Jr.',
    requirements: '• Java\n• Html\n• Css\n• Oracle SQL',
    description:
      'Otimização de código para escalabilidade, estabilidade e adição de novas funcionalidades (exemplos aplicações cliente-servidor, acesso a banco de dados, algoritmos de otimização, machine learning, frontend apps \nConhecimento e experiência em projetos anteriores com algoritmos e estrutura de dados; programação com Coreagrafia usando Eventos.Experiência em realizar suporte de aplicações em produção.',
    benefits:
      '• Contrato CLT;\n• Horário Flexível;\n• Vale Refeição;\n• Convênio Médico;\n• Convênio Odontológico;\n• Seguro de Vida;\n• Auxílio Creche;\n• Gympass.',
    location: 'São Paulo',
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="keyboard-arrow-left"
          size={30}
          color={'#14213D'}
          onPress={() => navigation.goBack()}
        />
        <Avatar
          size="large"
          rounded
          source={{
            uri: `https://picsum.photos/id/${job.logo}/200/200`,
          }}
        />
        <Text style={styles.companyName}>{job.company}</Text>
      </View>

      <ScrollView
        style={styles.jobContainer}
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.topic}>Cargo:</Text>
        <View style={[styles.buttonContainer, { margin: 0 }]}>
          <Text style={styles.jobInfo}>{job.title}</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Baixar Teste</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.topic}>Requisitos:</Text>
        <Text style={styles.jobInfo}>{job.requirements}</Text>

        <Text style={styles.topic}>Descrição:</Text>
        <Text style={styles.jobInfo}>{job.description}</Text>

        <Text style={styles.topic}>Benefícios:</Text>
        <Text style={styles.jobInfo}>{job.benefits}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Chat')}
          >
            <Text style={styles.buttonText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Enviar Teste</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default JobDetail;
