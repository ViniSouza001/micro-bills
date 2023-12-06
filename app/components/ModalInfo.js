import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import ButtonForm from "./Screens/login/ButtonForm";
import styles from "./stylesheets/modal.styles";
import { Picker as Selector } from "@react-native-picker/picker";
import { RadioButton } from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";
import ModalConfirmar from "./ModalConfirmar";

const ModalInfo = ({ item, setModalInfo }) => {
  const [formaPagto, setFormaPagto] = useState("Dinheiro");
  const [quantidade, setQuantidade] = useState(0);
  const [valorUnitario, setValorUnitario] = useState(0);
  const [inputMoeda, setInputMoeda] = useState("0");
  const [showConfirmar, setShowConfirmar] = useState(false);
  const [tipo, setTipo] = useState("");
  const [nomeItem, setNomeItem] = useState("");
  const [msg, setMsg] = useState("");
  const [type, setType] = useState(0);

  useEffect(() => {
    setFormaPagto(item.formaPagto);
    setNomeItem(item.item);
    setQuantidade(item.quantidade);
    setValorUnitario(item.valor);
    setTipo(item.tipo);
  }, []);

  const openConfirmar = (msg, type) => {
    setMsg(`${msg}`);
    setType(type);
    setShowConfirmar((state) => !state);
  };

  const alterarDados = () => {
    console.log("alterar");
  };

  const excluir = () => {
    console.log("excluir");
  };

  const confirmar = (value, type) => {
    if (!value) {
      setShowConfirmar(false);
    }

    if (value && type == 1) {
      alterarDados();
    } else if (value && type == 2) {
      excluir();
    }
  };

  return (
    <View style={styles.fundoPreto}>
      <View style={styles.modal}>
        <View style={styles.inputArea}>
          <Text style={styles.label}>Item:</Text>
          <TextInput
            style={[styles.textInput, styles.bordas]}
            value={nomeItem}
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
              value={quantidade.toString()}
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
        </View>

        <View style={[styles.columnButton]}>
          <View style={styles.button}>
            <ButtonForm
              text={"Alterar"}
              key={"Alterar"}
              handleOnPress={() => openConfirmar("ALTERAR", 1)}
            />
          </View>
          <View style={styles.button}>
            <ButtonForm
              text={"Excluir"}
              key={"Excluir"}
              handleOnPress={() => openConfirmar("EXCLUIR", 2)}
              isDelete={true}
            />
          </View>
          <View style={styles.button}>
            <ButtonForm
              text={"Cancelar"}
              handleOnPress={() => {
                setModalInfo(false);
              }}
            />
          </View>
        </View>
      </View>
      {showConfirmar && (
        <ModalConfirmar msg={msg} type={type} confirmar={confirmar} />
      )}
    </View>
  );
};

export default ModalInfo;
