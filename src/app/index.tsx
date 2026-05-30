import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Notes from "@/components/Notes";
import { useWindowDimensions } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Search from "@/components/Search";
import { Children, useState } from "react";
import { darkTheme, lightTheme } from "@/theme";

const HomeScreen = () => {
  const [isDark, setIsDark] = useState(true);

  const theme = isDark ? darkTheme : lightTheme;

  const { height, width } = useWindowDimensions();

  const NOTES = [1, 2, 3, 3, 2, 4, 2, 4, 2, 4, 2, 4];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      
      {/* TOP HEADER */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>
          MY NOTES
        </Text>

        <Pressable onPress={() => setIsDark(!isDark)}>
          <FontAwesome5
            name={isDark ? "moon" : "sun"}
            size={26}
            color={theme.primary}
          />
        </Pressable>
      </View>

      {/* SECOND TOP VIEW */}
      <View style={[styles.tabs, { backgroundColor: theme.card }]}>
        
        <View style={[styles.tabItem, { backgroundColor: theme.bg }]}>
          <MaterialCommunityIcons
            name="format-list-bulleted"
            size={22}
            color={theme.primary}
          />
          <Text style={[styles.tabText, { color: theme.text }]}>
            Notes
          </Text>
        </View>

        <View style={styles.tabItem}>
          <FontAwesome name="pencil-square-o" size={22} color={theme.text} />
          <Text style={[styles.tabText, { color: theme.text }]}>
            Add
          </Text>
        </View>
      </View>

      {/* SEARCH */}
      <Search theme={theme} />

      {/* NOTES LIST */}
      <FlatList
        style={{ backgroundColor: theme.card, borderRadius: 18 }}
        data={NOTES}
        renderItem={() => <Notes theme={theme} />}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        contentContainerStyle={{ margin: 10 }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
  },

  tabs: {
    borderRadius: 14,
    padding: 5,
    flexDirection: "row",
    gap: 5,
  },

  tabItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 14,
    justifyContent: "center",
  },

  tabText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});