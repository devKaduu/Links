import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import style from "./styles";
import { colors } from "@/styles/colors";
import { router } from "expo-router";

export default function Add() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={style.title}>Novo</Text>
      </View>
      <Text style={style.label}>Selecione uma categoria</Text>
    </View>
  );
}
