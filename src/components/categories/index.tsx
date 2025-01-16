import { FlatList } from "react-native";

import { style } from "./styles";
import { categories } from "@/utils/categories";
import { Category } from "@/components/category";

export const Categories = () => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category name={item.name} icon={item.icon} isSelected={false} />
      )}
      horizontal
      style={style.container}
      contentContainerStyle={style.content}
      showsHorizontalScrollIndicator={false}
    />
  );
};
