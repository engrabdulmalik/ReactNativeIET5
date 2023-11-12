import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goalList, setGoalList] = useState([]);
  const goalTextHandler = (event) => {
    setEnteredText(event);
  };
  const addGoalHandler = () => {
    setGoalList((prevGoals) => [...prevGoals, enteredText]);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter goal"
          onChangeText={goalTextHandler}
        />
        <Button title="Tap me" onPress={addGoalHandler} />
      </View>
      <View style={styles.listContainer}>
        {goalList.map((goal) => (
          <Text>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "#cccccc",
  },
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 10,
  },
  listContainer: {
    flex: 4,
    paddingTop: 20,
    justifyContent: "flex-start",
  },
});
