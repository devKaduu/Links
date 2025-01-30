import { Image, View, TouchableOpacity, FlatList, Modal, Text, Alert, Linking } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import { colors } from "@/styles/colors";

import { categories } from "@/utils/categories";

import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { getPersistedDataLinks, LinksStorage, removeDataLink } from "@/utils/storage";

export default function Index() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [category, setCategory] = useState<string>(categories[0].name);
  const [links, setLinks] = useState<LinksStorage[]>([]);
  const [selectedLink, setSelectedLink] = useState<LinksStorage>({} as LinksStorage);

  console.log(selectedLink);

  async function getLinks() {
    try {
      const response = (await getPersistedDataLinks()).filter((link) => link.category === category);
      setLinks(response);
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao recuperar os links");
    }
  }

  function handleDetails(selected: LinksStorage) {
    setShowModal(true);
    setSelectedLink(selected);
  }

  async function handleRemoveLink() {
    try {
      await removeDataLink(selectedLink.id);
      getLinks();
      setShowModal(false);
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao remover o link");
    }
  }

  async function handleOpenLink() {
    try {
      await Linking.openURL(selectedLink.url);
      setShowModal(false);
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao abrir o link");
    }
  }

  useFocusEffect(
    useCallback(() => {
      getLinks();
    }, [category])
  );

  return (
    <View style={[styles.container, showModal && styles.modalOpen]}>
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
        renderItem={({ item }) => <Link name={item.name} url={item.url} onDetails={() => handleDetails(item)} />}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={showModal} animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>{selectedLink.category}</Text>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalLinkName}>{selectedLink.name}</Text>
            <Text style={styles.modalUrl}>{selectedLink.url}</Text>

            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary" onPress={handleRemoveLink} />
              <Option name="Abrir" icon="language" onPress={handleOpenLink} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
