import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";
import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function Add() {
  const [category, setCategory] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  function handleAdd() {
    if (!category) {
      return Alert.alert("Categoria", "Selecione uma categoria antes de adicionar");
    }
    if (!name.trim()) {
      return Alert.alert("Nome", "Insira um nome para o link");
    }
    if (!url.trim()) {
      return Alert.alert("URL", "Insira um URL para o link");
    }
    console.log({
      name,
      url,
      category,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.label}>Selecione uma categoria</Text>

      <Categories onChange={setCategory} selected={category} />

      <View style={styles.form}>
        <Input placeholder="Nome da URL" onChangeText={setName} autoCorrect={false} />
        <Input placeholder="URL" onChangeText={setUrl} autoCorrect={false} />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  );
}
