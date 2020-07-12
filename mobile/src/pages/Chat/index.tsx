import React, { useState, useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import { GiftedChat } from 'react-native-gifted-chat';

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

interface Message {
  _id: number;
  text: string;
  createdAt: Date;
  user: {
    _id: number;
    name: string;
    avatar: string;
  };
}

const Chat = () => {
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

  const [messages, setMessages] = useState<Message[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Olá Candidato 1337!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://picsum.photos/200/200',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

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

      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        messagesContainerStyle={{ backgroundColor: '#14213D' }}
      />
    </View>
  );
};

export default Chat;
