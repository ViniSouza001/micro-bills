import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";
import { Picker as Selector } from "@react-native-picker/picker";
import { showMessage } from "react-native-flash-message";
import styles from "./stylesheets/modal.styles";
import ButtonForm from "./Screens/login/ButtonForm";

function Modal({ setModalVisible, usuarioId, listarTransacoes, fetchValores }) {
  const [formaPagto, setFormaPagto] = useState("Dinheiro");
  const [quantidade, setQuantidade] = useState(0);
  const [valorUnitario, setValorUnitario] = useState(0);
  const [inputMoeda, setInputMoeda] = useState("0");
  const [tipo, setTipo] = useState("");
  const [item, setItem] = useState("");

  const showFlashMessage = (message, typeMessage) => {
    return showMessage({
      message: message || "A mensagem está vazia",
      type: typeMessage || "default",
    });
  };

  const novaTransacao = async () => {
    const body = {
      usuarioId: usuarioId,
      valorUnitario: valorUnitario,
      item: item,
      quantidade: quantidade,
      tipo: tipo,
      formaPagto: formaPagto,
    };
    const info = await fetch("http://192.168.1.11:3000/cadastrarTransacao", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await info.json();
    console.log(data);

    if (data.success) {
      showFlashMessage("Transação criada com sucesso", "success");
      setTimeout(() => {
        setModalVisible(false);
        listarTransacoes;
        fetchValores;
      }, 1000);
    } else {
      const { erros } = data;
      console.log(erros);
      erros.forEach((error) => {
        showFlashMessage(error.texto, "danger");
      });
    }
  };

  return (
    <View style={styles.fundoPreto}>
      <View style={styles.modal}>
        <View style={styles.inputArea}>
          <Text style={styles.label}>Item:</Text>
          <TextInput
            style={[styles.textInput, styles.bordas]}
            onChangeText={(value) => {
              setItem(value);
            }}
          />
        </View>
        <View style={{ gap: 30, flexDirection: "row", marginTop: 10 }}>
          <View>
            <Text style={styles.label}>Quantidade</Text>
            <TextInput
              keyboardType="numeric"
              maxLength={2}
              onChangeText={(value) => {
                setQuantidade(value);
              }}
              style={[styles.textInput, styles.bordas]}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.label}>Valor unitário</Text>
            <TextInputMask
              type={"money"}
              style={[[styles.textInput, styles.bordas], { width: 90 }]}
              value={valorUnitario}
              maxLength={10}
              onChangeText={(value) => {
                setInputMoeda(value);
                value = value.replace("R$", "");
                value = value.replace(".", "");
                value = value.replace(",", ".");
                setValorUnitario(value);
              }}
            />
          </View>
        </View>
        <View style={[styles.inputArea, styles.mt]}>
          <Text style={styles.label}>Forma de Pagamento:</Text>
          <View style={[styles.vwSelect, styles.bordas]}>
            <Selector
              style={{ width: "100%", height: 40 }}
              selectedValue={formaPagto}
              onValueChange={(item, indexItem) => {
                setFormaPagto(item);
              }}
            >
              <Selector.Item key={1} value="Dinheiro" label="Dinheiro" />

              <Selector.Item key={2} value="Cartao" label="Cartão" />

              <Selector.Item key={3} value="Pix" label="Pix" />
            </Selector>
          </View>
        </View>
        <View style={{ flexDirection: "column", width: "90%" }}>
          <View style={{ width: "100%", paddingLeft: "10%", marginTop: 10 }}>
            <View style={styles.option}>
              <RadioButton
                value="Compra"
                status={tipo === "Compra" ? "checked" : "unchecked"}
                onPress={() => {
                  setTipo("Compra");
                }}
              />
              <Text>Compra</Text>
            </View>
            <View style={styles.option}>
              <RadioButton
                value="Venda"
                status={tipo === "Venda" ? "checked" : "unchecked"}
                onPress={() => {
                  setTipo("Venda");
                }}
              />
              <Text>Venda</Text>
            </View>
          </View>
          <View style={styles.viewButton}>
            <View style={styles.button}>
              <ButtonForm
                text={"Adicionar"}
                key={"Adicionar"}
                handleOnPress={novaTransacao}
              />
            </View>
            <View style={styles.button}>
              <ButtonForm
                handleOnPress={() => setModalVisible(false)}
                key={"Cancelar"}
                text={"Cancelar"}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Modal;
