import { StyleSheet } from "react-native";

import { colors } from "../../styles/colors";
import { scaleFont } from "@/utils/scaleFont";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  title: {
    color: colors.gray[200],
    fontSize: scaleFont(24),
    fontWeight: "600",
  },
  label: {
    color: colors.gray[400],
    fontSize: scaleFont(14),
    paddingHorizontal: 24,
  },
  form: {
    padding: 24,
    gap: 16,
  },
});

export default styles;
