import { scaleFont } from "@/utils/scaleFont";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  name: {
    fontSize: scaleFont(16),
    fontWeight: 600,
  },
});
