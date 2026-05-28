import { TextInput } from "react-native";
import { styles } from "./Style";

interface InputTextProps {
  value: string;
  placeholder?: string;
}

export default function InputText(props: InputTextProps) {
  return (
    <TextInput
      style={styles.input}
      value={props.value}
      placeholder={props.placeholder}
      editable={false}
    />
  );
}
