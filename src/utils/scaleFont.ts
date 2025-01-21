import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const scaleFont = (size: number) => {
  const scale = Math.min(width / 375, height / 667); // 375x667 é o tamanho base de referência (iPhone 6)
  return Math.round(size * scale);
};
