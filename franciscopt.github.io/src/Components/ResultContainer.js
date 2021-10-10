import IMCValue from "./IMCValue";
import IMCName from "./IMCName";
import IMCImage from "./IMCImage";

const ResultsContainer = ({ value, text, resultadoimc }) => {
  return (
    <div className={`ResultsContainer imc_res_${resultadoimc}`}>
      <IMCValue value={value} resultadoimc={resultadoimc} />
      <IMCName text={text} resultadoimc={resultadoimc} />
      <IMCImage image={resultadoimc} />
    </div>
  );
};

export default ResultsContainer;
