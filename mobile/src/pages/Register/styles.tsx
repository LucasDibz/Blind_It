import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14213D",
    paddingTop: Constants.statusBarHeight,
  },
  logo: {
    alignSelf: "center",
  },
  title: {
    fontFamily: "Ubuntu_700Bold",
    color: "#FCA311",
    fontSize: 22,
    alignSelf: "center",
  },
  inputTitle: {
    fontFamily: "Roboto_500Medium",
    color: "#FCA311",
    marginTop: 30,
    alignSelf: "baseline",
    marginLeft: "18%",
  },
  input: {
    fontFamily: "Roboto_500Medium",
    backgroundColor: "#FFF",
    width: 300,
    height: 40,
    borderRadius: 25,
    paddingLeft: 20,
  },
  inputButton: {
    backgroundColor: "#FCA311",
    borderRadius: 25,
    height: 40,
    width: 150,
    marginTop: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  inputButtonText: {
    color: "#fff",
    fontFamily: "Ubuntu_700Bold",
    fontSize: 22,

    textShadowColor: "#000",
    textShadowRadius: 5.5,
    textShadowOffset: {
      width: 0,
      height: 1.8,
    },
  },
  shortInputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%",
  },
});

export default styles;
