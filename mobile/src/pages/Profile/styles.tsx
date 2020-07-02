import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingTop: 20 + Constants.statusBarHeight,
  },

  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },

  label: {
    fontFamily: 'Ubuntu_700Bold',
    marginLeft: 50,
    marginTop: 20,
  },

  input: {
    alignSelf: 'center',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    width: 330,
    height: 35,
    paddingLeft: 20,
    paddingRight: 20,
    color: '#fff',
    backgroundColor: '#FCA311',
    borderRadius: 25,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5.5,
    elevation: 9,

    overflow: 'hidden',
  },
  shortInputsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  shortTextInput: {
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
});

export default styles;
