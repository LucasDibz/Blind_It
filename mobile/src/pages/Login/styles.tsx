import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14213D",
    paddingTop: 20 + Constants.statusBarHeight,
  },
  logo: {
    alignSelf: "center",
    marginTop: 80,
  },
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  inputPlaceholder: {
    color: "#FCA311",
    fontFamily: "Roboto_500Medium",
    fontSize: 18,
    marginRight: 155,
    marginTop: 20,
  },
  input: {
    height: 40,
    width: 250,
    paddingLeft: 20,
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  inputButton: {
    backgroundColor: "#FCA311",
    borderRadius: 25,
    height: 40,
    width: 150,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  inputButtonText: {
    color: "#fff",
    fontFamily: "Ubuntu_700Bold",
    fontSize: 22,
  },
  linksContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  linksText: {
    color: "#FCA311",
    fontFamily: "Roboto_500Medium",
    marginTop: 20,
  },
});

export default styles;
