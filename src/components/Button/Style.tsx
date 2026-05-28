import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  primaryContainer: {
    backgroundColor: "#00a5e0",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  secondaryContainer: {
    backgroundColor: "#e8e8e8",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  primaryText: {
    textAlign: "center",
    fontSize: 14,
    color: "#fff",
  },
  secondaryText: {
    textAlign: "center",
    fontSize: 14,
    color: "fff",
  },
});
