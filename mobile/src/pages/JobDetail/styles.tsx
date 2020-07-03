import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14213D',
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    backgroundColor: '#FCA311',
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingRight: 60,
    borderRadius: 7,
  },
  companyName: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 24,
    color: '#fff',

    textShadowColor: '#000',
    textShadowRadius: 5.5,
    textShadowOffset: {
      width: 0,
      height: 1.8,
    },
  },
  jobContainer: {
    backgroundColor: '#ddd',
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  topic: {
    fontFamily: 'Roboto_400Regular',
    color: '#14213D',
    fontSize: 14,
    marginTop: 20,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  jobInfo: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#FCA311',
    width: 110,
    height: 40,
    borderRadius: 50,

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5.5,
    elevation: 9,
  },
  buttonText: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 16,
    color: '#000',
  },
});
