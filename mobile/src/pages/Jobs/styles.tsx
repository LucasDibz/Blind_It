import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14213D',
    paddingTop: 20 + Constants.statusBarHeight,
  },

  searchBar: {
    opacity: 0.8,
    backgroundColor: '#14213D',
  },

  ballon: {
    alignSelf: 'center',
    width: 330,
    height: 130,
    backgroundColor: '#FCA311',
    borderRadius: 20,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  flatList: {
    backgroundColor: '#ddd',
  },

  avatarContainer: {
    alignSelf: 'center',
    marginLeft: '10%',
  },

  jobsDescriptionContainer: {
    width: '60%',
    marginTop: 20,
  },

  jobDescription: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 16,
    color: '#fff',
    marginTop: 10,

    textShadowColor: '#000',
    textShadowRadius: 5.5,
    textShadowOffset: {
      width: 0,
      height: 1.8,
    },
  },
});

export default styles;
