import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

const GoalInput = ({ onAddGoal, visible, onCancle }) => {
  const [enterGoalText, setEnterGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnterGoalText(enteredText);
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          value={enterGoalText}
          placeholder="Your Course Goal!"
        />
        <View style={styles.btnGroup}>
          <Button onPress={() => onCancle()} title="Cancel" color={"#f31282"} />
          <Button
            onPress={() => onAddGoal(enterGoalText, setEnterGoalText)}
            title="Add Goal"
            color={"#b1a0f0"}
          />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cccccc",
    width: "100%",
    padding: 16,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 8,
  },
  btnGroup: {
    marginTop: 15,
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
