import React, { useEffect, useState } from "react";
import Header from "../Screens/Header/Header.js";
import Footer from "../Screens/Footer/Footer.js";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import global from "../stylesheets/global.styles.js";
import styles from "../stylesheets/homeScreen.styles.js";
import PieChart from "react-native-pie-chart";

function HomeScreen({ route }) {
  const [totalDinheiro, setTotalDinheiro] = useState(0);
  const [totalCartao, setTotalCartao] = useState(0);
  const [totalPix, setTotalPix] = useState(0);
  const [totalVendas, setTotalVendas] = useState(0);
  const [totalValoresVendas, setTotalValoresVendas] = useState(0);
  const [dataGrafico, setDataGrafico] = useState([]);
  const [fetchFeito, setFetchFeito] = useState(false);
  const [mesAtual, setMesAtual] = useState(new Date().getMonth() + 1);
  const periodo = ["Diario", "Semanal", "Mensal"];
  const [indexPeriodo, setIndexPeriodo] = useState(0);
  const [periodVisible, setPeriodVisible] = useState(true);

  // grafico
  const widthAndHeight = 230;
  const sliceColor = ["#00BDAE", "#0D7BDA", "#23C800"];

  // grafico vazio
  const sliceGrayColor = ["#5F5F5F"];
  const infoVazio = [1];

  const { usuarioId } = route.params;

  const fetchValores = async () => {
    // zerar valores
    setTotalCartao(0);
    setTotalDinheiro(0);
    setTotalPix(0);
    setTotalVendas(0);
    setTotalValoresVendas(0);
    setDataGrafico([]);

    const body = { usuarioId, mesAtual };
    try {
      let url = "";
      if (indexPeriodo == 0) {
        url = "faturamentoDiario";
      } else if (indexPeriodo == 1) {
        url = "faturamentoSemanal";
      } else {
        url = "faturamentoMensal";
      }

      const response = await fetch(`http://192.168.1.11:3000/${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log(data);

      if (data && data.valores) {
        const {
          valorTotalCartao,
          valorTotalDinheiro,
          valorTotalPix,
          valorTotal,
        } = data.valores;
        const valores = [valorTotalPix, valorTotalCartao, valorTotalDinheiro];

        // inserção valores
        setTotalCartao(valorTotalCartao);
        setTotalDinheiro(valorTotalDinheiro);
        setTotalPix(valorTotalPix);
        setTotalVendas(data.transacoes.length);
        setTotalValoresVendas(valorTotal);
        setDataGrafico(valores);
      } else if (data.faturamento) {
        setTotalValoresVendas(data.faturamento);
      }
    } catch (error) {
      console.log(`Houve um erro: ${error}`);
      setTotalCartao(0);
      setTotalDinheiro(0);
      setTotalPix(0);
      setTotalVendas(0);
      setTotalValoresVendas(0);
      setDataGrafico([]);
      return;
    } finally {
      setFetchFeito(true);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      setFetchFeito(false);
      fetchValores();

      if (mesAtual != new Date().getMonth() + 1) {
        setPeriodVisible(false);
      } else {
        setPeriodVisible(true);
      }
    }, [mesAtual, usuarioId, indexPeriodo])
  );

  const goToNextPeriod = () => {
    if (indexPeriodo < periodo.length - 1) {
      setIndexPeriodo(indexPeriodo + 1);
    }
  };

  const goToPreviousPeriod = () => {
    if (indexPeriodo > 0) {
      setIndexPeriodo(indexPeriodo - 1);
    }
  };

  return (
    <View style={global.escuro}>
      {!fetchFeito ? (
        <View style={global.loadingView}>
          <Image
            style={global.loading}
            source={require("../../assets/images/loading.gif")}
          />
        </View>
      ) : (
        <>
          <Header
            enviarMes={fetchValores}
            mesAtual={mesAtual}
            setMesAtual={setMesAtual}
          />
          <View style={[styles.diario, global.main]}>
            {periodVisible && (
              <View style={styles.periodo}>
                <TouchableOpacity
                  onPress={() => {
                    goToPreviousPeriod();
                  }}
                >
                  <Image
                    style={styles.setaE}
                    source={require("../../assets/images/seta_esquerda.png")}
                  />
                </TouchableOpacity>
                <Text style={styles.text}>{periodo[indexPeriodo]}</Text>
                <TouchableOpacity
                  onPress={() => {
                    goToNextPeriod();
                  }}
                >
                  <Image
                    style={styles.setaD}
                    source={require("../../assets/images/seta_direita.png")}
                  />
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.grafico}>
              {dataGrafico.length !== 0 ? (
                <PieChart
                  style={{ zIndex: 0 }}
                  widthAndHeight={widthAndHeight}
                  series={dataGrafico}
                  sliceColor={sliceColor}
                  coverRadius={0.75}
                  coverFill={"transparent"}
                />
              ) : (
                <PieChart
                  style={{ zIndex: 0 }}
                  widthAndHeight={widthAndHeight}
                  series={infoVazio}
                  sliceColor={sliceGrayColor}
                  coverRadius={0.75}
                  coverFill={"transparent"}
                />
              )}
              <View
                style={{
                  zIndex: 1,
                  alignItems: "center",
                  position: "absolute",
                  marginTop: 75,
                }}
              >
                <Text style={styles.faturaTotal}>Faturamento</Text>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.faturaTotal}>R$ {totalValoresVendas}</Text>
              </View>
            </View>
            <View style={styles.cards}>
              <View style={[styles.card, styles.divPix]}>
                <Image source={require("../../assets/images/pix.png")} />
                <Text style={styles.txtPix}>R${totalPix.toFixed(2)}</Text>
              </View>
              <View style={[styles.card, styles.cartao]}>
                <Image source={require("../../assets/images/cartao.png")} />
                <Text style={styles.txtCartao}>
                  R$ {totalCartao.toFixed(2)}
                </Text>
              </View>
              <View style={[styles.card, styles.dinheiro]}>
                <Image source={require("../../assets/images/money.png")} />
                <Text style={styles.txtDinheiro}>
                  R$ {totalDinheiro.toFixed(2)}
                </Text>
              </View>
            </View>
            <View style={styles.totalDeVendas}>
              <Text style={styles.txtVendas}>Total De Vendas</Text>
              <Text style={styles.txtNumberVendas}>{totalVendas}</Text>
            </View>
            <Image />
          </View>
          <Footer usuarioId={usuarioId} showPerfilButton={true} />
        </>
      )}
    </View>
  );
}

export default HomeScreen;
