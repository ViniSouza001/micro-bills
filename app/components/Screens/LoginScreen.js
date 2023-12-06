import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Keyboard } from "react-native";
import styles from "../stylesheets/LoginScreen.styles";
import global from "../stylesheets/global.styles";
import ButtonForm from "./login/ButtonForm";
import Input from "./login/Input";
import { showMessage } from "react-native-flash-message";

function LoginScreen({ navigation, route }) {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [revelar, setRevelar] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [usuarioId, setUsuarioId] = useState(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // O teclado está visível
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // O teclado está oculto
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const showFlashMessage = (message, typeMessage) => {
    return showMessage({
      message: message || "A mensagem está vazia",
      type: typeMessage || "default",
    });
  };

  const login = async () => {
    const body = { email, senha };
    setUsuarioId(null);
    try {
      const response = await fetch("http://192.168.0.106:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (data.success) {
        showFlashMessage("Login realizado com sucesso", "success");
        setUsuarioId(data.user._id);
      } else {
        showFlashMessage(data.message.message, "danger");
      }
    } catch (error) {
      console.log("Erro durante o login: " + error);
    }
  };

  useEffect(() => {
    if (usuarioId !== null) {
      navigation.navigate("Home", { usuarioId });
    }
  }, [usuarioId]);

  const criarConta = () => {
    navigation.navigate("Criar conta");
  };

  return (
    <View style={[global.escuro, styles.bodyContainer]}>
      {!isKeyboardVisible && (
        <Image
          source={require("../../assets/images/logo.png")}
          style={global.logo}
        />
      )}
      <View style={styles.form}>
        <View style={styles.formContainer}>
          <Input
            label="Usuario"
            handleChangeText={setEmail}
            value={email}
            secureTextEntry={false}
          />
          <Input
            label="Senha"
            handleChangeText={setSenha}
            value={senha}
            secureTextEntry={revelar ? false : true}
            isPassword={true}
            revelar={revelar}
            setRevelar={setRevelar}
          />
        </View>
        <TouchableOpacity onPress={criarConta}>
          <Text style={styles.azul}>Criar conta</Text>
        </TouchableOpacity>
        <View style={styles.viewButton}>
          <ButtonForm text={"Entrar"} key={"Entrar"} handleOnPress={login} />
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;
