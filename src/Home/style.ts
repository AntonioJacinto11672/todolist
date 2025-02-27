import { StyleSheet } from "react-native";
import colors from "../../colors/color";

export const styles = StyleSheet.create({
  main: {
    width: "100%",
    backgroundColor: colors.gray600,
  },
  header: {
    backgroundColor: colors.gray700,
    height: 173,
  },
  container: {
    backgroundColor: "red",
  },
  logo: {
    backgroundColor: colors.gray700,
    alignItems: "center",
    margin: 50,
  },
  form: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    gap: 5,
  },
  content: {
    flex: 1,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  contentCount: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
