import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import { Avatar, SearchBar } from "react-native-elements";

import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

//todo - Fix Types
interface Job {
  id: number;
  logo: number;
  company: string;
  title: string;
  //description: string;
  location: string;
}

const Jobs = () => {
  //Todo - Fix jobs
  const jobs: Job[] = [
    {
      id: 1,
      logo: 1,
      company: "IBM",
      title: "Analista Jr.",
      location: "São Paulo",
    },
    {
      id: 2,
      logo: 10,
      company: "FIAP",
      title: "Estagiário",
      location: "São Paulo",
    },
    {
      id: 3,
      logo: 20,
      company: "FIAP",
      title: "Desenvolvedor Jr.",
      location: "São Paulo",
    },
    {
      id: 4,
      logo: 40,
      company: "FIAP",
      title: "Desenvolvedor Pleno",
      location: "São Paulo",
    },
    {
      id: 5,
      logo: 80,
      company: "AMBEV",
      title: "Desenvolvedor Jr.",
      location: "São Paulo",
    },
    {
      id: 6,
      logo: 160,
      company: "Z-TECH",
      title: "Desenvolvedor",
      location: "São Paulo",
    },
  ];

  const navigator = useNavigation();

  function renderJobs(job: Job) {
    return (
      <TouchableOpacity style={styles.ballon} activeOpacity={0.7}>
        <View style={styles.avatarContainer}>
          <Avatar
            size="large"
            rounded
            source={{
              uri: `https://picsum.photos/id/${job.logo}/200/200`,
            }}
          />
        </View>
        <View style={styles.jobsDescriptionContainer}>
          <Text style={styles.jobDescription}>{job.company}</Text>
          <Text style={styles.jobDescription}>{job.title}</Text>
          <Text style={styles.jobDescription}>{job.location}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Buscar Vagas"
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchBar}
      />
      <FlatList<Job>
        keyExtractor={(item) => String(item.id)}
        data={jobs}
        renderItem={({ item }) => renderJobs(item)}
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
      ></FlatList>
    </View>
  );
};

export default Jobs;
