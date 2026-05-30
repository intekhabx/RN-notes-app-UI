import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ITheme } from "@/theme";

interface INotesProp {
  title?: string,
  description?: string,
  tag?: string,
  theme?: ITheme
}

export default function Notes({
  title = "Notes app UI project",
  description = "description of the notes project",
  tag = "Work",
  theme
}: INotesProp) {
  const styles = createStyles(theme);

  return (
    <View style={styles.card}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <Text style={styles.title}>{title}</Text>

        <Feather name="more-vertical" size={18} color={theme?.muted} />
      </View>

      {/* Description */}
      <Text style={styles.description}>{description}</Text>

      {/* Bottom Row */}
      <View style={styles.bottomRow}>
        {/* Tag */}
        <View style={styles.tag}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>

        {/* Star Icon */}
        <Feather name="star" size={16} color={theme?.primary} />
      </View>
    </View>
  );
}



const createStyles = (theme: INotesProp["theme"]) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme?.card,
      padding: 16,
      borderRadius: 20,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: theme?.border,

      shadowColor: "#000",
      shadowOpacity: 0.4,
      shadowRadius: 12,
      elevation: 6,
    },

    topRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8,
    },

    title: {
      color: theme?.text,
      fontSize: 17,
      fontWeight: "700",
    },

    description: {
      color: theme?.muted,
      fontSize: 14,
      lineHeight: 20,
      marginBottom: 12,
    },

    bottomRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    tag: {
      backgroundColor: theme?.primary,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 12,
    },

    tagText: {
      color: theme?.text,
      fontSize: 12,
    },
  });