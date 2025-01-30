import { Image, View, TouchableOpacity, FlatList, Modal, Text, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import { colors } from "@/styles/colors";

import { categories } from "@/utils/categories";

import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { getPersistedDataLinks, LinksStorage } from "@/utils/storage";

export default function Index() {
  const [category, setCategory] = useState<string>(categories[0].name);
  const [links, setLinks] = useState<LinksStorage[]>([]);

  async function getLinks() {
    try {
      const response = (await getPersistedDataLinks()).filter((link) => link.category === category);
      setLinks(response);
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao recuperar os links");
    }
  }

  useFocusEffect(
    useCallback(() => {
      getLinks();
    }, [category])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity onPress={() => router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories onChange={setCategory} selected={category} />

      <FlatList
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Link name={item.name} url={item.url} onDetails={() => {}} />}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={false}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Curso</Text>
              <TouchableOpacity>
                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalLinkName}>Google</Text>
            <Text style={styles.modalUrl}>https://www.google.com.br/?hl=pt-B</Text>

            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary" />
              <Option name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
