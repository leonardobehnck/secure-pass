import { Text, View, Button, Pressable } from "react-native";
import { styles } from "./Style";
import { ButtonProps } from "./buttonProps";

export default function Primary(props: ButtonProps) {
  return (
    <>
      <Pressable style={styles.primaryContainer} onPress={props.onPress}>
        <Text style={styles.primaryText}>{props.title}</Text>
      </Pressable>
    </>
  );
}
