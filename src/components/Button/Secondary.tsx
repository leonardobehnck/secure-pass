import { Text, View, Button, Pressable } from "react-native";
import { styles } from "./Style";
import { ButtonProps } from "./buttonProps";

export default function Secondary(props: ButtonProps) {
  return (
    <>
      <Pressable style={styles.secondaryContainer} onPress={props.onPress}>
        <Text style={styles.secondaryText}>{props.title}</Text>
      </Pressable>
    </>
  );
}
