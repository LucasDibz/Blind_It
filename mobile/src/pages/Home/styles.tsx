import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14213D",
    paddingTop: 20 + Constants.statusBarHeight,
  },

  ballon: {
    width: "85%",
    height: 160,
    backgroundColor: "#FCA311",
    borderRadius: 20,
    alignItems: "center",
    marginTop: 30,
  },

  profileContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },

  profileStatus: {
    alignItems: "center",
  },

  profileText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    marginLeft: 20,
  },

  profileProgressBar: {
    height: 10,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 25,
  },

  profileSeparator: {
    backgroundColor: "#000",
    height: 1,
    width: "85%",
    marginTop: 15,
  },

  profileHint: {
    fontFamily: "Roboto_400Regular",
    color: "#386692",
    fontSize: 11,
    margin: 10,
    paddingLeft: 30,
  },

  recommendedJobsBallon: {
    width: "100%",
    marginTop: 10,
  },

  ballonTitle: {
    fontFamily: "Ubuntu_700Bold",
    fontSize: 20,
    color: "#FFF",
    marginLeft: 20,
  },

  recommendedJobsList: {
    height: 90,
    marginTop: 10,
  },

  recommendedJobsTitle: {
    color: "#386692",
    marginLeft: 20,
    marginTop: 10,
  },

  ballonLink: {
    fontFamily: "Ubuntu_700Bold",
    fontSize: 14,
    color: "#FFF",
    marginLeft: "70%",
  },

  companiesHiringBallon: {
    width: "100%",
    marginTop: 10,
  },

  companyImg: {
    width: 90,
    height: 90,
    borderRadius: 20,
    marginLeft: 15,
    marginTop: 20,
  },
});

export default styles;
