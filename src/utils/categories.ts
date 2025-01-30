import { MaterialIcons } from "@expo/vector-icons";

interface Category {
  id: string;
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export const categories: Category[] = [
  { id: "1", name: "Video", icon: "movie" },
  { id: "2", name: "Projeto", icon: "folder" },
  { id: "3", name: "Site", icon: "language" },
  { id: "4", name: "Artigo", icon: "newspaper" },
  { id: "5", name: "Curso", icon: "code" },
  { id: "6", name: "Documentação", icon: "content-paste" },
];
