import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { scaleFont } from "@/utils/scaleFont";

export const styles = StyleSheet.create({
  container: {
    height: 52,
    width: "100%",
    backgroundColor: colors.gray[900],
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray[800],
    padding: 10,
    color: colors.gray[100],
    fontSize: scaleFont(16),
  },
});
