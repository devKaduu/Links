import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { style } from "./styles";
import { colors } from "@/styles/colors";

interface LinksProps {
  name: string;
  url: string;
  onDetails: VoidFunction;
}

export function Link({ name, url, onDetails }: LinksProps) {
  return (
    <View style={style.container}>
      <View style={style.details}>
        <Text style={style.name} numberOfLines={1}>
          {name}
        </Text>
        <Text style={style.url} numberOfLines={1}>
          {url}
        </Text>
      </View>
      <TouchableOpacity onPress={onDetails}>
        <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]} />
      </TouchableOpacity>
    </View>
  );
}
