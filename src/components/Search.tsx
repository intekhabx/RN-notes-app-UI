import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {ITheme} from "@/theme"

interface ISearchProps {
  theme: ITheme
}

export default function SearchBar({theme}: ISearchProps) {
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color={theme.primary} />

      <TextInput
        placeholder="Search notes..."
        placeholderTextColor={theme.muted}
        style={styles.input}
      />

      <Ionicons name="mic-outline" size={20} color={theme.muted} />
    </View>
  );
}


const createStyles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.card,
      margin: 8,
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: 18,

      borderWidth: 1,
      borderColor: theme.border,

      shadowColor: "#000",
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 5,
    },

    input: {
      flex: 1,
      marginLeft: 10,
      color: theme.text,
      fontSize: 15,
    },
  });