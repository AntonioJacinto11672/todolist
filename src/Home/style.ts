import { StyleSheet } from "react-native";
import colors from "../../colors/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray700,
    alignItems: "center",
  },
  logo: {
    alignItems: "center",
    height: 32,
    top: 70,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.gray400,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: colors.gray500,
    top: 142,
    left: 24,
    gap: 4,
  },
});
