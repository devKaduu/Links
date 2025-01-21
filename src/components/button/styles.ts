import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { scaleFont } from "@/utils/scale-font";

export const styles = StyleSheet.create({
  container: {
    height: 52,
    width: "100%",
    backgroundColor: colors.green[300],
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.green[900],
    fontSize: scaleFont(16),
    fontWeight: "600",
  },
});
