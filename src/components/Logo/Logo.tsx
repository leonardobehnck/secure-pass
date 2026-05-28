import { Image } from "react-native";
import { styles } from "./Style";
export const Logo = () => {
  return <Image source={require("./logo.png")} style={styles.logo} />;
};
