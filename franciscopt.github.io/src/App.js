import { useState, useEffect } from "react";
import "./App.css";
import GetDataContainer from "./Components/GetDataContainer";
import ResultsContainer from "./Components/ResultContainer";
import Footer from "./Components/Footer";

function App() {
  const [inputPeso, setInputPeso] = useState("");
  const [inputAltura, setInputAltura] = useState("");
  const [valueIMC, setValueIMC] = useState("none");
  const [textIMC, setTextIMC] = useState("none");
  const [codIMC, setCodIMC] = useState("none");

  useEffect(() => {
    calcIMC();
  });

  const onChange = (event) => {
    if (event.target.id === "input_peso") {
      let value = event.target.value;

      if (!value) {
        setInputPeso("");
        return;
      }

      value = value.replace(",", ".");
      value = parseFloat(value);

      if (value <= 0) {
        setInputPeso("");
        return;
      }
      if (isNaN(value)) {
        setInputPeso("");
        return;
      }
      setInputPeso(value);
    }
    if (event.target.id === "input_altura") {
      let value = event.target.value;

      if (!value) {
        setInputAltura("");
        return;
      }
      value = parseInt(value);
      if (value <= 0) {
        setInputAltura("");
        return;
      }
      if (isNaN(value)) {
        setInputAltura("");
        return;
      }

      setInputAltura(value);
    }
  };
  const calcIMC = () => {
    // ICM = (peso / Altura / Altura) * 10000
    let _peso = parseFloat(inputPeso);
    let _altura = parseInt(inputAltura);

    if (_peso <= 20 || _altura <= 60 || isNaN(_peso) || isNaN(_altura)) {
      setValueIMC("none");
      return;
    }

    let valorimc = (_peso / _altura / _altura) * 10000;

    valorimc = valorimc.toFixed(2);
    if (valorimc <= 0) valorimc = 0;
    let res = calcularIMCTextoECod(valorimc);
    setTextIMC(res.texto);
    setCodIMC(res.cod);
    setValueIMC(valorimc);
  };

  const calcularIMCTextoECod = (imc) => {
    if (imc < 18.5) {
      return { texto: "Abaixo do peso", cod: "abaixo_peso" };
    } else if (imc >= 18.5 && imc <= 24.9) {
      return { texto: "Normal", cod: "normal" };
    } else if (imc >= 25 && imc <= 29.9) {
      return { texto: "Peso a mais", cod: "acima_peso" };
    } else if (imc >= 30) {
      return { texto: "Obeso", cod: "obeso" };
    }
  };
  return (
    <div className="App">
      <div className="titulo">Calculadora IMC</div>
      <div className="containers">
        <GetDataContainer onChange={onChange} pesovalue={inputPeso} alturavalue={inputAltura} />
        <ResultsContainer value={valueIMC} text={textIMC} resultadoimc={codIMC} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
