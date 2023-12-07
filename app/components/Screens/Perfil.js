import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import global from "../stylesheets/global.styles";
import styles from "../stylesheets/perfil.styles.js";
import Input from "./login/Input";
import ButtonForm from "./login/ButtonForm.js";
import { showMessage } from "react-native-flash-message";

function Perfil({ route }) {
  const { usuarioId } = route.params;
  const [usuario, setUsuario] = useState(null);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [revelar, setRevelar] = useState(false);
  const [revelarC, setRevelarC] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dataEscolhida, setDataEscolhida] = useState(null);

  useEffect(() => {
    infoUsuarios();
  }, []);

  const infoUsuarios = async () => {
    const response = await fetch("http://192.168.1.11:3000/infoUsuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usuarioId }),
    });

    const data = await response.json();
    const { nascimento, email, nome } = data.usuario;
    setUsuario(data.usuario);
    setSelectedDate(new Date(nascimento));
    setEmail(email);
    setUserName(nome);
  };

  const handleDateChange = (event, date) => {
    setSelectedDate(date);
    setDataEscolhida(selectedDate);
    setShowDatePicker(false);
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const showFlashMessage = (message, typeMessage) => {
    return showMessage({
      message: message || "A mensagem está vazia",
      type: typeMessage || "default",
    });
  };

  const update = async () => {
    // console.log({ userName, email, password, newPassword });
    const body = {
      usuarioId,
      nome: userName,
      email: email,
      nascimento: new Date(selectedDate),
      senha: password,
      novaSenha: newPassword,
    };

    const response = await fetch("http://192.168.1.11:3000/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
    if (data.success == true) {
      showFlashMessage("Dados atualizados com sucesso!", "success");
    } else if (data.erros) {
      data.erros.forEach((erro) => {
        showFlashMessage(erro.texto, "danger");
      });
    } else {
      showFlashMessage(data.message, "danger");
    }
  };

  return (
    <View style={[global.escuro, global.container]}>
      {!usuario ? (
        <View style={global.loadingView}>
          <Image
            style={global.loading}
            source={require("../../assets/images/loading.gif")}
          />
        </View>
      ) : (
        <>
          <Image
            source={require("../../assets/images/perfil2.png")}
            style={styles.img}
          />
          <View style={styles.modal}>
            <ScrollView
              style={{
                width: "100%",
              }}
            >
              <View style={styles.form}>
                <Text style={{ fontSize: 25 }}>Perfil</Text>
                <View style={{ gap: 5 }}>
                  <View style={styles.inputArea}>
                    <Input
                      label={"Nome completo"}
                      value={userName}
                      handleChangeText={setUserName}
                    />
                  </View>
                  <View style={styles.nascimentoArea}>
                    <Text>Data de nascimento</Text>
                    <TouchableOpacity
                      onPress={openDatePicker}
                      style={styles.btnNasc}
                    >
                      <Text>
                        {selectedDate
                          ? selectedDate.toLocaleDateString()
                          : "dd/mm/aaaa"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {showDatePicker && (
                    <DateTimePicker
                      value={selectedDate}
                      mode="date"
                      display="default"
                      onChange={handleDateChange}
                    />
                  )}
                  <View style={styles.inputArea}>
                    <Input
                      label={"Nome de usuário"}
                      value={email}
                      handleChangeText={setEmail}
                    />
                    <View style={styles.inputArea}>
                      <Input
                        label={"Senha"}
                        value={password}
                        isPassword={true}
                        handleChangeText={setPassword}
                        secureTextEntry={revelar ? false : true}
                        revelar={revelar}
                        setRevelar={setRevelar}
                      />
                    </View>
                    <View style={styles.inputArea}>
                      <Input
                        label={"Nova senha"}
                        value={newPassword}
                        handleChangeText={setNewPassword}
                        isPassword={true}
                        revelar={revelarC}
                        setRevelar={setRevelarC}
                        secureTextEntry={revelarC ? false : true}
                      />
                    </View>
                    <ButtonForm handleOnPress={update} text={"Alterar dados"} />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </>
      )}
    </View>
  );
}

export default Perfil;
