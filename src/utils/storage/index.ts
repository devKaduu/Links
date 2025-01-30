/*
 *  chave: valor
 *  name: "Carlos"
 *
 *  links: [{name: 'Google', url: 'https://www.google.com.br'}, {}, {}]
 *
 *  Para salvar uma lista, converte para uma string e para recuperar os dados, converte para um objeto
 */

import AsyncStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEY = "links-storage";

export interface LinksStorage {
  id: string;
  name: string;
  url: string;
  category: string;
}

export async function getPersistedDataLinks(): Promise<LinksStorage[]> {
  const storage = await AsyncStorage.getItem(LINKS_STORAGE_KEY);

  const response = storage ? JSON.parse(storage) : [];

  return response;
}

export async function persistDataLinks(newLink: LinksStorage) {
  try {
    const existingLinksInStorage = await getPersistedDataLinks();

    const name = newLink.name;

    if (existingLinksInStorage.find((link) => link.name === name)) {
      throw new Error("Link já existente");
    }

    const updated = JSON.stringify([...existingLinksInStorage, newLink]);

    await AsyncStorage.setItem(LINKS_STORAGE_KEY, updated);
  } catch (error) {
    throw error;
  }
}

export async function removeDataLink(id: string) {
  try {
    const links = await getPersistedDataLinks();

    const updated = links.filter((link) => link.id !== id);

    await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    throw error;
  }
}
