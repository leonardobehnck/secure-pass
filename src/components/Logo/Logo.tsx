import { Image } from "react-native";
import { styles } from "./Style";

export const Logo = () => {
  return <Image source={require("../../../assets/logo.png")} style={styles.logo} />;
};
