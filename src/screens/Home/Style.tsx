import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    flexDirection: "column",
    alignSelf: "center",
    margin: 20,
  },
  inputContainer: {
    width: "80%",
  },
  buttonContainer: {
    width: "80%",
    margin: 20,
  },
  footerContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
});

export default styles;
