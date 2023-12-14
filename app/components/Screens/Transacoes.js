import React, { useEffect, useState } from "react";
import Header from "./Header/Header.js";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import global from "../stylesheets/global.styles.js";
import styles from "../stylesheets/transacoesScreen.styles.js";
import setaDebito from "../../assets/images/seta_debito.png";
import setaLucro from "../../assets/images/seta_lucro.png";
import Modal from "../ModalTransacoes.js";
import ModalInfo from "../ModalInfo.js";
import Confirmar from "../ModalConfirmar.js";

function Transacoes({ route }) {
  const { usuarioId } = route.params;
  const [errorReturned, setErrorReturned] = useState("");
  const [transacoes, setTransacoes] = useState([]);
  const [faturamento, setFaturamento] = useState(null);
  const [fetchFeito, setFetchFeito] = useState(false);
  const [lucro, setLucro] = useState(null);
  const [mesAtual, setMesAtual] = useState(new Date().getMonth() + 1);
  const [modalVisible, setModalVisible] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [info, setInfo] = useState(null);

  const fetchTransacoes = async () => {
    const response = await fetch("http://192.168.1.182:3000/listarTransacao", {
      method: "POST",
      body: JSON.stringify({ usuarioId, mes: mesAtual - 1 }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!data.success) {
      setErrorReturned(data.message);
    } else {
      setErrorReturned(null);
      setTransacoes(data.transacoes);
    }
  };

  const fetchValores = async () => {
    setFaturamento(null);
    setLucro(null);
    try {
      const responseLucro = await fetch(
        "http://192.168.1.182:3000/lucroVendas",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ usuarioId: usuarioId, mes: mesAtual - 1 }),
        }
      );
      const dataLucro = await responseLucro.json();

      const responseFaturamento = await fetch(
        "http://192.168.1.182:3000/faturamentoMensal",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            usuarioId: usuarioId,
            mesAtual: mesAtual - 1,
          }),
        }
      );
      const dataFaturamento = await responseFaturamento.json();
      // valores
      setLucro(dataLucro.lucro.valorTotal);
      setFaturamento(dataFaturamento.faturamento);
    } catch (error) {
      console.log(error);
      return;
    } finally {
      setFetchFeito(true);
    }
  };

  useEffect(() => {
    if (showModalInfo) {
      return;
    } else {
      fetchValores();
      fetchTransacoes();
    }
  }, [mesAtual, modalVisible, !showModalInfo]);

  const openModalInfo = (item) => {
    setShowModalInfo(true);
    setInfo(item);
  };

  return (
    <View style={global.escuro}>
      <Header
        enviarMes={fetchValores}
        mesAtual={mesAtual}
        setMesAtual={setMesAtual}
      />
      {faturamento == null && lucro == null ? (
        <View style={global.loadingView}>
          <Image
            style={global.loading}
            source={require("../../assets/images/loading.gif")}
          />
        </View>
      ) : (
        <View style={[global.main, styles.container]}>
          <View
            style={{
              height: "10%",
              margin: 5,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                width: "49%",
                justifyContent: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Image
                  style={styles.img}
                  source={require("../../assets/images/faturamento_tema_escuro.png")}
                />
                <Text style={styles.txt}>Faturamento</Text>
              </View>
              <Text style={styles.verde}>R$ {faturamento}</Text>
            </View>
            <View
              style={{
                height: "100%",
                width: "2%",
                borderLeftColor: "#fff",
                borderLeftWidth: 2,
                justifyContent: "center",
              }}
            ></View>

            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                width: "49%",
                justifyContent: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Image
                  style={styles.imgL}
                  source={require("../../assets/images/lucro_tema_escuro.png")}
                />
                <Text style={styles.txt}>Lucro</Text>
              </View>
              <Text style={lucro >= 0 ? styles.verde : styles.vermelho}>
                R$ {lucro.toFixed(2)}
              </Text>
            </View>
          </View>

          {/* linha de baixo*/}

          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#FFFFFF",
            }}
          ></View>
          {errorReturned ? (
            <Text style={{ color: "#FFF" }}>{errorReturned}</Text>
          ) : (
            <FlatList
              style={{ width: "100%", flexDirection: "column" }}
              data={transacoes}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => {
                    openModalInfo(item);
                  }}
                >
                  <View style={styles.precoArea}>
                    {item.tipo == "Venda" ? (
                      <Image source={setaLucro} />
                    ) : (
                      <Image source={setaDebito} />
                    )}
                    <Text style={{ color: "#FFF" }}>
                      {item.quantidade}x {item.item}
                    </Text>
                  </View>
                  <View style={styles.valorArea}>
                    {item.formaPagto == "Dinheiro" && (
                      <Image
                        style={styles.formaPagto}
                        source={require("../../assets/images/money.png")}
                      />
                    )}
                    {item.formaPagto == "Pix" && (
                      <Image
                        style={styles.formaPagto}
                        source={require("../../assets/images/pix.png")}
                      />
                    )}
                    {item.formaPagto == "Cartao" && (
                      <Image
                        style={styles.formaPagto}
                        source={require("../../assets/images/cartao.png")}
                      />
                    )}

                    <Text
                      style={
                        item.tipo == "Venda"
                          ? styles.txtVenda
                          : styles.txtCompra
                      }
                    >
                      R$ {item.valor.toFixed(2)}
                    </Text>
                    <Text style={{ color: "#FFF" }}>
                      {item.data.substr(0, 4)}
                      {"-"}
                      {item.data.substr(5, 2)}
                      {"-"}
                      {item.data.substr(8, 2)}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      )}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => setModalVisible((state) => !state)}>
          <Image
            style={{ width: 55, height: 55 }}
            source={require("../../assets/images/add.png")}
          />
        </TouchableOpacity>
      </View>
      {modalVisible && (
        <Modal
          fetchValores={fetchValores}
          setModalVisible={setModalVisible}
          usuarioId={usuarioId}
          listarTransacoes={fetchTransacoes}
        />
      )}
      {showModalInfo && (
        <ModalInfo setModalInfo={setShowModalInfo} item={info} />
      )}
      {showModalInfo && (
        <ModalInfo setModalInfo={setShowModalInfo} item={info} />
      )}
    </View>
  );
}

export default Transacoes;
