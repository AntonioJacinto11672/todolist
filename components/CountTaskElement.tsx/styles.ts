import { StyleSheet } from "react-native";
import colors from "../../colors/color";

export const styles = StyleSheet.create({
  contentCountElement: {
    flexDirection: "row",
    gap: 4,
  },
  contentCountElementText: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: "bold",
  },
  contentCountElementButton: {
    width: 25,
    height: 19,
    backgroundColor: colors.gray400,
    borderRadius: 9,
    alignItems: "center",
  },
  contentCountElementTextNumber: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.gray100,
  },
});
