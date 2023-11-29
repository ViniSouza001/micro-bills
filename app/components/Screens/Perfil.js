import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import global from "../stylesheets/global.styles";
import styles from "../stylesheets/perfil.styles.js";
import Input from "./login/Input";

function Perfil({ route }) {
  const { usuarioId } = route.params;
  const [usuario, setUsuario] = useState({});
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dataEscolhida, setDataEscolhida] = useState(null);

  useEffect(() => {
    console.log("Pagina de perfil");
    infoUsuarios();
  }, []);

  const infoUsuarios = async () => {
    const response = await fetch("http://192.168.0.106:3000/infoUsuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usuarioId }),
    });

    const data = await response.json();
    setUsuario(data.usuario);
    setSelectedDate(data.usuario.nascimento);
    console.log(data.usuario);
  };

  return (
    <View style={[global.escuro, global.container]}>
      <Image
        source={require("../../assets/images/perfil2.png")}
        style={styles.img}
      />
      <View style={styles.modal}>
        <Text style={{ fontSize: 25 }}>Perfil</Text>
        <View style={styles.form}>
          <View style={styles.inputArea}>
            <Input
              label={"Nome completo"}
              value={usuario.nome}
              key={usuario.nome}
              handleChangeText={setUserName}
            />
          </View>
          <View style={styles.nascimentoArea}>
            <Text>Data de nascimento</Text>
            <TouchableOpacity style={styles.btnNasc}>
              <Text>
                {usuario.nascimento
                  ? usuario.nascimento.slice(0, 10)
                  : "dd/mm/aaaa"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputArea}>
            <Input
              isPassword={true}
              label={"Email"}
              value={usuario.email}
              key={usuario.email}
              handleChangeText={setEmail}
            />
            <View style={styles.inputArea}>
              <Input label={"Senha"} value={""} key={"Password"} />
            </View>
            <View style={styles.inputArea}>
              <Input label={"Nova senha"} value={""} key={"New password"} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Perfil;
