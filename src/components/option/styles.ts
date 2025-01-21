import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { scaleFont } from "@/utils/scaleFont";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  primaryTitle: {
    color: colors.green[300],
    fontSize: scaleFont(16),
    fontWeight: "600",
  },
  secondaryTitle: {
    color: colors.gray[400],
    fontSize: scaleFont(16),
  },
});
