import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ itemData, onDeleteGoal }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>
        {itemData.index + 1} . {itemData.item.text}
      </Text>
      <Pressable
        android_ripple={styles.pressItem}
        onPress={() => onDeleteGoal(itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <Text style={styles.delText}>del</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalText: {
    color: "white",
  },
  pressItem: {
    backgroundColor: "red",
    borderRadius: 5,
  },
  delText: {
    borderWidth: 1,
    padding: 5,
    borderColor: "red",
    color: "white",
    borderRadius: 5,
  },
});
