import { scaleFont } from "@/utils/scale-font";
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
