import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const addNewGoalHandler = () => {
    setModalIsVisible(true);
  };
  const endNewGoalHandler = () => {
    setModalIsVisible(false);
  };
  const addGoalHandler = (enterGoalText, setEnterGoalText) => {
    if (!enterGoalText) {
      return;
    }
    setCourseGoals((oldCourseGoals) => [
      ...oldCourseGoals,
      { text: enterGoalText, id: Math.random().toString() },
    ]);
    setEnterGoalText("");
    endNewGoalHandler();
  };
  const deleteGoalHandler = (id) => {
    setCourseGoals((oldCourseGoals) =>
      oldCourseGoals.filter((goal) => goal.id !== id)
    );
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          color={"#a065ee"}
          onPress={addNewGoalHandler}
          title="Add New Goal"
        />
        <GoalInput
          visible={modalIsVisible}
          onCancle={endNewGoalHandler}
          onAddGoal={addGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem onDeleteGoal={deleteGoalHandler} itemData={itemData} />
            )}
            keyExtractor={(item, index) => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 5,
  },
});
