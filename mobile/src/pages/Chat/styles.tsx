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
});
