import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./Style";
import { Logo } from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";
import InputText from "../../components/InputText/InputText";
import { generatePassword } from "../../services/passwordService";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Clipboard from "expo-clipboard";
import Primary from "../../components/Button/Primary";
import Secondary from "../../components/Button/Secondary";

export default function Home() {
  const [pass, setPass] = useState("");

  function handleGenerate() {
    setPass(generatePassword());
  }

  function handleCopy() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <StatusBar style="dark" />
        <View style={styles.inputContainer}>
          <InputText value={pass} placeholder="Sua senha aparecerá aqui" />
        </View>
        <View style={styles.buttonContainer}>
          <Secondary title="Gerar" onPress={handleGenerate} />
        </View>
        <View style={styles.buttonContainer}>
          <Primary title="Copiar" onPress={handleCopy} />
        </View>
        <View style={styles.footerContainer}>
          <Footer />
        </View>
      </View>
    </SafeAreaView>
  );
}
