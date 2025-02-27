import { StyleSheet } from "react-native";
import colors from "../../colors/color";

export const styles = StyleSheet.create({
  button: {
    width: 52,
    height: 52,
    borderRadius: 5,
    backgroundColor: colors.blueDark,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.gray100,
    fontSize: 24,
    marginRight: 10,
  },
});
